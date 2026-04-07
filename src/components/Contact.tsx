import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { siteLinks, siteMeta, awsCertification } from "../data/siteContent";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href={siteLinks.mailto}
                data-cursor="disable"
              >
                {siteLinks.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a
                href={`tel:${siteLinks.phoneTel}`}
                data-cursor="disable"
              >
                {siteLinks.phoneDisplay}
              </a>
            </p>
            <h4>Certifications</h4>
            <p className="contact-cert">
              {awsCertification.name}
              <br />
              <a
                href={siteLinks.awsVerification}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
              >
                Verify on AWS
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={siteLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={siteLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{siteMeta.name}</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
