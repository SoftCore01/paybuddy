import TextCard from "./TextCard";
export default function FeaturesSection() {
  return (
    <section>
      <article className="md:px-4 pt-10 text-center md:text-left">
        <h2>Features</h2>
        <p>
          Paybuddy offers a range of features to help you manage your money
          effectively.
        </p>
      </article>
      <article className="mt-10 card-container">
        <TextCard
          img={"/card.svg"}
          h3_text="Mobile Banking"
          p_text="Manage your account, make payments, and transfer money from your smartphone."
        />
        <TextCard
          img={"/dollar_sign.svg"}
          h3_text="Savings & Investments"
          p_text="Grow your savings with high-yield accounts and explore investment opportunities."
        />
        <TextCard
          img={"/shield.svg"}
          h3_text="Budgeting Tools"
          p_text="Track your spending, set budgets, and achieve your financial goals."
        />
        <TextCard
          img={"/shield.svg"}
          h3_text="Security"
          p_text="Your security is our priority. We use advanced encryption and fraud protection."
        />
      </article>
    </section>
  );
}
