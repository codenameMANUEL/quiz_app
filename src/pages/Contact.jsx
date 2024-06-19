import Nav from "../components/Nav";
import "../styles/contact.css";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const accordionDataOne = [
  {
    title: "Section 1",
    content: "Content for section 1.",
  },
  {
    title: "Section 2",
    content: "Content for section 2.",
  },
  {
    title: "Section 3",
    content: "Content for section 3.",
  },
];

const accordionDataTwo = [
  {
    title: "Section 4",
    content: "Content for section 4.",
  },
  {
    title: "Section 5",
    content: "Content for section 5.",
  },
  {
    title: "Section 6",
    content: "Content for section 6.",
  },
];

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="contact_section_one">
        <div>
          <h3>contact us</h3>
          <p>
            Have a question? we've got answers. Check out our FAQs below, or
            send us a message using the form. We're happy to help.
          </p>
          <p>
            <span>
              <Link to="/">Home</Link>
            </span>
            <span> &gt; </span>
            <span>Contact us</span>
          </p>
        </div>
      </div>

      <div>
        <div className="accordion_text">
          <div>
            <h4>FAQ</h4>
            <h2>How Can We Help You?</h2>
          </div>
        </div>
        <div className="accordion_container">
          <Accordion items={accordionDataOne} />
          <Accordion items={accordionDataTwo} />
        </div>
      </div>

      <div className="get_in_touch">
        <div className="get_in_touch_text">
          <h2>Get In touch with us</h2>
          <p className="note">Please feel free to contact us using the form below.
            We will respond to your inquiry as soon as as possible
          </p>
          <p className="mail">
            <span>Email: </span>
            <span>Quizfy@email.com</span>
          </p>
          <p className="phone">
            <span>Phone Number: </span>
            <span>+293-123-6830</span>
          </p>
          <p>Connect on social</p>
        </div>
        <div className="form">
          <input type="text" placeholder="Enter your name"/>
          <input type="text" placeholder="Enter your email address"/>
          <input type="text" placeholder="Subject"/>
          <textarea name="" id="" placeholder="Write your message..."/>
          <div className="form_btn">
          <button type="submit">submit</button>
          </div>
        </div>
      </div>

     <Footer />
    </>
  );
}
