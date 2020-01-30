import React, { useRef, useState, useEffect } from "react";
import { mainText } from "../data/text";
import { data, dataText } from "../data/repositories";
import { contactsData, contactsLabel } from "../data/cv";
import Head from "../components/Head/head";
import Projects from "../components/Projects/projects";
import Contacts from "../components/Contacts/contacts";
import NavBar from "../components/Navbar/navbar";

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
  const [language, setLanguage] = useState("ENG");
  const [contacts, setContacts] = useState<Contacts>();
  const [label, setLabel] = useState<Label>({
    name: "",
    phone: "",
    email: "",
    date: "",
    github: ""
  });
  const myRef = useRef<HTMLDivElement>();
  const contactRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setRepositories(data);
    setContacts(contactsData);

    if (language === "ENG") {
      setText(mainText.eng);
      setSecondary(dataText.eng);
      setLabel(contactsLabel.eng);
    } else {
      setText(mainText.lv);
      setSecondary(dataText.lv);
      setLabel(contactsLabel.lv);
    }
  }, [language]);

  const changeLanguage = () => {
    setLanguage(language === "ENG" ? "LV" : "ENG");
  };

  const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div>
      <NavBar changeLanguage={changeLanguage} language={language} />
      <Head
        refProp={myRef}
        contactRef={contactRef}
        scrollToRef={scrollToRef}
        text={text}
      />
      <Projects
        refProp={myRef}
        repositories={repositories}
        secondary={secondary}
      />
      <Contacts contacts={contacts} label={label} contactRef={contactRef} />
    </div>
  );
};

export default Home;
