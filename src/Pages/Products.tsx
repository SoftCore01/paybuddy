import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <>
      <Header />
      <Main>
        <h1>Products</h1>
        <p>
          Explore our range of financial products designed to help you achieve
          your financial goals.
        </p>
        <section className="flex flex-col gap-3 my-10 justify-center sm:flex-row">
          <ProductCard
            img="/checking.svg"
            h3_text="Checking Account"
            p_text="Manage your money with ease using our mobile app."
          />
          <ProductCard
            img="/savings.svg"
            h3_text="Saving Account"
            p_text="Earn competitive interest rates on your savings."
          />
        </section>
        <section>
          <article>
            <h2>Loans</h2>
          </article>
          <section className="flex flex-col gap-3 my-10 justify-center sm:flex-row">
            <ProductCard
              img="/home-loan.svg"
              h3_text="Home Loans"
              p_text="Finance your dream home with flexible terms."
            />
            <ProductCard
              img="/car-loan.svg"
              h3_text="Auto Loans"
              p_text="Get competitive rates on your next vehicle."
            />
            <ProductCard
              img="/personal-loan.svg"
              h3_text="Saving Account"
              p_text="Consolidate debt or cover expenses with ease."
            />
          </section>
        </section>
        <section>
          <article>
            <h2>Credit Cards</h2>
          </article>
          <section className="flex flex-col gap-3 my-10 justify-center sm:flex-row">
            <ProductCard
              img="/reward-credit.svg"
              h3_text="Rewards Card"
              p_text="Earn points on every purchase"
            />
            <ProductCard
              img="/cashback-card.svg"
              h3_text="Cash Card"
              p_text="Get cashback on your spending."
            />
            <ProductCard
              img="/travel-card.svg"
              h3_text="Travel Card"
              p_text="Enjoy travel persk and low rates."
            />
          </section>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Products;
