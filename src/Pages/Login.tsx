import Header from "../components/Header";

function Login() {
  return (
    <>
      <Header />
      <section className="flex mt-30 justify-center items-center">
        <form className=" flex flex-col w-full px-[5vw] sm:w-[400px] md:w-[650px]">
          <label className="font-semibold w-full mb-5" htmlFor="username">
            Username
            <input
              className="bg-[#E8F2ED] rounded-sm block w-full p-2"
              type="text"
              placeholder="john-doe@gmail.com"
            />
          </label>
          <label className="font-semibold w-full mb-5" htmlFor="username">
            Password
            <input
              className="bg-[#E8F2ED] rounded-sm block w-full p-2"
              type="password"
              placeholder="password"
            />
            <a href="/login" className="font-light text-sm">
              Forgot your password or username?
            </a>
          </label>

          <input
            className="bg-green font-bold h-10 rounded-full"
            type="submit"
            value="Log In"
          />
          <a href="/signup" className="font-light text-sm text-center underline pt-2">
            Create an account
          </a>
        </form>
      </section>
    </>
  );
}

export default Login;
