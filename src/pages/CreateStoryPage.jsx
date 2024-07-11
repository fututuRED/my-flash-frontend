import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HexColorPicker } from "react-colorful";
import service from "../assets/service/api";
import { AuthContext } from "../context/AuthContextWrapper";
import "../style/Story.css";

function CreateStoryPage() {
  const [emoticon, setEmoticon] = useState("");
  const [emojis, setEmojis] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("#ffffff");
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
      color,
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
    <form
      onSubmit={handleSubmit}
      className="story-form"
      style={{ backgroundColor: color }}
    >
      <div className="form-story-grid-item">
        <label htmlFor="title">Story title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />

        <label htmlFor="emoticon">Emoticon:</label>
        <input
          type="text"
          id="emoticon"
          placeholder="Select an emoticon"
          value={emoticon}
          readOnly
        />
        <div className="emoticon-picker">
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

        <label htmlFor="color">Background Color:</label>
        <HexColorPicker color={color} onChange={setColor} />

        <label htmlFor="content">Content:</label>
        <input
          type="textarea"
          id="content"
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />

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
