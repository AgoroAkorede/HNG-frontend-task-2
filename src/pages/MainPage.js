import Links from "../components/Link";
import Footer from "../components/Footer";

import shareIcon from "../images/share icon.svg";
import dots from "../images/dots-horizontal.svg";
import img from "../images/khadijah.jpg";
import cameraIcon from "../images/camera icon.svg";
import slackIcon from "../images/slack.jpg";
import githubIcon from "../images/github.jpg";

import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="shareBtn-container">
        <div className="tooltip">
          <div className="content">
            <p>Share Link</p>
          </div>
          <div className="bottom-center"></div>
        </div>

        <img src={shareIcon} alt="" id="share-btn" />

        <img src={dots} alt="" id="dots" />
      </div>

      <div className="image-container">
        <img src={img} alt="profileImage" id="profile__img" />

        <div className="onhover">
          <img src={cameraIcon} alt="" id="cameraIcon" />
        </div>
      </div>

      <p id="twitter">Abdulazeez_KT</p>
      <p id="slack">Khadijah</p>

      <div className="link-container">
        <Links
          url="https://twitter.com/Abdulazeez_KT"
          title="Twitter Link"
          subtext="Here is a link to my twitter profile"
          id="twiter-link"
        />

        <Links
          url="https://training.zuri.team/"
          title="Zuri Team"
          subtext="Meet the Zuri team"
          id="btn__zuri"
        />

        <Links
          url="http://books.zuri.team"
          title="Zuri Books"
          subtext="Check out tech related books here to aid your tech journey"
          id="books"
        />

        <Links
          url="https://books.zuri.team/python-for-beginners?ref_id=<khadijah>"
          title="Python Books"
          subtext="Check out our beginner-friendly books on python"
          id="book__python"
        />

        <Links
          url="https://backgroundcheck.zuri.team/"
          title="Background Check for Coders"
          subtext="We are also available to carry out background checks on coders"
          id="pitch"
        />

        <Links
          url="https://books.zuri.team/design-rules"
          title="Design Books"
          subtext="Check out our available design books"
          id="book__design"
        />

        <Link to="/contact" className="link-title link" id="contact">
          Contact
        </Link>
      </div>

      <div className="icons-container">
        <a href="https://slack.com" target="blank">
          <img src={slackIcon} alt="" />
        </a>

        <a href="https://github.com/KhayT/hng-task1" target="blank">
          <img src={githubIcon} alt="" />
        </a>
      </div>

      <Footer />
    </>
  );
};

export default MainPage;
