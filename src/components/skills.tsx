/* eslint-disable @next/next/no-img-element */
import { CodeXmlIcon } from "lucide-react";

import { skills } from "@/lib/skills";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  return (
    <section className="flex flex-col gap-y-6">
      <div className="flex flex-row items-center">
        <CodeXmlIcon className="mr-3 h-7 w-7" />
        <h1>Skills</h1>
      </div>

      <ul className="flex flex-row flex-wrap gap-2">
        {skills.map(({ name, href }) => (
          <li key={href}>
            <Badge variant="logo">
              <img
                src={href}
                alt={`${name} logo`}
                className="mr-[0.45rem] size-4.5 md:size-7"
              />
              <span className="text-base font-normal text-neutral-300">
                {name}
              </span>
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
};
