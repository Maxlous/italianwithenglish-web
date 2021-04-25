import { VscGithubAlt } from "react-icons/vsc";
import "../styles/ForDevelopers.css";

const ForDevelopers = () => {
  return (
    <article id="for-developers">
      <div className="for-developers-text-container">
        <h3 className="for-developers-text">Are you a developer?</h3>
        <p className="for-developers-text">
          <strong>
            Join me on Github to contribute this project to help people learning
            Italian!
          </strong>
        </p>
        <div>
          <a
            rel="noreferrer"
            href="https://github.com/Maxlous/learnItalian"
            target="_blank"
          >
            <VscGithubAlt id="github-icon" size="3em" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ForDevelopers;
