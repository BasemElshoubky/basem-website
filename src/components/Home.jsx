import profile from "../assets/profile.jpg";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className="home">

      <div className="card">

        {/* Profile Picture*/}
        <img src={profile} alt="profile" className="home-img" />

        {/* Name*/}
        <h1>
          Hi, I'm <span>Basem Elshoubky</span>
        </h1>

        {/* Job title*/}
        <h3>Senior System Administrator</h3>

        {/* description*/}
        <p className="home-desc">
          Experienced IT professional with strong background in system administration,
          networking, and smart city solutions.
        </p>

        {/* Contact button*/}
        <div className="home-btn">
          basem@live.dk / +46 737545430
        </div>

        {/* Social Icons */}
        <div className="socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

      </div>

    </div>
  );
}

export default Home;