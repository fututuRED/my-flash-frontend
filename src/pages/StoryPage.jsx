import React from "react";
import { useState, useParams } from "react";
function StoryPage() {
  // GET STORY/ Like and Respect POST /  Update PUT  /
  const [story, setStory] = useState(Null);
  // const [status, setStatus]= useDtate ("")
  const { user } = useContext(AuthContext);
  // USEPARAMS
  async function fetchStory() {
    const { id } = useParams();
    // const navigate

    try {
      const response = await service.get("/api/stories/:id");
      setStories(response.data);

      console.log(response);
    } catch (error) {
      setStories([]);
      console.log("Error fetching story:", error);
      // console.log(error);
    }
  }
  useEffect(() => {
    fetchStory();
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

export default StoryPage;
