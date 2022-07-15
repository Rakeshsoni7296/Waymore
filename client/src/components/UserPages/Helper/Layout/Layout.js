import './Layout.css';

export const Layout = () => {
  return (
    <>
      <div className="overlay-cover">
        <div className="logo__class-contain">
          <a href="/">
            <img src="http://localhost:4500/icons/logo__1.svg" alt="LOGO" />
          </a>
        </div>
        <div className="text-content">
          <h2>Never Forget to Express</h2>
          <p>
            We are here to hear from the best, your glance is our appreciation
            and your thoughts are our presence.
          </p>
        </div>
        <div className="social-media-icon">
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100026666043078"
              target="_blank"
              rel="noreferrer"
            >
              <img src="http://localhost:4500/icons/facebook.svg" alt="Facebook" />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/rakeshsoni6373/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="http://localhost:4500/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/RakeshS60960300"
              target="_blank"
              rel="noreferrer"
            >
              <img src="http://localhost:4500/icons/twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div>
          <img src="http://localhost:4500/img/others/waterfall.jpg" alt="waterfall-img" />
        </div>
      </div>
    </>
  );
};
