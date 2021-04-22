import { MdContactMail } from 'react-icons/md';
import "../styles/ContactMe.css";

const ContactMe = () => {

    return (
        <article id="contact-me">
            <div className="contact-me-text-container">
                <h3 className="contact-me-text">Would you like to say something?</h3>
                <p className="contact-me-text">
                    <strong>
                        {"If you find any bug/inconvenience or wish to see a new feature please let me know!"}<br />
                        {"Of course, you can also just write to say thanks or hello :)"}
                    </strong>
                </p>
                <div>
                    <a rel="noreferrer" href="mailto: byburock34@gmail.com" target="_blank">
                        <MdContactMail id="mail-icon" size="3em" />
                    </a>
                </div>
            </div>

        </article>
    )
}

export default ContactMe
