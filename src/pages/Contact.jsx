import Nav from "../components/Nav";
import "../styles/contact.css";
import Accordion from "../components/Accordion";

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
            <span>Home</span>
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
    </>
  );
}
