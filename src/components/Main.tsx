import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://amznpersonaldata.s3.ap-south-1.amazonaws.com/IMG_8378.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA3B475TNKO5XSST3G%2F20260118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260118T144923Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiSDBGAiEAslBW8qGjMpI4FGaCvuWY7h4voEqLICFZXtDfGycQ2esCIQC3CVr2VUdYAPCD3i2Va9A%2BVAB8OI5vPRLNRGI0I21QNCqjAgiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDc2MDAwNzcyNzk1NiIMLD5cFjiK2Wzh%2BBPPKvcBUBdrSnKemOhHZ0dr5sNENGMEudfgWoXjncwfsGwLXRJuCsEx29UqlL7Bb%2BGoeGyMQg%2Fl2XSCvTOX3ipWktvo8nm2e8zWKjvp30LMHxP9wPufv%2BFEue7lV25Gk4vyi3r4I2VYMm4lXcYCqLSpoJu4sOk0FBs%2FasXv3bNoX6nIY9TIZFoOVA98ivEzqbnvUxLpXPn3SRO7ZguDWZYPpoLj5NdkjHgMAkTBhcJuuyVu58qSc7xdG7zLM7eDQTkkYOgIPYJVcMSPyoHQpYLwqt17z6Uzt%2Brbc8ZFF4QChPHgGyotkdETzhZPr7apN4ewIfgDcNQ0EcC78TCy%2FbHLBjreAQR0vpYRtK%2FOaBFhINGbh0zfVm8Fs9iUVhJZthln7EXbx%2B57sf1CPsmMN6X7lPogzgZlw%2BbVGX0pXjk83%2BTILez9npYUqPtoV%2BDwi7LYC0jWGAZ5HACXyjntDTStMvo9HOx%2BS9jY6uv8Cn6PMDU0crUA%2F%2By3g8db%2BemLWARCBWPne2SRMvHDjOlHiW8LPalgHB%2Bqhcyzb6vWouILPuF%2Fzzy78gdKJBf7Sa4B28Z9XKiZPG8DalPEUCJvAXPzrX05G1huH%2Bb4uw6zUQnrGsOD4xPEZKIV3jdQlWRwnOABzQ%3D%3D&X-Amz-Signature=1e9333f391825aa296251daaa346f2b5145a5cf5f9e4f4b7921f58fc2a90f510&X-Amz-SignedHeaders=host&response-content-disposition=inline" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Aki99786" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ankit-yadav-eleven/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ankit Yadav</h1>
          <p>Backend AI Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Aki99786" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ankit-yadav-eleven/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;