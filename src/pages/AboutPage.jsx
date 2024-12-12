import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";

import "../style/Home.css";

function AboutPage() {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <h1 className="site-title">
            SHORT
            <br />
            <AiOutlineThunderbolt />
            so
            <AiOutlineThunderbolt />
            <br />
            short
          </h1>

          <h2>What?</h2>
          <p>
            Ever thought about getting published in the next
            <i> The Newyorker </i> issue?
            <br /> What?
            <br /> Wouldn't it be nice to share some piece of fiction or
            non-fiction in a very easy and pleasant way?
            <br />
            If this of interest to you, WELCOME! <br />
            Short-Fiction is a trendy and challenging way to say a few things in
            an efficient way. Have a look at{" "}
            <a
              className="flash-link"
              href="https://www.flashfictiononline.com/"
              alt="Flashfictiononline site"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flashfictiononline
            </a>{" "}
            where you'll find great stories, pieces of advice and some stories
            too!
          </p>

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

          <h2>How it works?</h2>

          <ol>
            <li>
              <strong>PICK</strong> <br /> a title ("The...)" <br />
              an emoticon 🏝️ 🪐 🪢
              <br />
            </li>
            <li>
              <strong>
                TYPE <br />
                your story
              </strong>
            </li>
            <li>
              either <strong>SHARE </strong> by going <br />
              PUBLIC 📖
              <br />
              or <strong>do NOT! </strong>
              PRIVATE🔒 <br />
              It's up to you but...
              <br />
              Keep in mind that : <br />
              <strong>
                IF YOU GO PUBLIC, <br />
                BE RESPECTFUL!{" "}
              </strong>{" "}
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
