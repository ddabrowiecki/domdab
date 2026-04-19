import ContentCard from "./ContentCard";
import { volunteerData } from "@/data/volunteerData";
import { type ContentDetail } from "@/data/utils";

const VolunteerPage = () => {
  return (
    <div className="mt-5">
      {volunteerData.map((org: ContentDetail) => (
        <ContentCard key={org.name} name={org.name} description={org.description} images={org.images} logo={org.logo}/>
      ))}
    </div>
  );
};

export default VolunteerPage;
