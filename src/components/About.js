import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div className="about-container">
      <h1>Get to know us!</h1>

      <div className="about-section">
        <p>
          Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience.
          Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.”
        </p>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a team of passionate foodies, tech enthusiasts, and customer-first professionals working together to
          build India's most loved food delivery platform.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          To be the go-to choice for every hungry soul — whether it's a midnight craving, a weekend treat, or a quick
          office lunch.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Wide selection of restaurants and cuisines</li>
          <li>Lightning-fast delivery with real-time tracking</li>
          <li>Exciting deals and discounts</li>
          <li>24/7 customer support</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Meet Our Team</h2>
        <div className="user-card-container">
          <User />
          <UserClass />
        </div>
      </div>
    </div>
  );
};

export default About;
