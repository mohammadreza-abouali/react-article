import Navbar from "../../components/Navbar/Navbar";
import styled from "./about.module.css";
import aboutMe from "./../../assets/images/aboutMe.png";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/input/Input";

function AboutMe() {
  return (
    <>

      <Navbar title="Mohammadreza Blog" />

      <div className={styled.aboutPage}>
        <div className="container">
          <h2>About Me</h2>
          <p>
            Hi, I’m Mohammadreza Abouali, a JavaScript Developer with 6
            years of experience building and maintaining web applications for
            clients and companies. My main focus is JavaScript, TypeScript,
            React, and modern front-end development. I enjoy turning ideas into
            clean, responsive, and user-friendly interfaces, writing
            maintainable code, and solving the technical challenges that come
            with building real-world applications. Over the years, I’ve worked
            on a variety of projects, collaborating with clients and teams to
            understand their needs, improve existing features, and bring new
            ideas to life. I believe good development is about more than just
            writing code — it’s about understanding the problem, paying
            attention to the details, and building solutions that people enjoy
            using. I’m always looking to learn, improve my skills, and take on
            projects that challenge me to grow as a developer. I value clear
            communication, practical problem-solving, and writing code that is
            reliable, readable, and easy to maintain. Feel free to explore my
            project. I’m always open to connecting with people, collaborating on
            interesting ideas, and exploring new opportunities.
          </p>


          <h3>
            <img src={aboutMe} alt="Mohammadreza" />
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
