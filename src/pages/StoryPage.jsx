import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import service from "../assets/service/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Respect from "../components/Respect";
import Like from "../components/Like";
function StoryPage() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  async function fetchStory() {
    try {
      const response = await service.get(`/api/stories/${id}`);
      setStory(response.data);
    } catch (error) {
      setStory({});
    }
  }
  useEffect(() => {
    fetchStory();
  }, [id]);

  if (!story) {
    return <div>Loading...</div>;
  }
  return (
    <div className="story">
      {story ? (
        <div key={story._id}>
          <h2>{story.title}</h2>
          <p>{story.content}</p>
          <Like storyId={story._id} />
          <Respect storyId={story._id} />
          <span
            className="emoticon"
            dangerouslySetInnerHTML={{ __html: story.emoticon }}
          ></span>
          <blockquote>{story.content}</blockquote>
          <blockquote>
            by {story.author?.username || "unknown author"}
          </blockquote>
        </div>
      ) : (
        <div>No story available</div>
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
