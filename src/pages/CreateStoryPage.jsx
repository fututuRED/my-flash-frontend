import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HexColorPicker } from "react-colorful";
import service from "../assets/service/api";
import { AuthContext } from "../context/AuthContextWrapper";
import "../style/Create.css";

function CreateStoryPage({ story, onSave }) {
  const [emoticon, setEmoticon] = useState(story?.emoticon || "");
  const [emojis, setEmojis] = useState([]);
  const [title, setTitle] = useState(story?.title || "");
  const [content, setContent] = useState(story?.content || "");
  const [status, setStatus] = useState(story?.status || "Private");
  const [textColor, setTextColor] = useState(story?.textColor || "#000000");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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
    const storyToSave = {
      emoticon,
      title,
      content,
      status,
      textColor,
      author: user._id,
    };

    try {
      if (story?._id) {
        await service.put(`/api/stories/${story._id}`, storyToSave);
      } else {
        const response = await service.post("/api/stories", storyToSave);
        if (response.status === 201) {
          navigate("/profile", { state: { newStory: response.data } });
        }
      }
      if (onSave) onSave();
    } catch (error) {
      console.log(
        "Error saving story:",
        error.response ? error.response.data : error.message
      );
    }
  }

  return (
    <div className="story-form-container">
      <form onSubmit={handleSubmit}>
        <div className="story-form">
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

          <label htmlFor="textColor">Text Color:</label>
          <HexColorPicker color={textColor} onChange={setTextColor} />

          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            rows="5"
            cols="30"
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          />
          <fieldset>
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
            <div className="pub-priv">
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
          </fieldset>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateStoryPage;
