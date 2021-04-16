import Testimonial from "../components/Testimonial";
import src1 from "../img/profile-1.jpg";
import src2 from "../img/profile-2.jpg";
import src3 from "../img/profile-3.jpg";

const SectionTestimonials = () => {
  return (
    <section className="section-testimonials">
      <div className="container">
        <div className="section-testimonials__testimonials">
          <Testimonial
            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine."
            cla
            src={src1}
            alt="User Image"
            className="section-testimonials"
            textName="Satish Patel"
            userClassName="user"
            textCredentials="Founder & CEO, Huddle"
            credentialsClassName="credentials"
          />
          <Testimonial
            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine."
            cla
            src={src2}
            alt="User Image"
            className="section-testimonials"
            textName="Satish Patel"
            userClassName="user"
            textCredentials="Founder & CEO, Huddle"
            credentialsClassName="credentials"
          />
          <Testimonial
            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine."
            cla
            src={src3}
            alt="User Image"
            className="section-testimonials"
            textName="Satish Patel"
            userClassName="user"
            textCredentials="Founder & CEO, Huddle"
            credentialsClassName="credentials"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonials;
