import { Button, buttonVariants } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import { cn } from "@/lib/utils";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className=" relative flex flex-col items-center justify-center gap-10 "
    >
      {/*   <svg
        viewBox="0 0 1024 1024"
        className="absolute ltop-full left-[50%] mx-auto  -z-10 h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg> */}
      <div className="container flex max-w-[64rem] flex-col items-center text-center gap-7">
        <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center">
          📅 Incscrições encerradas.
          <ModeToggle />
        </span>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-center font-bold">
          The Next Dev <br /> Full-stack{" "}
          <span className="text-indigo-400">Next.js 14</span>
        </h1>
        <p className=" text-center max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {" "}
          Invista na sua carreira e aprenda a desenvolver aplicações que as
          grandes empresas estão utilizando. Faça parte da próxima turma da
          formação mais completa de Next.js 14.
        </p>
        <div className="grid grid-cols-1  md:grid-flow-col gap-3 items-center">
          <a
            href="#investment"
            className="bg-indigo-400 border-none ligth:text-black rounded-lg py-2 px-4 text-md text-white shadow-lg md:font-bold"
          >
            Quero fazer fazer
          </a>
          <a
            href="#about"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
