import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Foto Aurelia Mutiah Raudyatuzzahra" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/aurelia-mutiah" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aurelia-mutiah-raudyatuzzahra-575260448" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Aurelia Mutiah</h1>
          <p>Information Technology Student at Universitas Gadjah Mada</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/aurelia-mutiah" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aurelia-mutiah-raudyatuzzahra-575260448" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;