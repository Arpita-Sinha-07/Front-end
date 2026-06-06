import "./Testimonials.css";
import { testimonials } from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>
        <span className="what">What </span> our customer
        <br />
        says About Us
      </h2>

      <div className="testimonial-card">
        <p>{testimonials[0].text}</p>
      </div>

      
    </section>
  );
}

export default Testimonials;