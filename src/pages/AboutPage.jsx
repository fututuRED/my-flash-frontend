import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";

import "../style/Home.css";

function AboutPage() {
  return (
    <>
      {/* <div className="about-page"> */}
      <div className="about">
        <div className="first-section">
          <h2>What?</h2>
          <p>
            Ever thought about getting published in the next
            <i>The Newyorker</i> issue?
            <br /> What?
            <br /> Wouldn't it be nice to share some piece of fiction or
            non-fiction in a very easy and pleasant way?
            <br />
            If this of interest to you, WELCOME! <br />
            Short-Fiction is a trendy and challenging way to say a few things in
            an efficient way. Have a look at{" "}
            <a
              href="https://www.flashfictiononline.com/"
              alt="Flashfictiononline site"
              className="otherlink"
            >
              Flashfictiononline
            </a>{" "}
            where you'll find great stories, pieces of advice and some stories
            too!
          </p>
        </div>
        <div className="second-section">
          <h2>About what?</h2>
          <p>
            Giving you the opportunity to access a platform for short-short or
            flash-fiction as the trend goes in a private or public environment
            to write a few <br />
            About 300 words...
            <br />
            using a little web-notebook. 300, <br />
            Ain't that SHORT?
            <br />
            Sure, right?{" "}
          </p>
        </div>
        <h2>How it works?</h2>
        <div className="last-section">
          <div className="rules">
            <ol>
              <li>
                <strong>PICK</strong> a title "␃" <br />
                an emoticon 🏝️ 🪐 🪢
                <br />a background-color 🟪 🟩 🟦
              </li>
              <li>
                <strong>TYPE your story</strong>
              </li>{" "}
              <li>
                either <br /> <strong>SHARE </strong> by going <br />
                PUBLIC 📖
                <br />
                or <strong>NOT! </strong> <br />
                PRIVATE🔒 <br />
                It's up to you but...
              </li>
            </ol>
          </div>
          <div className="warning">
            <h3>
              <strong>
                KEEP IN MIND IF YOU GO PUBLIC, BE RESPECTFUL!!!!!!!{" "}
              </strong>
            </h3>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default AboutPage;
