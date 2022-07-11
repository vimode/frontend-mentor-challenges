import { SocialIcons } from "../components";

function Contact () {
  return (
    <main>
      <div>
        <h1>Get in Touch</h1>
        <p>I&apos;d love to hear about what you&apos;re working on and how I could help. I&apos;m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I&apos;m also happy to hear about opportunites that don&apos;t fit that description. I&apos;m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
        <SocialIcons />
      </div>

      <div>
        <h1>Contact Me</h1>
        <form>
          <label>Name</label>
          <input type="text"/>
          <label>Email Address</label>
          <input type="text" />
          <label>Message</label>
          <textarea />
          <button>Send Message</button>

        </form>
      </div>
      
    </main>
  )
}

export default  Contact;