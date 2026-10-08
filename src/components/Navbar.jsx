import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "experience",
        "portofolio",
        "contact",
      ];

      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      });

      if (window.scrollY < 100) {
        current = "home";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Portfolio", id: "portofolio" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigation = (e, id) => {
    e.preventDefault();

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        border-b
        border-[#C6A15B]/20
        ${
          isScrolled || isMenuOpen
            ? "bg-[#04121D]"
            : "bg-[#071B2A]"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavigation(e, "home")}
            className="
              text-2xl
              font-semibold
              tracking-wide
              text-[#F2EBDD]
              hover:text-[#C6A15B]
              transition-colors
              duration-300
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Zalfa Zahirah
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) =>
                  handleNavigation(e, link.id)
                }
                className={`
                  relative
                  py-1
                  text-sm
                  tracking-wide
                  transition-colors
                  duration-300
                  ${
                    activeSection === link.id
                      ? "text-[#F2EBDD]"
                      : "text-[#8FA1B2] hover:text-[#F2EBDD]"
                  }
                `}
              >
                {link.name}

                <span
                  className={`
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    bg-[#C6A15B]
                    transition-all
                    duration-300
                    ${
                      activeSection === link.id
                        ? "w-full"
                        : "w-0"
                    }
                  `}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="
              md:hidden
              text-[#B8C0C8]
              hover:text-[#C6A15B]
              transition-colors
              duration-300
            "
            onClick={() =>
              setIsMenuOpen(!isMenuOpen)
            }
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          border-t
          border-[#C6A15B]/10
          bg-[#04121D]
          transition-all
          duration-300
          ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="flex flex-col items-center gap-5 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) =>
                handleNavigation(e, link.id)
              }
              className={`
                text-sm
                tracking-wide
                transition-colors
                duration-300
                ${
                  activeSection === link.id
                    ? "text-[#C6A15B]"
                    : "text-[#B8C0C8] hover:text-[#F2EBDD]"
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;