import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../assets/service/api";

function CreateStoryPage() {
  // author? author, setAuthor = the user logged in ??
  const [emoticon, setEmoticon] = useState("");
  const [shape, setShape] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  // const availableStatus = ["Private", "Public"];

  const nav = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const storyToCreate = {
      emoticon,
      shape,
      title,
      content,
      status,
    };
    try {
      const response = await service.post("/api/stories", storyToCreate);
      console.log(response);
      if (response.status === 201) {
        nav("/");
      }
    } catch (error) {
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
            value={emoticon}
            onChange={(e) => setEmoticon(e.currentTarget.value)}
          />
        </div>
        <fieldset>
          <div>
            <legend>Please select your Shape:</legend>
            {/* <label htmlFor="shapen">Shape:</label> */}
            <input
              type="text"
              id="shape"
              value={emoticon}
              onChange={(e) => setShape(e.currentTarget.value)}
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
            value={status}
            checked
            onChange={(e) => setStatus(e.currentTarget.value)}
          />
          <label htmlFor="Private">Private</label>
        </div>
        <div>
          <input
            type="radio"
            name="status"
            id="Public"
            value={status}
            checked
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
