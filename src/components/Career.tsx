import "./styles/Career.css";
import { jobs } from "../data/siteContent";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {jobs.map((job) => (
            <div className="career-info-box" key={`${job.company}-${job.range}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{job.role}</h4>
                  <h5>{job.company}</h5>
                  <span className="career-range">{job.range}</span>
                </div>
                <h3>{job.yearLabel}</h3>
              </div>
              <p>{job.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
