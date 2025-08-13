import Image from "next/image";

import { Links } from "@/components/links";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-y-6">
      <div className="flex gap-x-6 items-center">
        <Image
          src="https://avatars.githubusercontent.com/u/11988465?v=4"
          alt="Foto de perfil do Lucas"
          width="80"
          height="80"
          priority
          quality={100}
          className="rounded-full"
        />

        <div className="flex flex-col gap-0.5">
          <h1 className="text-xl">Lucas Ellwanger</h1>
          <h1 className="text-[1.10rem] text-neutral-300">Software Engineer</h1>
        </div>
      </div>

      <p className="-mb-2">{`Oi, sou o Lucas, prazer! :)`}</p>

      <p>
        Desenvolvedor full-stack apaixonado por construir aplicações web
        completas — desde o planejamento inicial até a interface do usuário e
        infraestrutura. Utilizo tecnologias modernas para resolver problemas
        reais com código limpo, arquitetura robusta e experiências intuitivas.
      </p>

      <Links />
    </section>
  );
};
