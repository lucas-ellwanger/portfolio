import Image from "next/image";
import {
  GithubIcon,
  RocketIcon,
  SquareArrowOutUpRightIcon,
} from "lucide-react";

import { projects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Projects = () => {
  return (
    <section className="flex flex-col gap-y-6">
      <div className="flex flex-row items-center">
        <RocketIcon className="mr-3 h-7 w-7" />
        <h1>Projetos em destaque</h1>
      </div>

      <div className="flex flex-col max-w-2xl">
        <div className="grid grid-cols-2 gap-6 ">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="bg-background gap-4 py-4 col-span-2 sm:col-span-1"
            >
              <CardContent className="px-4">
                <div className="relative aspect-video">
                  <Image
                    fill
                    src={project.image}
                    alt={project.name}
                    className="object-cover rounded-sm aspect-video"
                  />
                </div>
              </CardContent>

              <CardHeader className="px-4 -mb-4">
                <CardTitle className="text-base">{project.name}</CardTitle>
                <CardDescription className="text-neutral-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <div className="flex-1" />

              <CardContent className="flex flex-wrap gap-2 px-4 overflow-hidden">
                {project.stack.map((stack) => (
                  <Badge
                    key={stack}
                    variant="outline"
                    className="p-1.5 text-xs rounded text-neutral-300 cursor-default"
                  >
                    {stack}
                  </Badge>
                ))}
              </CardContent>

              <Separator />

              <CardFooter className="gap-2 px-4">
                <Button
                  asChild
                  variant="social"
                  className="flex-1/2 rounded-full"
                >
                  <a
                    href={project.liveUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`${project.name} live view`}
                  >
                    <SquareArrowOutUpRightIcon strokeWidth={1.7} />
                    Ver online
                  </a>
                </Button>

                <Button
                  asChild
                  variant="social"
                  className="flex-1/2 rounded-full"
                >
                  <a
                    href={project.repositoryUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`${project.name} github repository`}
                  >
                    <GithubIcon strokeWidth={1.7} />
                    Repositório
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
