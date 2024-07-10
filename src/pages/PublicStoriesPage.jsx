import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import { Link } from "react-router-dom";
import service from "../assets/service/api";
import "../style/Pond.css";

function PublicStoriesPage() {
  const [stories, setStories] = useState([]);

  const { user } = useContext(AuthContext);

  async function fetchStories() {
    try {
      const response = await service.get("/api/stories");
      setStories(response.data);
      console.log(response);
    } catch (error) {
      setStories([]);
      console.log("Error fetching stories:", error);
    }
  }
  useEffect(() => {
    fetchStories();
  }, []);
  return (
    <div className="pond-grid">
      {stories.length > 0 ? (
        stories.map((oneStory) => (
          <div className="pond-tile" key={oneStory._id}>
            <h2>
              <Link className="story" to={`/stories/${oneStory._id}`}>
                {oneStory.title}
              </Link>
            </h2>
            <span
              className="emoticon"
              dangerouslySetInnerHTML={{ __html: oneStory.emoticon }}
            ></span>
            <blockquote>{oneStory.content}</blockquote>
            <blockquote>{oneStory.author.username}</blockquote>
          </div>
        ))
      ) : (
        <div>No stories available</div>
      )}
    </div>
  );
}

export default PublicStoriesPage;
