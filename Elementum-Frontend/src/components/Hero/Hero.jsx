import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>
        The thinkers and
        <br />
        doers were changing
        <br />
        the <span>status</span> Quo with
      </h1>

      <p>
        We are a team of strategists, designers communicators,
        researchers.
      </p>

      <div className="avatars">
        <img src="https://i.pravatar.cc/200?img=1" />
        <img src="https://i.pravatar.cc/200?img=2" />
        <img src="https://i.pravatar.cc/200?img=3" />
        <img src="https://i.pravatar.cc/200?img=4" />
        <img src="https://i.pravatar.cc/200?img=5" />
      </div>
    </section>
  );
}

export default Hero;