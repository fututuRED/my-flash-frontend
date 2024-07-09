import React from "react";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import service from "../assets/service/api";
import { useParams } from "react-router-dom";

function StoryPage() {
  // GET STORY/ Like and Respect POST / Friend request
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [story, setStory] = useState({});

  async function fetchStory() {
    try {
      console.log(`Fetching story with ID: ${id}`);
      const response = await service.get(`/api/stories/${id}`);
      setStory(response.data);
      console.log("Fetched story:", response.data);
    } catch (error) {
      setStory({});
      console.log("Error fetching story:", error);
    }
  }
  useEffect(() => {
    fetchStory();
  }, [id]);

  return (
    <div className="story">
      {story ? (
        <div key={story._id}>
          <h2>{story.title}</h2>
          <span
            className="emoticon"
            dangerouslySetInnerHTML={{ __html: story.emoticon }}
          ></span>
          <blockquote>{story.content}</blockquote>
          <quote>by {story.author}</quote>
        </div>
      ) : (
        <div>No story available</div>
      )}
    </div>
  );
}

export default StoryPage;
