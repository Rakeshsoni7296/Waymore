import "./Footer.css";

const Footer = function () {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo--side">
          <div>
            <img src="http://localhost:4500/icons/logo.svg" alt="Logo" />
          </div>
          <div className="footer-moto-content">
            <div>Never Forget to Express</div>
            <p>
              Visitors are the heart of our service and the writers are the
              presenece of us, swap all negative thoughts and start a fresh
              journey with more ways along with Way more we are here for you.
            </p>
            <div>
              <img
                className="contact--icons"
                src="http://localhost:4500/icons/email.svg"
                alt="email"
              />
              <span>waymore@google.com</span>
            </div>
            <div>
              <img
                className="contact--icons"
                src="http://localhost:4500/icons/call.svg"
                alt="call"
              />
              <span>+91 6377160181</span>
            </div>
          </div>
        </div>
        <div className="company">
          <div className="tag--header">Company</div>
          <div>
            <a href="true">Blog</a>
          </div>
          <div>
            <a href="true">About Us</a>
          </div>
          <div>
            <a href="true">Privacy Policy</a>
          </div>
          <div>
            <a href="true">Terms and Conditions</a>
          </div>
        </div>
        <div className="social--links">
          <div className="tag--header">Follow Us On:</div>
          <div>
            <a href="https://www.instagram.com/rakeshsoni6373/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100026666043078" target="_blank" rel="noreferrer">Facebook</a>
          </div>
          <div>
            <a href="https://twitter.com/RakeshS60960300" target="_blank" rel="noreferrer">Twitter</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/rakesh-soni-087b99200/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright &copy;2022 Waymore Blog website</div>
    </footer>
  );
};

export default Footer;
