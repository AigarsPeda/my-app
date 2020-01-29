import React, { useRef, useState, useEffect } from "react";
import { mainText } from "../data/text";
import Head from "../components/Head/head";
import Projects from "../components/Projects/projects";

const Home = () => {
  const [text, setText] = useState<Language>();
  const [language, setLanguage] = useState("eng");
  const myRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (language === "eng") {
      setText(mainText.eng);
    } else {
      setText(mainText.lv);
    }
  }, [language]);

  const changeLanguage = () => {
    setLanguage(language === "eng" ? "" : "eng");
  };

  const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div>
      <Head
        refProp={myRef}
        scrollToRef={scrollToRef}
        text={text}
        changeLanguage={changeLanguage}
      />
      <Projects refProp={myRef} />
    </div>
  );
};

export default Home;
