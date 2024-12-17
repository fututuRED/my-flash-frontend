import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import { Link } from "react-router-dom";
import service from "../assets/service/api";
import "../style/Story.css";

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

  if (!stories.length) {
    return (
      <>
        <a href="#" aria-busy="true">
          Loading the artworks, please wait…
        </a>
      </>
    );
  }

  return (
    <>
      <div className="about-page">
        <div className="pond-page">
          <div className="pond-grid">
            {stories.length > 0 ? (
              stories.map((oneStory) => (
                <div className="pond-tile" key={oneStory._id}>
                  <div>
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
                      <Link
                        className="story-link"
                        to={`/stories/${oneStory._id}`}
                      >
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
      </div>
    </>
  );
}

export default PublicStoriesPage;
