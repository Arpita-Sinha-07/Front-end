import "./Services.css";
import { services } from "../../data/services";

function Services() {
  return (
    <section className="services">
      <h2>What we can offer you!</h2>

      {services.map((service, index) => (
        <div className="service-row" key={index}>
          <p>{service.desc}</p>

          <h3>{service.title}</h3>

          <span>→</span>
        </div>
      ))}
    </section>
  );
}

export default Services;