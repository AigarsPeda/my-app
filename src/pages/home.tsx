import React, { useRef, useState, useEffect } from "react";
import { mainText } from "../data/text";
import { data, dataText } from "../data/repositories";
import Head from "../components/Head/head";
import Projects from "../components/Projects/projects";

const Home = () => {
  const [repositories, setRepositories] = useState<Repositories[]>();
  const [text, setText] = useState<Language>({ text: "", button: "" });
  const [secondary, setSecondary] = useState<DataLanguage>({
    language: "",
    none: "",
    library: "",
    code: "",
    notDeployed: "",
    website: ""
  });
  const [language, setLanguage] = useState("eng");
  const myRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setRepositories(data);

    if (language === "eng") {
      setText(mainText.eng);
      setSecondary(dataText.eng);
    } else {
      setText(mainText.lv);
      setSecondary(dataText.lv);
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
      <Projects
        refProp={myRef}
        repositories={repositories}
        secondary={secondary}
      />
    </div>
  );
};

export default Home;
