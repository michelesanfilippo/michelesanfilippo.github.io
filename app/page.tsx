import { Nav } from "@/components/Nav/Nav";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { PerfHud } from "@/components/Debug/PerfHud";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      {process.env.NODE_ENV === "development" && <PerfHud />}
    </>
  );
}
