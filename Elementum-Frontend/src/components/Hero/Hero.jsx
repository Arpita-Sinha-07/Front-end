import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>
        The thinkers  and
        <br />
        doers were cha<span className="changing">nging</span>
        <br />
        the <span className="status">status</span> Quo with
      </h1>

      

      <p>
        We are a team of strategists, designers communicators,
        researchers. Together we believe that progress only happens when you refuse to play things safe.
      </p>

      <div className="avatars">
        <img src="https://i.pravatar.cc/200?img=1" className="p1"/>
        <img src="https://i.pravatar.cc/200?img=2" className="p2"/>
        <img src="https://i.pravatar.cc/200?img=3" className="p3"/>
        <img src="https://i.pravatar.cc/200?img=4" className="p4"/>
        <img src="https://i.pravatar.cc/200?img=5" className="p5"/>
        <img src="https://i.pravatar.cc/200?img=1" className="p6"/>
        <img src="https://i.pravatar.cc/200?img=2" className="p7"/>
        <img src="https://i.pravatar.cc/200?img=3" className="p8"/>
      </div>
    </section>
  );
}

export default Hero;