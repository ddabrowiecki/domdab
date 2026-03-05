import frisco from "@/assets/pexels-tae-fuller-331517-1141853.jpg"
import krakow from "@/assets/pexels-caio-46273.jpg"
import chichen from "@/assets/pexels-deniss-bojanini-174298580-11150876.jpg"
import cairo from "@/assets/pexels-esh3rwey-5609738.jpg"
import redentor from "@/assets/pexels-lefter-d-3476232-5195468.jpg"
import moscow from "@/assets/pexels-tom-d-arby-3904203-6000331.jpg"
import mecca from "@/assets/pexels-yasirgurbuz-11259831.jpg"
import polishFlag from "@/assets/1f1f5-1f1f1.webp"
import usFlag from "@/assets/usa.webp"
import brazilFlag from "@/assets/brazil.png"
import arabFlag from "@/assets/palestine.png"
import egyptFlag from "@/assets/egypt.webp"
import russiaFlag from "@/assets/russia.webp"
import mexicoFlag from "@/assets/mexico.png"

type Language =
  | "English"
  | "Polish"
  | "Spanish"
  | "Portuguese"
  | "Russian"
  | "Modern Standard Arabic"
  | "Egyptian Arabic";

type Proficiency = "Beginner" | "Intermediate" | "Fluent" | "Native";


export interface LanguageDetail {
  name: Language;
  level: Proficiency;
  moreInfo?: string;
  image?: string;
  emoji?: string;
}

export const languageData: LanguageDetail[] = [
  { name: "English", level: "Native", image: frisco, emoji: usFlag },
  { name: "Polish", level: "Native", image: krakow, emoji: polishFlag },
  { name: "Spanish", level: "Fluent", image: chichen, emoji: mexicoFlag },
  { name: "Portuguese", level: "Intermediate", image: redentor, emoji: brazilFlag },
  { name: "Modern Standard Arabic", level: "Intermediate", image: mecca, emoji: arabFlag },
  { name: "Russian", level: "Beginner", image: moscow, emoji: russiaFlag },
  { name: "Egyptian Arabic", level: "Beginner", image: cairo, emoji: egyptFlag },
];
