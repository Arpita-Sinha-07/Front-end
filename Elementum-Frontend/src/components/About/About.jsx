import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>
          Tomorrow should
          <br />
          be better than today
        </h2>

        <p>
          We are a team of strategists, designers communicators,
          researchers.
        </p>

        <button>Read More</button>
      </div>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt=""
        />
      </div>
    </section>
  );
}

export default About;