import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

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
  const [repoImageList, setRepoImageList] = useState<string[]>();

  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

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

  useEffect(() => {
    const tl = gsap.timeline();
    // TO DO  - make animation for image
    tl.fromTo(
      [titleRef.current],
      3,
      {
        y: 200,
        opacity: 0,
        delay: 1,
        skewY: 7
      },
      {
        y: 0,
        opacity: 1,
        ease: "elastic.out(0.4, 0.2)",
        skewY: 0
      }
    );
    tl.fromTo(
      buttonRef.current,
      1.2,
      {
        y: -200,
        opacity: 0,
        delay: 1,
        skewY: 7
      },
      {
        y: 0,
        opacity: 1,
        ease: "elastic.out(0.4, 0.2)",
        skewY: 0
      },
      "-=1.7"
    );
  }, []);

  const changeLanguage = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      [titleRef.current, buttonRef.current],
      0.8,
      {
        y: 0,
        opacity: 1,
        skewY: 0
      },
      {
        y: -200,
        opacity: 0,
        ease: "power4.in",
        skewY: -7,
        onComplete: function () {
          setLanguage(language === "ENG" ? "LV" : "ENG");
        }
      }
    );

    tl.fromTo(
      [titleRef.current],
      3,
      {
        y: 200,
        opacity: 0,
        delay: 1,
        skewY: 7
      },
      {
        y: 0,
        opacity: 1,
        ease: "elastic.out(0.4, 0.2)",
        skewY: 0
      }
    );
    tl.fromTo(
      buttonRef.current,
      1.2,
      {
        y: -200,
        opacity: 0,
        delay: 1,
        skewY: 7
      },
      {
        y: 0,
        opacity: 1,
        ease: "elastic.out(0.4, 0.2)",
        skewY: 0
      },
      "-=1.7"
    );
  };

  return (
    <div>
      <NavBar changeLanguage={changeLanguage} language={language} />
      <Head
        text={text}
        titleRef={titleRef}
        buttonRef={buttonRef}
        imageRef={imageRef}
      />
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
