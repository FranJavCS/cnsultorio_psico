"use client";
import { Card, Button, CardBody, Input } from "@nextui-org/react";
import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useAuthState,
} from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SignUpPage() {
  const formItems = [
    {
      name: "fullName",
      label: "Nombre Completo",
      defaultValue: "",
      isRequired: "Este campo es requerido",
      type: "text",
    },
    {
      name: "username",
      label: "Username",
      defaultValue: "",
      isRequired: false,
      type: "text",
    },
    {
      name: "email",
      label: "Correo",
      defaultValue: "",
      isRequired: "Este campo es requerido",
      type: "email",
    },
    {
      name: "password",
      label: "Contraseña",
      defaultValue: "",
      isRequired: "Este campo es requerido",
      type: "password",
    },
    {
      name: "avatar",
      label: "Avatar",
      defaultValue: "",
      isRequired: false,
      type: "text",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth();
  const [user] = useAuthState(auth);

  const router = useRouter();

  if (user) {
    router.push("/");
  }

  const [createUserWithEmailAndPassword, , isLoadingRegister] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating] = useUpdateProfile(auth);

  const handleRegister = async (data: any) => {
    try {
      const user = await createUserWithEmailAndPassword(
        data.email,
        data.password,
      );

      if (!user) {
        return;
      }

      const result = await updateProfile({
        displayName: data.username,
        photoURL: data.avatar,
      });

      if (!isLoadingRegister && !updating && result) {
        router.push("/");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleRegisterApi = async (data: any) => {
    try {
      setLoading(true);
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/");

        return;
      }
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <Card className="border border-indigo-400">
        <CardBody className="p-8 w-96 max-w-md">
          <form onSubmit={handleSubmit(handleRegisterApi)}>
            <h1 className="text-2xl font-bold mb-6 text-center text-primary">
              Registrarme
            </h1>
            {formItems.map((item) => (
              <Input
                key={item.name}
                fullWidth
                className="p-2 mb-4 "
                errorMessage={errors[item.name]?.message?.toString()}
                isInvalid={errors[item.name] ? true : false}
                isRequired={item.isRequired ? true : false}
                label={item.label}
                type={item.type}
                {...register(item.name, { required: item.isRequired })}
                color={errors[item.name] ? "danger" : "secondary"}
                variant="bordered"
              />
            ))}

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <Button
              fullWidth
              color="primary"
              isLoading={loading}
              size="lg"
              type="submit"
            >
              Registrarme
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
