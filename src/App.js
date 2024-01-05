import { useState, useEffect } from "react";
import Photo from "./assets/photo.png"
import { LuPaintbrush2 } from "react-icons/lu";
import { CgBrowser } from "react-icons/cg";
import { MdOutlineSettings } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Project1 from "./assets/Project1.jpg"
import Project2 from "./assets/Project2.jpg"
import Project3 from "./assets/Project3.jpg"
function App() {

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState([]);

  const handleNav = () => {
    setShow(!show);
  }

  const handleForm = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setForm({
      name,
      email,
      message
    });
  }

  useEffect(() => {
    console.log(form);  //WE CAN USE THIS DATA ANYWHERE
  }, [form]);

  return (
    <>
      {/* Nav Section */}
      <nav
        className="flex sticky px-2 -top-1 z-10 drop-shadow-lg justify-between items-center h-12 w-full bg-[var(--bg-secondary)] text-[var(--color-secondary)] border-b border-b-[var(--border-secondary)]">
        <div className="container mx-auto flex justify-between">
          <div><h1>PORTFOLIO.</h1></div>
          <ul className="hidden md:flex gap-8 text-xs text-[var(--color-secondary)] nav-links">
            <a href="#home">
              <li className="nav-items active-nav-link">Home</li>
            </a>
            <a href="#aboutMe">
              <li className="nav-items">About</li>
            </a>
            <a href="#services">
              <li className="nav-items">Services</li>
            </a>
            <a href="#education">
              <li className="nav-items">Education</li>
            </a>
            <a href="#works">
              <li className="nav-items">Works</li>
            </a>
            <a href="#contact">
              <li className="nav-items">Contact</li>
            </a>
          </ul>
          <TiThMenu onClick={handleNav} className="block md:hidden cursor-pointer uil uil-bars text-2xl pr-2 open-menu" />
        </div>
      </nav>
      {show === true ? (
        <ul className="flex flex-col -mt-1 gap-3 py-4 -z-2 fixed items-center md:hidden w-full text-md bg-[var(--bg-secondary)] text-[var(--color-secondary)] nav-links transition-all duration-700">
          <a href="#home">
            <li className="nav-items active-nav-link">Home</li>
          </a>
          <a href="#aboutMe">
            <li className="nav-items">About</li>
          </a>
          <a href="#services">
            <li className="nav-items">Services</li>
          </a>
          <a href="#education">
            <li className="nav-items">Education</li>
          </a>
          <a href="#works">
            <li className="nav-items">Works</li>
          </a>
          <a href="#contact">
            <li className="nav-items">Contact</li>
          </a>
        </ul>
      ) : null}

      {/* Hero section */}
      <section id="home"
        className="h-96 flex flex-col gap-4 items-center justify-center bg-[var(--bg-secondary)] text-[var(--color-secondary)]">
        <img src={Photo} alt="photo" className="h-16 w-16 rounded-full bg-[var(--effect-color)]" />
        <h2 className="text-2xl font-medium text-center w-60">
          Akshay Bhasin
          <div className="text-xs font-thin">
            I'm a Frontend Developer
          </div>
        </h2>
        <div className="flex gap-4">
          <a href="https://github.com/Akshay9704">
            <FaGithub className="uil uil-github-alt cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/akshay-bhasin9704/">
            <FaLinkedinIn className="uil uil-linkedin-alt cursor-pointer" />
          </a>
          <a href="https://twitter.com/AkshayBhasin14">
            <FaTwitter className="uil uil-twitter-alt cursor-pointer" />
          </a>
        </div>
        <a href="https://drive.google.com/file/d/1kRha99relQzL1sB4mjaYDCEIi1sGeuxQ/view?usp=sharing">
          <button className="text-sm rounded-full py-2 px-4 bg-[var(--red)]">
            My Resume
          </button>
        </a>
      </section>

      <div className="flex flex-col container mx-auto p-4">
        {/* <!-- About me --> */}
        <section className="flex flex-col gap-6 pt-16" id="aboutMe">
          <h2 className="text-xl font-bold">About Me</h2>
          <div className="flex gap-6">
            <img src={Photo}
              className="hidden md:block h-16 w-16 rounded-full bg-[var(--bg-secondary)]" />
            <div
              className="grid grid-cols-1 md:grid-cols-3 shadow-lg bg-[var(--bg-container-primary)] rounded-lg text-[var(--color-info)] text-xs gap-6 p-6">
              <div className="flex flex-1 col-span-1 justify-between flex-col">
                <div>
                  Crafting captivating user interfaces using modern frameworks and libraries and
                  Architecting scalable systems;
                  I am a seasoned software developer with expertise in front-end development.
                  To know more on my professional journey and my technical expertise, delve into the
                  depths of my comprehensive resume.
                </div>
              </div>

              <div className="flex flex-1 col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                  <div className="flex flex-col justify-start mb-2 gap-2">
                    <div className="flex justify-between">
                      <div>Frontend - (Reactjs, Nextjs13,Bootstrap, Tailwind)</div>
                      <div>90%</div>
                    </div>
                    <div className="bg-gray-300 h-2 rounded-full">
                      <div className="bg-[var(--purple)] h-full rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start mb-2 gap-2">
                    <div className="flex justify-between">
                      <div>Backend - (Nodejs)</div>
                      <div>90%</div>
                    </div>
                    <div className="bg-gray-300 h-2 rounded-full">
                      <div className="bg-[var(--green)] h-full rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start mb-2 gap-2">
                    <div className="flex justify-between">
                      <div>Database - (MySql,MongoDB)</div>
                      <div>80%</div>
                    </div>
                    <div className="bg-gray-300 h-2 rounded-full">
                      <div className="bg-[var(--dark-blue)] h-full rounded-full w-[80%]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start mb-2 gap-2">
                    <div className="flex justify-between">
                      <div>Git</div>
                      <div>90%</div>
                    </div>
                    <div className="bg-gray-300 h-2 rounded-full">
                      <div className="bg-[var(--orange)] h-full rounded-full w-[90%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Services --> */}
        <section className="pt-16" id="services">
          <h2 className="text-xl font-bold">Services</h2>
          <div className="flex flex-col sm:flex-row mt-6 gap-4 text-[var(--color-secondary)]">
            <div className="flex flex-col items-center justify-center flex-1 rounded-lg p-4 bg-[var(--purple)]">
              <CgBrowser className="uil uil-brush-alt text-6xl" />
              <br />
              <h3 className="text-lg font-bold">Frontend Development</h3>
              <span className="text-xs leading-6 text-center">
                Reactjs, Nextjs, JavaScript, CSS, Tailwind CSS, and Bootstrap
              </span>
            </div>
            <div
              className="flex flex-col items-center justify-center flex-1 rounded-lg p-4 bg-[var(--yellow)] text-[var(--color-primary)]">
              <LuPaintbrush2 className="uil uil-window text-6xl" />
              <br />
              <h3 className="text-lg font-bold">UI/UX Design</h3>
              <span className="text-xs leading-6 text-center">
                Figma, Material UI, and React Bootstrap
              </span>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 rounded-lg p-4 bg-[var(--red)]">
              <MdOutlineSettings className="uil uil-bitcoin text-6xl" />
              <br />
              <h3 className="text-lg font-bold">Backend Development</h3>
              <span className="text-xs leading-6 text-center">
                Nodejs, Express, and MongoDB
              </span>
            </div>
          </div>
        </section>

        {/* <!-- Education --> */}
        <section className="pt-16" id="education">
          <h2 className="text-xl font-bold">Education</h2>
          <div className="flex flex-col md:flex-row mt-6 gap-4 text-[var(--color-primary)]">
            <div className="flex flex-col flex-1 gap-2 bg-[var(--bg-container-primary)] rounded-lg shadow-lg p-6">
              <div className="flex gap-6">
                <div className="flex flex-col text-[var(--red)] items-center">
                  <i className="uil uil-window"></i>
                  <div className="flex-grow w-[0.5px] bg-[var(--red)]"></div>
                </div>
                <div className="flex flex-col text-[var(--color-primary)] text-sm gap-2">
                  <div className="text-xs">Aug 2023 - Aug 2025</div>
                  <h2 className="text-lg font-bold">Amity University, Noida</h2>
                  <p className="text-sm font-normal">MCA - Master of Computer Applications</p>
                  Coursework - Core Java, Software Engineering Principle, and DBMS.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 bg-[var(--bg-container-primary)] rounded-lg shadow-lg p-6">
            <div className="flex gap-6">
              <div className="flex flex-col text-[var(--red)] items-center">
                <i className="uil uil-window"></i>
                <div className="flex-grow w-[0.5px] bg-[var(--red)]"></div>
              </div>
              <div className="flex flex-col text-sm gap-2">
                <h2 className="text-lg font-bold">St. Xavier's College</h2>
                <p className="text-sm font-normal">BCA - Bachelor's of Computer Applications</p>
                Coursework - Computer Networks, Web Development, and DBMS.
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Works --> */}
        <section className="pt-16" id="works">
          <h2 className="text-xl font-bold">Recent Projects</h2>
          <div className="flex flex-col md:flex-row mt-6 gap-4 text-[var(--color-primary)]">
            <div className="bg-[var(--bg-container-primary)] p-4 flex-1 rounded-md shadow-lg">
              <img src={Project1} alt="p1" className="w-full h-48 object-cover rounded-md" />
              <h2 className="text-lg font-bold mt-3">Code Editor Website</h2>
              <div className="flex gap-2 mt-3">
                <a href="https://github.com/Akshay9704/Code-Editor">
                  <button className="text-sm rounded-full py-1 px-3 text-white font-medium bg-[var(--bg-secondary)]">Github Link</button>
                </a>
                <a href="https://akshay9704.github.io/Code-Editor/">
                  <button className="text-sm rounded-full py-1 px-3 text-white font-medium bg-[var(--red)]">Live Link</button>
                </a>
              </div>
            </div>
            <div className="bg-[var(--bg-container-primary)] p-4 flex-1 rounded-md shadow-lg">
              <img src={Project2} alt="p1" className="w-full h-48 object-cover rounded-md" />
              <h2 className="text-lg font-bold mt-3">Note Keeper Application</h2>
              <div className="flex gap-2 mt-3">
                <a href="https://github.com/Akshay9704/Note-Keeper">
                  <button className="text-sm rounded-full py-1 px-3 text-white font-medium bg-[var(--bg-secondary)]">Github Link</button>
                </a>
                <a href="https://akshay9704.github.io/Note-Keeper/">
                  <button className="text-sm rounded-full py-1 px-3 text-white font-medium bg-[var(--red)]">Live Link</button>
                </a>
              </div>
            </div>
            <div className="bg-[var(--bg-container-primary)] p-4 flex-1 rounded-md shadow-lg">
              <img src={Project3} alt="p1" className="w-full h-48 object-cover rounded-md" />
              <h2 className="text-lg font-bold mt-3">Shortly Website</h2>
              <div className="flex gap-2 mt-3">
                <a href="https://github.com/Akshay9704/Shortly">
                  <button className="text-sm rounded-full py-1 px-3 text-white font-medium bg-[var(--bg-secondary)]">Github Link</button>
                </a>
                <a href="https://akshay9704.github.io/Shortly/">
                  <button className="text-sm rounded-full py-1 px-3 text-white font-medium bg-[var(--red)]">Live Link</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Get in touch --> */}
        <section className="pt-16" id="contact">
          <h2 className="text-xl font-bold">Get in touch</h2>
          <h3 className="text-sm text-[var(--color-info)]">
            You can type in the details here, I can use Reactjs, Nextjs13, Material UI in frontend.
          </h3>
          <div className="flex justify-center mt-6 gap-4 text-[var(--color-primary)]">
            <form action="" className="flex max-w-[768px] container gap-4 flex-col">
              <div className="flex flex-col md:flex-row gap-6">
                <input type="text" id="name" onChange={handleForm} value={name} placeholder="Your name"
                  className="rounded-full shadow-lg flex-1 w-full md:w-64 p-4 text-sm" />
                <input type="text" id="email" onChange={handleForm} value={email} placeholder="Your email"
                  className="rounded-full shadow-lg flex-1  w-full md:w-64 p-4 text-sm" />
              </div>
              <input type="text" placeholder="Subject" className="rounded-full shadow-lg w-full p-4 text-sm" />
              <div>
                <textarea type="text" placeholder="Message" id="message" onChange={handleForm} value={message}
                  className="rounded-full shadow-lg w-full p-4 text-sm"></textarea>
              </div>
              <button onClick={onSubmit} className="text-[var(--color-secondary)] bg-[var(--red)] rounded-full p-4">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
      <section className="flex items-center mt-8 justify-center p-4 bg-[var(--bg-secondary)] text-[var(--color-secondary)]">
        Thank you
      </section>
    </>
  );
}

export default App;
