function Footer() {
  return (
    <footer className="md:px-[160px] my-20 text-[#61758A] text-center">
      <article className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
        <a href="">Contact Us</a>
      </article>

      <article className="flex gap-3 justify-center my-5">
        <a href="https://x.com">
          <img src="/twitter.svg" alt="twitter-logo" />
        </a>
        <a href="https://facebook.com">
          <img src="/facebook.svg" alt="facebook-logo" />
        </a>
        <a href="https://instagram.com">
          <img src="/instagram.svg" alt="instagram-logo" />
        </a>
      </article>
      <p>© 2023 Nova Finance. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
