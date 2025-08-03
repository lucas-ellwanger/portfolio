import { UserRoundCheckIcon } from "lucide-react";

export const About = () => {
  return (
    <section className="flex flex-col gap-y-6">
      <div className="flex flex-row items-center">
        <UserRoundCheckIcon className="mr-3 h-7 w-7" />
        <h1>Sobre mim</h1>
      </div>

      <p>
        Após concluir meu bacharelado em{" "}
        <span className="font-medium text-neutral-100">
          Sistemas de Informação
        </span>
        , dediquei-me completamente à programação. Complementei minha formação
        com diversos cursos e me especializei em{" "}
        <span className="font-medium text-neutral-100">
          desenvolvimento web
        </span>
        . <span className="italic">O que mais me motiva na programação</span> é
        resolver problemas de forma criativa através do código — aquela
        satisfação única de encontrar a solução ideal. Minha stack principal
        inclui{" "}
        <span className="font-medium text-neutral-100">
          TypeScript, Next.js e PostgreSQL
        </span>
        . Também estou familiarizado com Tanstack React Query, tRPC, Prisma e
        Drizzle. Atualmente, estou em busca de uma posição{" "}
        <span className="font-medium text-neutral-100">em tempo integral</span>{" "}
        como desenvolvedor full-stack.
      </p>
    </section>
  );
};
