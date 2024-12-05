import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../style/Home.css";

function AboutPage() {
  return (
    <div>
      <h2>What?</h2>
      <p>
        Ever thought about getting published in the next
        <br />
        <i>The Newyorker</i> issue? <br />
        Well I have! If you too, well we can easily agree that the road, if it
        exists is rather long but guess what?
        <br /> What?
        <br /> Wouldn't it be nice to share some piece of fiction or non-fiction
        in a very easy and pleasant way?
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
        We offer you a private and peculiar environment to write, mostly less
        thant 300 words,
        <br />
        Ain't that SHORT?
        <br />
        Sure, right?{" "}
      </p>
      <ol>
        <br />
        <h2>How it works?</h2>
        <li>
          <strong>Create!</strong> Use a little web-notebook without any lines!
        </li>
        <li>
          A list of thematic EMOJIS will be at your disposal to give you a theme
          to which you can easily connect ans which will be different from time
          to time,
        </li>
        <li>Pick a colour to write on,</li>
        <li>
          {" "}
          <strong>Deliver</strong> your piece on a round nymph that, You can{" "}
          <strong>share</strong>(to the public)
          <br />
          or <strong>keep it to yourself!</strong>
          It's up to you... (Privacy matter to us anyway!)!
        </li>
      </ol>
      <p>
        Keep in mind that the public could be... any internet onlookers who
        accidently were looking for something..
        <br /> Funny or else! Anyway..
        <br /> NO WORIES, nobody will comment what you write!
      </p>
    </div>
  );
}

export default AboutPage;
