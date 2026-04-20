import GridCard from "./GridCard";
import { languageData, type LanguageDetail } from "@/data/langData";

const LanguagePage = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5 noto-color-emoji-regular">
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
