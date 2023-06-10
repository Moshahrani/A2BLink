import "../css/Contact.css";

function Contact() {
  return (
    <div className="form-container">
      <form className="contact-form">
        <label>
          Name:
          <input className="form-input" type="text" name="name" />
        </label>
        <label>
          Email:
          <input className="form-input" type="email" name="email" />
        </label>
        <label>
          Phone:
          <input className="form-input" type="phone" name="phone" />
        </label>
        <label className="message">
          Message:
          <textarea className="form-input" name="message" />
        </label>
        <input className="contact-button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
