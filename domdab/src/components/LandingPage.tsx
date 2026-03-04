import DomProfilePic from "../assets/DomProfilePic.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-around mt-5">
        <img className="profile-pic" src={DomProfilePic} />
        <p className="intro">Hi, I'm Dom!</p>
      </div>
    </>
  );
};

export default LandingPage;
