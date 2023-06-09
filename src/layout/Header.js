import DarkModeToggle from "react-dark-mode-toggle";
// import { DarkModeToggle } from "react-dark-mode-toggle-2";

const Header = ({ logo, isDarkMode, setIsDarkMode }) => {
  const handelDarkModeClock = () => {
    // localStorage.setItem("isDarkMode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
    // console.log("is dark mode", isDarkMode);
  };
  return (
    <div className="dizme_tm_header">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <a href="#">
              {logo && (
                <img src={logo ? logo : "img/logo/1.webp"} alt="image" />
              )}
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#blog">Courses</a>
              </li>
              <li>
                <a href="#portfolio">Gallery</a>
              </li>
              {/* <li>
                <a href="#service">Service</a>
              </li> */}
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="download_cv">
                <a href="img/cv/1.jpg" download="">
                  <span>Download CV</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-col gap-0 justify-center items-center "
                >
                  <DarkModeToggle
                    onChange={() => handelDarkModeClock()}
                    checked={isDarkMode}
                    size={50}
                  />
                  {/* <DarkModeToggle
                    onChange={setIsDarkMode}
                    checked={isDarkMode}
                    size={40}
                    className="h-[45px]"
                  /> */}
                  {isDarkMode ? "Dark" : "light"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
