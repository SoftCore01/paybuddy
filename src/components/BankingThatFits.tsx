export default function BankingThatFits() {
    return (
      <div className="flex gap-5 p-6 px-5 flex-col items-center md:flex-row-reverse">
        <div className="img  md:w-full">
          <img src="/Cards.svg" alt="atm card" />
        </div>
        <div className="text-center md:text-left md:w-full">
          <h1>Banking that fits your life</h1>
          <p className="my-5 text-justify md:text-left">
            Paybuddy is a mobile banking app that helps you manage your finances
            with ease. Open an account in minutes and start saving, spending,
            and investing.
          </p>
          <button className="bg-green p-3  rounded-full font-bold hover:cursor-pointer">
            Get the app
          </button>
        </div>
      </div>
    );
}