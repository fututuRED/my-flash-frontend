import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
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
        <h2>How it works?</h2>
        <ol className="rules">
          <li>
            <strong>Chose a title</strong>
          </li>
          <li>
            A list of thematic EMOJIS will be at your disposal to give you a
            theme to which you can easily connect ans which will be different
            from time to time,
          </li>
          <li>
            <strong>Pick a colour</strong> as a background for your story,
          </li>
          <li>
            <strong>Type your story</strong> your piece on a round nymph that,
            <br /> You can <br /> either
            <strong>share</strong> by going PUBLIC📖
            <br />
            or <strong>keep it to yourself!</strong> by going PRIVATE🔒 It's up
            to you... (Privacy matter to us anyway!)!
          </li>
        </ol>
        <h3>KEEP IN MIND</h3>
        <p>
          Respect and watch out what and especially how you write your stories
        </p>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
