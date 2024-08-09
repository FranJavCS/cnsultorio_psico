"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";

import SectionLocations from "@/components/catalogo/SectionLocations";
import Calendar from "@/components/catalogo/Calendar";
import { Specialist } from "@/types/specialist";

const SpecialistGrid = ({ specialists }: { specialists: Specialist[] }) => {
  return (
    <section className="grid grid-cols-1 gap-6">
      {specialists.map((specialist: Specialist) => (
        <Card
          key={specialist._uid}
          className="w-full bg-neutral-300"
          shadow="md"
        >
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="lg"
                src={specialist.avatar}
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  {specialist.firstName} {specialist.lastName}
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @{specialist.username}
                </h5>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <section className="grid grid-cols-2 gap-2">
              <div>
                <div className="px-1 py-2">
                  <div className="text-small font-bold pb-1">Consultorios:</div>

                  <SectionLocations locations={[]} />
                </div>
                <div className="px-1 py-2">
                  <div className="text-small font-bold pb-1">Costos:</div>

                  <span>Desde: {specialist.price}</span>
                </div>
              </div>
              <Calendar />
            </section>

            {/*  {specialist.locations.map((location) => location.name)} */}
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export default SpecialistGrid;
