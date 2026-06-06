import "./Hero.css";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";

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
        <img src={p2} className="p1"/>
        <img src="https://i.pravatar.cc/200?img=1" className="p2"/>
        <img src={p4} className="p3"/>
        <img src="https://i.pravatar.cc/200?img=4" className="p4"/>
        <img src="https://i.pravatar.cc/200?img=3" className="p5"/>
        <img src={p3} className="p6"/>
        <img src={p1} className="p7"/>
        <img src="https://i.pravatar.cc/200?img=5" className="p8"/>
      </div>

     
    </section>

  )
}

export default Hero;