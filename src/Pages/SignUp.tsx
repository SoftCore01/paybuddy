import Header from "../components/Header";

function SignUp() {
  return (
    <>
      <Header />
      <section className="flex mt-30 justify-center items-center">
        <form className=" flex flex-col w-full px-[5vw] sm:w-[400px] md:w-[650px]">
          <label className="font-semibold w-full mb-5" htmlFor="username">
            First name
            <input
              className="bg-[#E8F2ED] rounded-sm block w-full p-2"
              type="text"
              placeholder="John"
            />
          </label>
          <label className="font-semibold w-full mb-5" htmlFor="username">
            Last name
            <input
              className="bg-[#E8F2ED] rounded-sm block w-full p-2"
              type="text"
              placeholder="Doe"
            />
          </label>
          <label className="font-semibold w-full mb-5" htmlFor="username">
            Email
            <input
              className="bg-[#E8F2ED] rounded-sm block w-full p-2"
              type="email"
              placeholder="john-doe@yahoo.com"
            />
          </label>
          <label className="font-semibold w-full mb-5" htmlFor="username">
            Password
            <input
              className="bg-[#E8F2ED] rounded-sm block w-full p-2"
              type="password"
              placeholder="password"
            />
          </label>

          <input
            className="bg-green font-bold h-10 rounded-full cursor-pointer"
            type="submit"
            value="Create account"
          />
          <a
            href="/login"
            className="font-light text-sm text-center underline pt-2"
          >
            Login
          </a>
        </form>
      </section>
    </>
  );
}

export default SignUp;
