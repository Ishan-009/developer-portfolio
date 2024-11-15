import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

function Contact() {
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Email copied to clipboard!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        style: {
          background: 'var(--container-color)',
          color: 'var(--title-color)',
          fontSize: '0.875rem',
        },
      });
    } catch (err) {
      toast.error('Failed to copy email. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    }
  };

  const quickContactData = [
    {
      icon: 'fa-regular fa-envelope',
      label: 'Email Address',
      value: 'ishanmoorjmalani009@gmail.com',
      subtext: 'Feel free to reach out anytime',
      type: 'email',
      primary: true,
    },
    {
      icon: 'fa-solid fa-calendar-check',
      label: 'Schedule a Meeting',
      value: 'Book a consultation (15-30 minutes)',
      subtext: "Let's discuss your project or opportunities",
      type: 'calendar',
      action: () =>
        window.open('https://cal.com/ishan-moorjmalani/15min', '_blank'),
    },
  ];

  const socialLinks = [
    {
      icon: 'fa-brands fa-linkedin',
      url: 'https://linkedin.com/in/ishan-moorjmalani',
      label: 'LinkedIn',
      color: '#0077b5',
    },
    {
      icon: 'fa-brands fa-github',
      url: 'https://github.com/Ishan-009',
      label: 'GitHub',
      color: '#333',
    },
    {
      icon: 'fa-brands fa-twitter',
      url: 'https://x.com/IshanCrafts09',
      label: 'Twitter',
      color: '#1da1f2',
    },
    {
      icon: 'fa-solid fa-envelope',
      url: 'mailto:ishanmoorjmalani009@gmail.com',
      label: 'Email',
      color: '#ea4335',
    },
  ];

  return (
    <section className="contact container section" id="contact">
      <ToastContainer />
      <h2 className="section__title">Let's Bring Your Ideas to Life</h2>
      <div className="quick-contact">
        {quickContactData.map((item, index) => (
          <div className="quick-contact__card" key={index}>
            <div className="quick-contact__icon-box">
              <i className={item.icon}></i>
            </div>
            <div className="quick-contact__content">
              <h3>{item.label}</h3>
              {item.primary ? (
                <>
                  <p className="quick-contact__value">{item.value}</p>
                  <p className="quick-contact__subtext">{item.subtext}</p>
                  <div className="quick-contact__actions">
                    <button
                      className="quick-contact__copy-btn"
                      onClick={() => copyToClipboard(item.value)}
                    >
                      <i className="fa-regular fa-copy"></i>
                      <span>Copy email</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="quick-contact__schedule">
                  <p className="quick-contact__value">{item.value}</p>
                  <p className="quick-contact__subtext">{item.subtext}</p>
                  <button
                    className="quick-contact__schedule-btn"
                    onClick={item.action}
                  >
                    <i className="fa-regular fa-calendar"></i>
                    <span>Schedule a Meeting</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="contact__response-time">
        <i className="fa-regular fa-clock"></i>
        <span>I typically respond within 24-48 business hours. </span>
      </div>
      <div className="social-links-container">
        <h3 className="social-links__title">Connect With Me</h3>
        <div className="social-links-grid">
          {socialLinks.map((link, index) => (
            <div className="social-link-item" key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link ${link.label.toLowerCase()}`}
              >
                <i className={link.icon}></i>
                <span className="social-tooltip">{link.label}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">
            <i className="fa-regular fa-message contact__title-icon"></i>
            Let&apos;s talk about everything!
          </h3>
          <p className="contact__details">
            Don&apos;t like forms? Send me an email directly. &#9995;
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
      </div> */}
    </section>
  );
}

export default Contact;
