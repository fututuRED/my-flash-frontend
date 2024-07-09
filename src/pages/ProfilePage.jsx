import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import service from "../assets/service/api";
import { useParams } from "react-router-dom";
import "../style/Story.css";
import { Link } from "react-router-dom";
import { RiChatDeleteLine } from "react-icons/ri";

function ProfilePage() {
  const [profileStories, setProfileStories] = useState([]);
  const { user } = useContext(AuthContext);

  const { id } = useParams();

  async function getProfileStories() {
    try {
      const response = await service.get(`/api/stories/users/${user._id}`);
      setProfileStories(response.data);
      console.log(response);
    } catch (error) {
      setProfileStories([]);
      console.log("Error fetching stories:", error);
    }
  }

  async function handleStatus(storyId, currentStatus) {
    try {
      const newStatus = currentStatus === "Public" ? "Private" : "Public";
      await service.put(`/api/stories/${storyId}`, { status: newStatus });
      // Refresh the stories immediately after updating the status
      setProfileStories((prevStories) =>
        prevStories.map((story) =>
          story._id === storyId ? { ...story, status: newStatus } : story
        )
      );
    } catch (error) {
      console.log("Error updating status:", error);
    }
  }
  async function handleDelete(storyId) {
    try {
      await service.del(`/api/stories/${storyId}`);
      setProfileStories((prevStories) =>
        prevStories.filter((story) => story._id !== storyId)
      );
    } catch (error) {
      console.log("Error deleting story:", error);
    }
  }
  useEffect(() => {
    getProfileStories();
  }, [user._id]);

  return (
    <div className="profile-stories-grid">
      {profileStories.length > 0 ? (
        profileStories.map((oneStory) => (
          <div key={oneStory._id} className="story-grid-item">
            <button onClick={() => handleDelete(oneStory._id)}>
              <RiChatDeleteLine />
            </button>
            <h2>
              <Link className="story" to={`/stories/${oneStory._id}`}>
                {oneStory.title}
              </Link>
            </h2>

            <span
              className="emoticon"
              dangerouslySetInnerHTML={{ __html: oneStory.emoticon }}
            ></span>

            <p>{oneStory.content}</p>
            <label htmlFor={`status-${oneStory._id}`}>Status: </label>
            <input
              type="checkbox"
              name={`status-${oneStory._id}`}
              id={`status-${oneStory._id}`}
              checked={oneStory.status === "Public"}
              onChange={() => handleStatus(oneStory._id, oneStory.status)}
            />
            <span>{oneStory.status === "Public" ? "Public" : "Private"}</span>
          </div>
        ))
      ) : (
        <div>No stories available</div>
      )}
    </div>
  );
}

export default ProfilePage;
