import { assets } from "../assets/assets";
import RequestBtn from "./RequestBtn";

const HeroSecction = () => {
  return (
    <>
      <img src={assets.bgIntroDesktop} alt="" />
      <img src={assets.imageMockups} alt="" />
      <h1>Next generation digital banking</h1>
      <p>
        {" "}
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <RequestBtn />
    </>
  );
};

export default HeroSecction;
