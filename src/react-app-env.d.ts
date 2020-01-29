/// <reference types="react-scripts" />

type Repositories = {
  name: string;
  code: string;
  website: string;
  language: string;
  library: string;
  images: Images;
};

type Images = {
  1: string;
  2: string;
  3: string;
  4: string;
};

type Contacts = {
  name: string;
  phone: string;
  email: string;
  date: string;
  github: string;
};

type WorkExperience = {
  work1: {
    date: string;
    position: string;
    address: string;
  };
  work2: {
    date: string;
    position: string;
    address: string;
  };
};

type EducationAndTraining = {
  school1: {
    date: string;
    qualification: string;
    institution: string;
  };
  school2: {
    date: string;
    qualification: string;
    institution: string;
  };
  school3: {
    date: string;
    qualification: string;
    institution: string;
  };
};

type Competences = {
  languageSpoken: string;
  otherLanguages: string;
  socialSkillsAndCompetences: string;
  organizationalSkillsAndCompetences: string;
  computerSkillsAndCompetences: string;
  additionalInformation: string;
};
