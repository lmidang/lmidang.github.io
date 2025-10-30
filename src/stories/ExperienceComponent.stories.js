import {ExperienceComponent} from "../experience-component";
import '../index.css';

export default {
  component: ExperienceComponent,
  args: {
    companyName: "Example Corp",
    roleTitle: "Software Engineer",
    descriptionPoints: [
      "Developed user-friendly web applications",
      "Collaborated with cross-functional teams",
      "Implemented responsive design"
    ],
    languagesTech: ["JavaScript", "React", "TypeScript"],
    startDate: "Jan 2020",
    endDate: "Dec 2022"
  },
};

export const Default = {};