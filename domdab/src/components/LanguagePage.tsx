import GridCard from "./GridCard";
import { languageData } from "@/data/LanguageData";
import { type LanguageDetail } from "@/data/LanguageData";

const LanguagePage = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-5 noto-color-emoji-regular">
      {languageData.map((langDetail: LanguageDetail) => (
        <GridCard
          name={langDetail.name}
          level={langDetail.level}
          image={langDetail.image}
          emoji={langDetail.emoji}
        />
      ))}
    </div>
  );
};

export default LanguagePage;
