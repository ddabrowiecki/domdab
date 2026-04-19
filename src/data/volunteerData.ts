import mazur from "@/assets/Lowiczanie/low1.jpeg";
import polesie from "@/assets/Lowiczanie/low2.jpeg";
import jp2 from "@/assets/Lowiczanie/low3.jpeg";
import kuj from "@/assets/Lowiczanie/low4.jpeg";
import amigos from "@/assets/amigos.png"
import { type ContentDetail } from "./utils";

export const volunteerData: ContentDetail[] = [
  {
    name: "Lowiczanie Polish Folk Dance Ensemble",
    images: [mazur, polesie, jp2, kuj],
    description: `Volunteered with a folk dance ensemble. Performed in Poland and across the United States to promote traditional Polish culture`,
  },
  {
    name: "Amigos de las Americas",
    description:
      "Collaborated for 8 weeks with the organizations Amigos de las Americas and PLAN Internacional. Built fuel-efficient stoves in rural districts.",
      logo: amigos,
  },
];
