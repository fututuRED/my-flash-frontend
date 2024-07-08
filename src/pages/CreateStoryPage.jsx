import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
import { MdOutlineRectangle } from "react-icons/md";
import service from "../assets/service/api";
import axios from "axios";

function CreateStoryPage() {
  // author? author, setAuthor = the user logged in ??
  const [emoticon, setEmoticon] = useState("");
  const [emojis, setEmojis] = useState("");
  const [shape, setShape] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const nav = useNavigate();

  // https://github.com/cheatsnake/emojihub API for emojis
  useEffect(() => {
    axios
      .get("https://emojihub.yurace.pro/api/all/category/travel-and-places")
      .then((response) => {
        setEmojis(response.data);
      })
      .catch((error) => {
        console.error("Error fetching emojis", error);
      });
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const storyToCreate = {
      emoticon,
      shape,
      title,
      content,
      status,
    };
    console.log("Story to create:", storyToCreate);
    try {
      const response = await service.post("/api/stories", storyToCreate);
      console.log("Response from server:", response);
      console.log(response);
      if (response.status === 201) {
        nav("/");
      }
    } catch (error) {
      console.log(
        "Error creating story:",
        error.response ? error.response.data : error.message
      );
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Story title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="emoticon">Emoticon:</label>
          <input
            type="text"
            id="emoticon"
            placeholder="Select an emoticon"
            value={emoticon}
            readOnly
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              maxHeight: "150px",
              overflowY: "scroll",
              border: "1px solid #ccc",
              padding: "5px",
            }}
          >
            {emojis.length > 0 ? (
              emojis.map((emoji, index) => (
                <span
                  key={index}
                  style={{ fontSize: "24px", margin: "5px", cursor: "pointer" }}
                  onClick={() => setEmoticon(emoji.htmlCode || emoji.emoji)}
                  dangerouslySetInnerHTML={{ __html: emoji.htmlCode }}
                ></span>
              ))
            ) : (
              <span>Loading emojis...</span>
            )}
          </div>
        </div>
        <fieldset>
          <legend>Please select your Shape:</legend>
          <div>
            <IoTriangleSharp
              size={30}
              onClick={() => setShape("triangle")}
              style={{
                cursor: "pointer",
                color: shape === "triangle" ? "blue" : "black",
              }}
            />
            <MdOutlineRectangle
              size={30}
              onClick={() => setShape("rectangle")}
              style={{
                cursor: "pointer",
                color: shape === "rectangle" ? "blue" : "black",
              }}
            />
            <FaRegCircle
              size={30}
              onClick={() => setShape("circle")}
              style={{
                cursor: "pointer",
                color: shape === "circle" ? "blue" : "black",
              }}
            />
          </div>
        </fieldset>
        <div>
          <label htmlFor="content">Content:</label>
          <input
            type="textarea"
            id="content"
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          />
        </div>
        <div>
          <input
            type="radio"
            name="status"
            id="Private"
            value="Private"
            checked={status === "Private"}
            onChange={(e) => setStatus(e.currentTarget.value)}
          />
          <label htmlFor="Private">Private</label>
        </div>
        <div>
          <input
            type="radio"
            name="status"
            id="Public"
            value="Public"
            checked={status === "Public"}
            onChange={(e) => setStatus(e.currentTarget.value)}
          />
          <label htmlFor="Public">Public</label>
        </div>
        <button>Create Story</button>
      </form>
    </>
  );
}
export default CreateStoryPage;
