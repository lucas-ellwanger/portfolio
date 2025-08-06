import {
  FileDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/lucas-ellwanger",
    icon: <LinkedinIcon className="size-7" strokeWidth={1.3} />,
    ariaLabel: "Open Lucas' LinkedIn profile",
  },
  {
    name: "GitHub",
    href: "https://github.com/lucas-ellwanger",
    icon: <GithubIcon className="size-7" strokeWidth={1.3} />,
    ariaLabel: "Open Lucas' GitHub profile",
  },
  {
    name: "Email",
    href: "mailto:lucasellwanger.dev@gmail.com",
    icon: <MailIcon className="size-7" strokeWidth={1.3} />,
    ariaLabel: "Send email to Lucas",
  },
  {
    name: "WhatsApp",
    href: "https://wa.link/sp2kf4",
    icon: <PhoneIcon className="size-7" strokeWidth={1.3} />,
    ariaLabel: "Start WhatsApp chat with Lucas",
  },
];

export const Links = () => {
  return (
    <ul className="flex flex-row gap-x-4">
      <>
        {socials.map(({ name, href, icon, ariaLabel }) => (
          <li key={name}>
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <Button
                  variant="social"
                  size="social"
                  className="rounded-full"
                  asChild
                >
                  <a
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={ariaLabel}
                  >
                    {icon}
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={5}>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </li>
        ))}
        <li>
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <Button
                variant="social"
                size="social"
                className="rounded-full"
                asChild
              >
                <a href="/CV.pdf" aria-label="Download Lucas' CV" download>
                  <FileDownIcon className="size-7" strokeWidth={1.3} />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={5}>
              <p>Download CV</p>
            </TooltipContent>
          </Tooltip>
        </li>
      </>
    </ul>
  );
};
