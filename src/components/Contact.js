import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in touch with us</h1>

      <div className="contact-section">
        <h2>📞 Customer Support</h2>
        <p>Email: <a href="mailto:support@swiggy.com">support@swiggy.com</a></p>
        <p>Please use in‑app chat or email us — we don’t have a direct helpline to avoid fake numbers.</p>
      </div>

      <div className="contact-section">
        <h2>🏢 Corporate Office</h2>
        <p>
          Swiggy Limited<br />
          No. 55, Sy No. 8-14, Ground Floor, I & J Block,<br />
          Embassy TechVillage, Outer Ring Road,<br />
          Devarabisanahalli, Bengaluru – 560103, Karnataka, India
        </p>
        <p><a href="https://goo.gl/maps" className="link">Get Directions</a></p>
      </div>

      <div className="contact-section">
        <h2>📧 Investor Relations</h2>
        <ul>
          <li><strong>Vice President, IR:</strong> <a href="mailto:ir@swiggy.com">ir@swiggy.com</a></li>
          <li><strong>Company Secretary:</strong> <a href="mailto:secretarial@swiggy.com">secretarial@swiggy.com</a></li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>📣 Media & PR</h2>
        <ul>
          <li>Swiggy Food & Dineout: <a href="mailto:akanksha.j@swiggy.com">akanksha.j@swiggy.com</a></li>
          <li>Swiggy Instamart: <a href="mailto:sanjana.shetty1@swiggy.com">sanjana.shetty1@swiggy.com</a></li>
          <li>General PR: <a href="mailto:pr@swiggy.com">pr@swiggy.com</a></li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>📚 Help & Support</h2>
        <p>Need faster assistance? Check out our Help Center or Partner with us pages via the footer.</p>
      </div>
    </div>
  );
};

export default Contact;
