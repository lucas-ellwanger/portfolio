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

      <ul className="flex flex-row flex-wrap gap-2 md:gap-4">
        {skills.map(({ name, href }) => (
          <li key={href}>
            <Badge variant="logo">
              <img
                src={href}
                alt="skill logo"
                className="mr-2 size-4 md:size-6"
              />
              <span className="text-base font-normal text-neutral-300 md:text-base">
                {name}
              </span>
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
};
