import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import service from "../assets/service/api";
import "../style/Pond.css";
function PublicStoriesPage() {
  const [stories, setStories] = useState([]);
  // const [status, setStatus]= useDtate ("")
  const { user } = useContext(AuthContext);

  async function fetchStories() {
    try {
      const response = await service.get("/api/stories");
      setStories(response.data);
      console.log(response);
    } catch (error) {
      setStories([]);
      console.log("Error fetching stories:", error);
      // console.log(error);
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
            <h2>{oneStory.title}</h2>
            <label>{oneStory.emoticon}</label>
            <label>{oneStory.shape}</label>
            <blockquote>{oneStory.content}</blockquote>
          </div>
        ))
      ) : (
        <div>No stories available</div>
      )}
    </div>
  );
}

export default PublicStoriesPage;
