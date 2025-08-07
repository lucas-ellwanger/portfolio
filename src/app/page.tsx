import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";
import { Separator } from "@/components/ui/separator";
import { Projects } from "@/components/projects";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
      <About />
      <Separator />
      <Contact />
      <Footer />
    </>
  );
}
