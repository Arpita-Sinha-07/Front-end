import "./Testimonials.css";
import { testimonials } from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>
        What our customer
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