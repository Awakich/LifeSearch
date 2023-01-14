import Video from "../assets/video.mp4";
import Nav from "../components/Nav";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <div className="">
      <Nav />
      <div className="bg-black my-5 flex items-center justify-between pl-10">
        <div>
          <h1 className="font-black text-9xl text-white">
            IT BOOKS FOR ANYONE DIFFERENT
            <span className="flex">
              <Typewriter
                words={["LANGUAGES", "THINGS", "PROJECTS", "AUTHORS"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="text-white font-light mt-5 text-4xl">
            Find all what you need for different ideas, project, things.
          </p>
        </div>

        <video className="" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <hr className="border-[1px] border-black" />
    </div>
  );
};

export default Header;
