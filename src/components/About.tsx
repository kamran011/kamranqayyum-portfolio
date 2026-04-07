import "./styles/About.css";
import {
  aboutSummary,
  awsCertification,
  educationLine,
  siteLinks,
} from "../data/siteContent";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">{aboutSummary}</p>
        <p className="about-education">{educationLine}</p>
        <p className="about-cert">
          <strong>{awsCertification.name}</strong> — valid {awsCertification.validFrom}{" "}
          – {awsCertification.validTo}.{" "}
          <a
            href={siteLinks.awsVerification}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            Verify on AWS
          </a>{" "}
          (ID: {awsCertification.verificationId})
        </p>
      </div>
    </div>
  );
};

export default About;
