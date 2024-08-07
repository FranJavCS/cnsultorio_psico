import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>
          Bienvenido a{" "}
          <span className={title({ color: "violet" })}>
            PsicoConexión&nbsp;
          </span>
        </h1>

        <br />
        <h1 className={(title(), "text-2xl mt-3")}>
          Tu Espacio de Bienestar en Línea
        </h1>
        <h4 className={subtitle({ class: "mt-7" })}>
          En PsicoConexión, creemos que la salud mental es fundamental para una
          vida plena y feliz. Nuestro equipo de psicólogos altamente capacitados
          está aquí para brindarte apoyo, orientación y herramientas para
          enfrentar los desafíos emocionales y mejorar tu bienestar.
        </h4>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Conocenos
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          Ver Especialistas
        </Link>
      </div>
    </section>
  );
}
