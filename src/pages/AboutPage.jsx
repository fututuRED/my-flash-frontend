import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";

import "../style/Home.css";

function AboutPage() {
  return (
    <>
      <div className="about-page">
        <h2>What?</h2>
        <p>
          Ever thought about getting published in the next
          <br />
          <i>The Newyorker</i> issue? <br />
          Well I have! If you too, well we can easily agree that the road, if it
          exists is rather long but guess what?
          <br /> What?
          <br /> Wouldn't it be nice to share some piece of fiction or
          non-fiction in a very easy and pleasant way?
          <br />
          If this of interest to you, WELCOME! <br />
          Here you are now, have a look at some random but interesting writing
          piece found in this pretty website <br />
          <a
            href="https://www.flashfictiononline.com/"
            alt="Flashfictiononline site"
            className="otherlink"
          >
            Flashfictiononline
          </a>{" "}
        </p>
        <h2>About what?</h2>
        <p>
          Giving you the opportunity to access a platform for short-short or
          flash-fiction as the trend goes.
          <br />
          We offer you a private and peculiar environment to write, and by using
          Use a little web-notebook without any lines, as many as 300 words
          (+/-),
          <br />
          Ain't that SHORT?
          <br />
          Sure, right?{" "}
        </p>
        <br />
        <div className="last-section">
          <div className="rules">
            <h2>How it works?</h2>
            <ol className="rules">
              <li>
                <strong>Chose a title</strong>
              </li>
              <li>
                <strong>Take an emoticon</strong>
                to set the mood...
              </li>
              <li>
                <strong>Pick a colour</strong> as a background for your story,
              </li>
              <li>
                <strong>Type your story</strong>
              </li>{" "}
              <li>
                either <strong>share</strong> by going <br />
                PUBLIC 📖
                <br />
                or <strong>keep it to yourself!</strong> <br />
                PRIVATE🔒 <br />
                It's up to you...
              </li>
            </ol>
          </div>
          <div className="warning">
            <h3>
              <strong>
                KEEP IN MIND
                <br />
                IF YOU GO PUBLIC, <br />
                BE RESPECTFUL!!!!!!!{" "}
              </strong>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
