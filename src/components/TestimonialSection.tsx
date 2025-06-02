import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
    return (
      <section>
        <article className="md:px-4 pt-10 text-center md:text-left">
          <h2>Testimonials</h2>
          <p>Hear what our customers have to say about us.</p>
        </article>
        <article className="mt-10 testimonial-container">
          <TestimonialCard
            description="CEO Sophi Motor"
            img={"/headshot1.jpg"}
            h3_text="Sophia Carter"
            p_text="I love the Paybuddy app! It's so easy to use and helps me stay on top of my finances."
          />
          <TestimonialCard
            description="M.D Japan Insurance"
            img={"/headshot2.jpg"}
            h3_text="Ethan Lee"
            p_text="Paybuddy has made managing my money so much simpler. I highly recommend it!"
          />
          <TestimonialCard
            description="Director Henry Foundation"
            img={"/headshot3.jpeg"}
            h3_text="Budgeting Tools"
            p_text="The customer service is excellent, and the app is very user-friendly."
          />
        </article>
      </section>
    );
}