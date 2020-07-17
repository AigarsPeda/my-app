import React, { useState, useEffect } from "react";
import { mainText } from "../data/text";
import { data, dataText } from "../data/repositories";
import { contactsData, contactsLabel } from "../data/cv";
import Head from "../components/Head/head";
import Projects from "../components/Projects/projects";
import Contacts from "../components/Contacts/contacts";
import NavBar from "../components/Navbar/navbar";
import ImageCarousel from "../components/Carousel/ImageCarousel";

const Home = () => {
  const [repositories, setRepositories] = useState<Repositories[]>();
  const [text, setText] = useState<Language>({ text: "", button: "" });
  const [secondary, setSecondary] = useState<DataLanguage>({
    language: "",
    none: "",
    library: "",
    code: "",
    notDeployed: "",
    website: "",
  });
  const [language, setLanguage] = useState("ENG");
  const [contacts, setContacts] = useState<Contacts>();
  const [label, setLabel] = useState<Label>({
    name: "",
    phone: "",
    email: "",
    date: "",
    github: "",
  });
  const [repoImageList, setRepoImageList] = useState<string[]>();

  const setRepoImagesById = (id: number) => {
    repositories?.filter((repo) => {
      if (repo.id === id) {
        setRepoImageList(repo.images);
      }
    });
  };

  const closeImageCarousel = () => {
    setRepoImageList(undefined);
  };

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

  return (
    <div>
      <NavBar changeLanguage={changeLanguage} language={language} />
      <Head text={text} />
      <Projects
        repositories={repositories}
        secondary={secondary}
        setRepoImagesById={setRepoImagesById}
      />
      {repoImageList && (
        <ImageCarousel
          repoImageList={repoImageList}
          closeImageCarousel={closeImageCarousel}
        />
      )}

      <Contacts contacts={contacts} label={label} />
    </div>
  );
};

export default Home;
