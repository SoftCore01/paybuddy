import BankingThatFits from "../components/BankingThatFits";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import TestimonialSection from "../components/TestimonialSection";

function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <BankingThatFits />
        <FeaturesSection />
        <TestimonialSection />
        <Footer />
      </Main>
    </>
  );
}

export default HomePage;
