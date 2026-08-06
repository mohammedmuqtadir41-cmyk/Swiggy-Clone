import { Link } from "react-router";
import { useContext } from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>🍔 Food Stack</h2>
          <p>
            Discover your favorite restaurants, explore delicious meals, and
            enjoy a seamless food ordering experience.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <ul>
            <li ><Link to={"/"}> Home </Link></li>
            <li>
              <Link to={"/about"}> About </Link>
            </li>
            <li><Link to={"/offers"}> Offers </Link></li>
            <li><Link to={"/help"}> Help </Link></li>
            <li><Link to={"/cart"}> Cart </Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>Email: ahmedmuqtadir097@gmail.com</p>
          <p>Phone: +91 00000 00000</p>
          <p>Available: 12/7</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Food Stack. Built with ❤️ by  Mohammed Muqthadir Ahmed.</p>
      </div>
    </footer>
  );
};

export default Footer;
