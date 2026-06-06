import "./Services.css";
import { services } from "../../data/services";

function Services() {
  return (
    <section className="services">
      <h2>What we <span className="can">can</span> <br/> offer you!</h2>

      {services.map((service, index) => (
        <div className="service-row" key={index}>
          <p>{service.desc}</p>

          <h3>{service.title}</h3>

          <h3>→</h3>
        </div>
      ))}
    </section>
  );
}

export default Services;