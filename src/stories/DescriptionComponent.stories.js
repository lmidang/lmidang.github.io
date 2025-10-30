import {DescriptionComponent} from "../description-component";
import '../index.css';

export default {
  component: DescriptionComponent,
  args: {
    companyName: "Example Corp",
    roleTitle: "Software Engineer",
    descriptionPoints: [
      "Developed user-friendly web applications",
      "Collaborated with cross-functional teams",
      "Implemented responsive design"
    ],
    languagesTech: ["JavaScript", "React", "TypeScript"]
  },
}

export const Default = {};