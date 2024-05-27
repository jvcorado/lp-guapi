import { Link } from "lucide-react";
import Image from "next/image";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutTubeIcon,
} from "@/components/social-icons";

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export default function AboutSection() {
  return (
    <section
      id="#about"
      className=" grid grid-cols-1 md:grid-flow-col gap-5 items-center !justify-center "
    >
      <div className="flex flex-col justify-center gap-3">
        <h1 className="font-heading text-3xl md:text-4xl text-center md:text-start font-bold">
          @jotaoprogramador
        </h1>
        <p className="text-center md:text-start max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Desenvolvedor Front End Jr, graduando em ciência da computação, sétimo
          semestre. Experiência com as tecnologias React Js, Next Js, Firebase,
          Typescript e conhecimento breve em Node Js e React Native. E
          atualmente embaixador da Dio Campus Expert.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-6">
          <SocialLink
            href="https://instagram.com/lucasnhimi"
            icon={InstagramIcon}
          />
          <SocialLink href="https://github.com/lucasnhimi" icon={GitHubIcon} />
          <SocialLink
            href="https://linkedin.com/in/lucasnhimi"
            icon={LinkedInIcon}
          />
          <SocialLink
            href="https://youtube.com/lucasnhimi"
            icon={YoutTubeIcon}
          />
        </div>
      </div>
      <div className="w-[350px] flex justify-center ">
        <Image
          src="/foto.jpeg"
          width={350}
          height={350}
          quality={"95"}
          priority={true}
          alt="Picture of the author"
          className="rounded-lg shadow-lg w-[250px] h-[250px] object-cover aspect-square rotate-3"
        />
      </div>
    </section>
  );
}
