import { useState } from "react";
import { SocialIcons } from "../components";
import { AboutWrapper, ContactWrapper, ContactForm } from "./Contact.styles.js";

function Contact () {

  const [formData, setFormData] = useState ({
    name: "",
    email: "",
    message: ""
  })
  const [infoText, setInfoText] = useState("")
  const [successText, setSuccessText] = useState("")
  
  function handleChange(event) {
    const {name, email, message, value} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleInfoText(type, message){
    if(type === "error") {
      setInfoText(message)
    }else {
      setSuccessText(message)
    }
    setTimeout( () => {
      setInfoText('')
      setSuccessText('')
    }, 2000)
  }

   function handleSubmit(event) {
    event.preventDefault()
    let {name, email, message} = event.target
    let  emailRegex = /^[\w.!#$%&’*+\/=?^_`{|}~-]+@[\w-]+\.\w+$/
    if(!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      handleInfoText("error", "All fields are required")
    } else if (!email.value.trim().match(emailRegex)) {
      handleInfoText("error", "Please use a valid email address")
    } else {
      handleInfoText("success", "Message sent. Thank you.")
    }

   }

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
        <ContactForm
          onSubmit= {handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name} 
            onChange={handleChange}
            placeholder="Jane Appleseed"/>
          
          <label htmlFor="email">Email Address</label>
          <input 
            type="text" 
            name="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="email@example.com" />
          
          <label htmlFor="message">Message</label>
          <textarea 
            name="message" 
            id="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="How can I help?" />
          
          <button>Send Message</button>
          <span className={infoText ?  "errorText" : ""}>{infoText ?  infoText : successText}</span>


        </ContactForm>
      </ContactWrapper>
      
    </>
  )
}

export default Contact;