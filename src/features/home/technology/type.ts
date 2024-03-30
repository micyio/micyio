export type TTechnology = {
  logo: React.ReactNode;
  name: string;
};

export type TTechnologies = {
  techName: string;
  techList: TTechnology[];
};

export type TTechnologyData = TTechnologies[];
