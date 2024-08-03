import './contact.css';

function Contact() {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let&apos;s talk about everything!</h3>
          <p className="contact__details">
            Don&apos;t like forms? Send me an email. &#9995;
          </p>
        </div>
        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Enter Email Address"
                required
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Enter Subject"
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your Message"
              required
            ></textarea>
          </div>
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
