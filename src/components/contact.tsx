import { HandshakeIcon } from "lucide-react";

import { Links } from "./links";

export const Contact = () => {
  return (
    <section className="flex flex-col gap-y-6">
      <div className="flex flex-row items-center">
        <HandshakeIcon className="mr-3 h-7 w-7" />
        <h1>Vamos conectar</h1>
      </div>

      <p className="text-balance">
        Estou aberto a novas oportunidades. Sinta-se à vontade para entrar em
        contato — seja para conversar sobre projetos, oportunidades
        profissionais ou simplesmente trocar ideias. Responderei o mais breve
        possível!
      </p>

      <Links />
    </section>
  );
};
