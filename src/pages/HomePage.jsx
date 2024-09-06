import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../style/Home.css";
function HomePage() {
  return (
    <>
      <div className="about-page">
        <div className="about-container">
          <h1>
            SHORT
            <AiOutlineThunderbolt />
            so
            <AiOutlineThunderbolt /> short{" "}
          </h1>
          <p>
            Ever thought about getting published in the next
            <br />
            <i>The Newyorker</i>issue? <br />
            Well I have! If you too, well we can easily agree that the road, if
            it exists is rather long but guess what?
            <br /> What?
            <br /> Wouldn't it be nice to share some piece of fiction or
            non-fiction in a very easy and pleasant way?
            <br />
            If this of interest to you, WELCOME! <br />
            Here you are now, have a look at some random but interesting writing
            piece found in this pretty website
            <a
              href="https://www.flashfictiononline.com/"
              alt="Flashfictiononline site"
            >
              Flashfictiononline
            </a>
            <Link to="/stories">
              <strong>Here to The Pond / Stories</strong>
            </Link>{" "}
          </p>
          <h2>About what?</h2>
          <p>
            Giving you the opportunity to access a platform for "short-short" or
            flash-fiction as the trend goes.
            <br />
            We offer you a private and peculiar environment to write, mostly
            less thant 300 words,
            <br />
            Ain't that SHORT?
            <br />
            Sure, right?
          </p>
          <ol>
            <li>
              {" "}
              An account?{" "}
              <Link to="/signup">
                <strong>SignUp!</strong>
              </Link>
              <br />
              The strictly minimum to join, the coolest it is, right!?
            </li>
            <li>
              <strong>Create!</strong> Use a little web-notebook without any
              lines!
              <br />
              A list of thematic EMOJIS will be at your disposal to give you a
              theme to which you can easily connect ans which will be different
              from time to time,
              <br />
              Pick a colour,
              <br />
              <strong>Deliver</strong> your piece on a round nymph that,
              <br />
              If you want, you can <strong>share</strong>(to the public)
              <br />
              or <strong>don't!</strong>
              It's up to you... (Privacy matter to us anyway!)!
              <br />
              Keep in mind that the public could be... any internet onlookers
              who accidently were looking for something..
              <br /> Funny or else! Anyway..
              <br /> NO WORIES, nobody will comment what you write!
            </li>
          </ol>
        </div>
      </div>
      <footer>
        <div className="footer">
          <h4>About Me</h4>

          <img
            src="https://cdn.vox-cdn.com/thumbor/pRci-DNLZez5I-eoQuY5u6_oJwo=/78x0:1322x933/1520x1013/filters:focal(78x0:1322x933):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55912251/1_tQM0hcRiO1ZWEAj_if-Tzw.0.jpeg"
            alt="Avatar"
            className="avatar"
          />
          <p>
            Hello! Im Reda, a passionate developer. Feel free to have a look at
            those: the following platforms:
          </p>
          <a
            href="www.linkedin.com/in/reda-d-76b0942b9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/fututuRED"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
