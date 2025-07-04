import { Link, useLocation } from "wouter";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const navLinks = [
  { href: "/", label: "Home", icon: <HomeIcon /> },
  { href: "/about", label: "About Me", icon: <PersonIcon /> },
  { href: "/resume", label: "Resume", icon: <SchoolIcon /> },
  // { href: "/portfolio", label: "Portfolio", icon: <WorkIcon /> },
  // { href: "/blog", label: "Blog", icon: <MenuBookIcon /> },
  { href: "/contact", label: "Contact", icon: <EmailIcon /> },
];

const Sidebar = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside className="hidden md:flex h-screen w-[30%] bg-[#222222] z-50  overflow-hidden">
        <div className="flex flex-row h-full w-full">
          {/* Navigation Column */}
          <nav className="flex flex-col items-center w-20 bg-[#333] py-6 space-y-4">
            {navLinks.map(({ href, label, icon }) => {
              const isActive = location === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex flex-col items-center justify-center w-full py-4 group transition ${
                    isActive
                      ? "text-cyan-500"
                      : "text-gray-400 hover:text-cyan-400"
                  }`}
                >
                  <div className="mb-1">{icon}</div>
                  <span className="text-xs font-semibold">{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Profile Info Column */}
          <div className="flex flex-col items-center justify-between h-screen w-full bg-[#222222] text-center px-6 py-8">
            {/* Top content: profile */}
            <div className="flex flex-col items-center pt-8">
              <img
                src="/img/Zarif.jpg"
                alt="Profile"
                className="w-60 h-60 rounded-full object-cover border-4 border-white mb-6"
              />
              <h1 className="text-4xl font-bold text-white mb-2 pt-6">
                Zarif Amir Sanad
              </h1>
              <h2 className="text-lg text-gray-400 mb-6 pt-2">
                Full-stack-Developer
              </h2>

              {/* Social icons */}
              <div className="flex space-x-6 pt-4 pb-10 gap-2">
                <a
                  href="https://www.linkedin.com/in/zarif-amir/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon
                    className="text-gray-300 hover:text-[#0a66c2]"
                    fontSize="large"
                  />
                </a>
                <a
                  href="https://github.com/Zarifur"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon
                    className="text-gray-300 hover:text-black"
                    fontSize="large"
                  />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <WhatsAppIcon
                    className="text-gray-300 hover:text-green-600"
                    fontSize="large"
                  />
                </a>
              </div>

              {/* Download CV button */}
              <a
                href="/files/Zarif_Amir_Sanad.pdf"
                download="Zarif_Amir_Sanad_CV.pdf"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full transition-all duration-200 ease-out hover:bg-primary-500 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300 font-semibold"
                aria-label="Download Zarif Amir Sanad's CV"
              >
                Download CV
                <svg
                  className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-y-1 group-hover:text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 5v14m0 0l-5-5m5 5l5-5"
                  />
                </svg>
              </a>
            </div>

            {/* Footer */}
            <footer className="text-sm text-gray-400 mt-8">
              © 2025 All rights reserved.
            </footer>
          </div>
        </div>
      </aside>

      <button
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-cyan-500 rounded-full transition-transform duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <CloseIcon style={{ color: "white", fontSize: "24px" }} />
        ) : (
          <MenuIcon style={{ color: "white", fontSize: "24px" }} />
        )}
      </button>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-800 text-gray-100 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center pt-16 px-4">
          {/* Profile Section */}
          <img
            src="/img/Zarif.jpg"
            alt="Profile"
            className="h-24 w-24 rounded-full border-4 border-white"
          />
          <h1 className="text-2xl font-bold mt-4">Zarif Amir Sanad</h1>
          <p className="text-gray-400 font-medium pb-8">Full-stack-Developer</p>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-4 w-full">
            {navLinks.map(({ href, label }) => {
              const isActive = location === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-lg w-full text-center py-2 rounded transition ${
                    isActive
                      ? "text-cyan-400 font-bold"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-8 pt-24 pb-10">
            <a
              href="https://www.linkedin.com/in/zarif-amir/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon
                className="text-gray-300 hover:text-[#0a66c2]"
                fontSize="large"
              />
            </a>
            <a
              href="https://github.com/Zarifur"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon
                className="text-gray-300 hover:text-black"
                fontSize="large"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <WhatsAppIcon
                className="text-gray-300 hover:text-green-600"
                fontSize="large"
              />
            </a>
          </div>
          {/* Download CV button */}
          <a
            href="/files/Zarif_Amir_Sanad.pdf"
            download="Zarif_Amir_Sanad_CV.pdf"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full transition-all duration-200 ease-out hover:bg-primary-500 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300 font-semibold"
            aria-label="Download Zarif Amir Sanad's CV"
          >
            Download CV
            <svg
              className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-y-1 group-hover:text-cyan-400"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 5v14m0 0l-5-5m5 5l5-5"
              />
            </svg>
          </a>
          {/* Footer */}
          <footer className="text-sm text-gray-400 pt-48">
            © 2025 All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
