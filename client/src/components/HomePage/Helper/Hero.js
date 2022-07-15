import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero--content">
        <h2>
          Put your thoughts here World is eagerly waiting to hear from you
        </h2>
        <p>
          Visitors are the heart of our service and the writers are the
          presenece of us, swap all negative thoughts and start a fresh journey
          with more ways along with Way more we are here for you.
        </p>
        <div className="navit-btns">
          <a className="btn" href="#removesometimelater">
            View Blogs
          </a>
          <a className="btn" href="/create-new-blog">
            Create New Blog
          </a>
        </div>
      </div>
      <div>
        <div>
          <img src="http://localhost:4500/img/others/Boxes.svg" alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
