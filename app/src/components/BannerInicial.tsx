"use client";
import { useState } from "react";
import styles from "../styles/BannerInicial.module.css";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();

  interface contentsFaces {
    content: string;
    titleContent: string;
    subTitle: string;
  }
  const contentsStatic: contentsFaces[] = [
    {
      titleContent: "Bem-vindo ao Uninter Community",
      content:
        "Nosso objetivo é ajudar estudantes a alcançar seus objetivos acadêmicos, auxiliando nossos colegas com facilidade. Aqui, você encontra dicas de estudo, tutoriais, ferramentas e recursos personalizados para cada etapa da sua jornada. Quer esteja começando a faculdade ou caminhando para seu último ano acadêmico, nosso guia está aqui para te acompanhar. Vamos oferecer o suporte necessário e estamos sempre abertos a sugestões para melhorar sua experiência! ",
      subTitle: "Ciências da computação",
    },
  ];
  const [contents] = useState<contentsFaces[]>(contentsStatic);

  const scrollToSection = () => {
    const section = document.getElementById("targetSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navegarPagina = () => {
    router.push("/sobre");
  };

  return (
    <div>
      <div className={styles.container}>
        {contents.map((content, index) => (
          <div className={styles.containerContent} key={index}>
            <h1 className={styles.titleContent}>{content.titleContent}</h1>
            <span className={styles.subTitle}>{content.subTitle}</span>
            <p className={styles.content}>{content.content}</p>
            <div className={styles.buttonContainer}>
              <Button
                name="Iniciar"
                onclick={scrollToSection}
                className={styles.buttonInicia}
              />
              <Button
                name="Sobre-nós"
                onclick={navegarPagina}
                className={styles.buttonSobreNos}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
