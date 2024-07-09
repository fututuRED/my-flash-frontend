import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import service from "../assets/service/api";
import { AuthContext } from "../context/AuthContextWrapper";
import axios from "axios";
import { ChromePicker } from "react-color"; // Using react-color for the color picker

function CreateStoryPage() {
  const [emoticon, setEmoticon] = useState("");
  const [emojis, setEmojis] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("#ffffff"); // Default color
  const { user } = useContext(AuthContext);
  const nav = useNavigate();

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
      title,
      content,
      status,
      color, // Include the selected color
      author: user._id,
    };
    try {
      const response = await service.post("/api/stories", storyToCreate);
      if (response.status === 201) {
        nav("/profile", { state: { newStory: response.data } });
      }
    } catch (error) {
      console.log(
        "Error creating story:",
        error.response ? error.response.data : error.message
      );
    }
  }

  return (
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
      <div>
        <label htmlFor="color">Background Color:</label>
        <ChromePicker
          color={color}
          onChangeComplete={(color) => setColor(color.hex)}
        />
      </div>
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateStoryPage;
