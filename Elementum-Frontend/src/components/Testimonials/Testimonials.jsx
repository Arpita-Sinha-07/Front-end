import "./Testimonials.css";
import { testimonials } from "../../data/testimonials";
// import p1 from "../../assets/p1.png";
// import p2 from "../../assets/p2.png";
// import p3 from "../../assets/p3.png";
// import p4 from "../../assets/p4.png";
// import p5 from "../../assets/p5.png";
// import p6 from "../../assets/p6.png";
// import p7 from "../../assets/p7.png";


function Testimonials() {
  return (
    <section className="testimonials">

      <h2>
        <span className="what">What </span> our customer
        <br />
        says About Us
      </h2>

      

      <div>
        {/* <span className="people">
              <img src={p5} className="ph1"/>
              <img src={p6} className="ph2"/>
              <img src={p7} className="ph3"/>
              <img src="https://i.pravatar.cc/200?img=1" className="ph4"/>
        </span> */}
        <p className="testimonial-card">{testimonials[0].text}</p>
        {/* <div className="people">
              <img src={p1} className="ph1"/>
              <img src={p2} className="ph2"/>
              <img src={p3} className="ph3"/>
              <img src={p4} className="ph4"/>
        </div> */}
        
      </div>

      
      

      
    </section>
  );
}

export default Testimonials;