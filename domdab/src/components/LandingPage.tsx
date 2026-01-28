import DomProfilePic from "../assets/DomProfilePic.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="flex direction-row a-center j-around m-t-20">
        <img className="profile-pic" src={DomProfilePic} />
        <p className="intro">Hi, I'm Dom!</p>
      </div>
    </>
  );
};

export default LandingPage;
