import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import { Link } from "react-router-dom";
import service from "../assets/service/api";
import "../style/Pond.css";

function PublicStoriesPage() {
  const [stories, setStories] = useState([]);
  const [visibleContent, setVisibleContent] = useState([]);
  const { user } = useContext(AuthContext);

  async function fetchStories() {
    try {
      const response = await service.get("/api/stories");
      setStories(response.data);
    } catch (error) {
      setStories([]);
      console.log("Error fetching stories:", error);
    }
  }
  const toggleContent = (id) => {
    setVisibleContent((prevVisibleContent) => ({
      ...prevVisibleContent,
      [id]: !prevVisibleContent[id],
    }));
  };
  useEffect(() => {
    fetchStories();
  }, []);
  return (
    <div className="pond-page" data-theme="dark">
      <div className="pond-grid">
        {stories.length > 0 ? (
          stories.map((oneStory) => (
            <div className="pond-tile" key={oneStory._id}>
              <div
                className="bg-color-custom"
                style={{ "--custom-bg-color": oneStory.backgroundColor }}
              >
                <h2 onClick={() => toggleContent(oneStory._id)}>
                  {oneStory.title}
                </h2>
                <span
                  className="emoticon"
                  dangerouslySetInnerHTML={{ __html: oneStory.emoticon }}
                ></span>
                <div
                  className={`content-story ${
                    visibleContent[oneStory._id] ? "show" : ""
                  }`}
                >
                  <p>{oneStory.content}</p>
                  <p>{oneStory.author.username}</p>
                  <Link className="story" to={`/stories/${oneStory._id}`}>
                    details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No stories available</div>
        )}
      </div>
    </div>
  );
}

export default PublicStoriesPage;
