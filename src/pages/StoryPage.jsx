import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import service from "../assets/service/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../style/Story.css";
import CreateStoryPage from "./CreateStoryPage";

function StoryPage() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  async function fetchStory() {
    try {
      const response = await service.get(`/api/stories/${id}`);
      setStory(response.data);
    } catch (error) {
      setStory({});
    }
  }

  function handleSave() {
    setIsEditing(false);
    fetchStory();
  }

  if (!story) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    fetchStory();
  }, [id]);
  return (
    <div className="story-form">
      {isEditing ? (
        <CreateStoryPage story={story} onSave={handleSave} />
      ) : (
        <div
          key={story._id}
          className="bg-color-custom"
          style={{ "--custom-bg-color": story.backgroundColor }}
        >
          <h2>{story.title}</h2>
          <p>{story.content}</p>
          <span
            className="emoticon"
            dangerouslySetInnerHTML={{ __html: story.emoticon }}
          ></span>
          <blockquote>
            by {story.author?.username || "unknown author"}
          </blockquote>
          {user._id === story.author._id && (
            <button onClick={() => setIsEditing(true)}>Edit Story</button>
          )}
        </div>
      )}
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default StoryPage;
