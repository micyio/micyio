import { FaGolang, FaJava, FaPython, FaSwift } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp, SiPhp } from "react-icons/si";
import { TTechnologyData } from "./type";

export const technologyData: TTechnologyData = [
  {
    techName: "Programming Languages:",
    techList: [
      { logo: <IoLogoJavascript />, name: "JavaScript" },
      { logo: <FaPython />, name: "Python" },
      { logo: <FaJava />, name: "Java" },
      { logo: <FaSwift />, name: "Swift" },
      { logo: <SiCsharp />, name: "C#" },
      { logo: <SiPhp />, name: "PHP" },
      { logo: <FaGolang />, name: "GO" },
    ],
  },
];
