import { Link } from "react-router-dom";
import "../css/about.css";
import { facebook } from "../main";
import { instagram } from "../main";
import { github } from "../main";
import { profile } from "../main";

const About = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <img className="profile-image" src={profile}></img>
        </div>
        <div className="col-md-6 d-grid">
          <div className="row align-self-center">
            <h1 className="name-container"> Ethan Lyle R. Uy </h1>
          </div>
          <div className="row mt-0 align-self-start">
            <p className="body-text">
              A Cebu based photographer, focused on street 
              photography, always looking for new things in the community.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4"></div>
        <div className="about-links col-md-4 d-flex justify-content-between">
          <Link className="ms-4" to="https://github.com/EthanUy">
            <img className="about-svg" src={github}></img>
          </Link>
          <Link to="https://www.instagram.com/ethanlyleuy/">
            <img className="about-svg" src={instagram}></img>
          </Link>
          <Link className="me-4" to="https://www.facebook.com/ethanlyle.uy/">
            <img className="about-svg" src={facebook}></img>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default About;
