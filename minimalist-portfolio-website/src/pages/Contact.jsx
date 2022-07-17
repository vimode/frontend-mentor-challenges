import { SocialIcons } from "../components";
import { AboutWrapper, ContactWrapper, ContactForm } from "./Contact.styles.js";

function Contact () {
  return (
    <>
      <AboutWrapper>
        <h1>Get in Touch</h1>
        <div>
          <p>I&apos;d love to hear about what you&apos;re working on and how I could help. I&apos;m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I&apos;m also happy to hear about opportunites that don&apos;t fit that description. I&apos;m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
         <SocialIcons />
        </div>
      </AboutWrapper>

      <ContactWrapper>
        <h1>Contact Me</h1>
        <ContactForm>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Jane Appleseed"/>
          <label htmlFor="email">Email Address</label>
          <input type="text" name="email" id="email" placeholder="email@example.com" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="How can I help?" />
          <button>Send Message</button>

        </ContactForm>
      </ContactWrapper>
      
    </>
  )
}

export default Contact;