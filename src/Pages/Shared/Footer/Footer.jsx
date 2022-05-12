import React from "react";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  const time = new Date();
  const year = time.getFullYear();
  return (
    <footer
      class=" p-10 lg:pt-12"
      style={{ background: `url(${footer})`, backgroundSize: "cover" }}
    >
      <div className="footer">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="py-8 text-center pb-0">
        <p>
          Copyright &copy; {year} - Doctors Portal | Design-By:{" "}
          <a
            href="https://www.facebook.com/Minhajul69"
            className="text-primary"
          >
            AKIB
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
