import React, { useRef } from "react";
import Head from "../components/Head/head";
import Projects from "../components/Projects/projects";

const Home = () => {
  const myRef = useRef<HTMLDivElement>();
  const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div>
      <Head refProp={myRef} scrollToRef={scrollToRef} />
      <Projects refProp={myRef} />
    </div>
  );
};

export default Home;
