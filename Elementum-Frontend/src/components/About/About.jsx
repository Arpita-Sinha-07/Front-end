import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>
          Tomorrow should be better than <span className="today">today</span>
        </h2>

        <p>
          We are a team of strategists, designers communicators,
          researchers.Together, we beleive that progree only happens when you refuse to play things safe.
        </p>

        <button>Read More → </button>
        
      </div>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt=""
        />
      </div>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt=""
        />
      </div>

      <div>
      <h2>
          <span className="see">See</span> How we can help you progress
        </h2>

        <p>
          We add a layer of fearless insights and actions that allows change makers to accelerate their progress in areas such as brand , design digital
          , comms and social research.
        </p>

        <button>Read More → </button>
        
      </div>
    </section>

    
  );
}

export default About;