import ContentCard from "./JobCard";
import SideAnimation from "./SideAnimation";
import redditLogo from "../assets/RedditLogo.png";

const EngHistory = () => {
  return (
    <>
      <div>
        <SideAnimation logoSource={redditLogo}>
          <ContentCard text="I worked here" />
        </SideAnimation>
      </div>
    </>
  );
};

export default EngHistory;
