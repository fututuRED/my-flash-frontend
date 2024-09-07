import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import service from "../assets/service/api";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import CreateStoryPage from "./CreateStoryPage";

import "../style/Story.css";

function ProfilePage() {
  const [profileStories, setProfileStories] = useState([]);
  const [editingStory, setEditingStory] = useState(null);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const location = useLocation();

  async function getProfileStories() {
    try {
      const response = await service.get(`/api/stories/users/${user._id}`);
      setProfileStories(response.data);
    } catch (error) {
      setProfileStories([]);
      console.log("Error fetching stories:", error);
    }
  }
  useEffect(() => {
    if (location.state && location.state.newStory) {
      setProfileStories((prevStories) => [
        location.state.newStory,
        ...profileStories,
      ]);
    } else {
      getProfileStories();
    }
  }, [location.state, user._id]);

  async function handleStatus(storyId, currentStatus) {
    try {
      const newStatus = currentStatus === "Public" ? "Private" : "Public";
      await service.put(`/api/stories/${storyId}`, { status: newStatus });

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
      await service.delete(`/api/stories/${storyId}`);
      setProfileStories((prevStories) =>
        prevStories.filter((story) => story._id !== storyId)
      );
    } catch (error) {
      console.log("Error deleting story:", error);
    }
  }
  function handleEdit(story) {
    setEditingStory(story);
  }

  function handleSave() {
    setEditingStory(null);
    getProfileStories();
  }

  return (
    <div className="profile-stories-grid">
      {editingStory ? (
        <CreateStoryPage story={editingStory} onSave={handleSave} />
      ) : profileStories.length > 0 ? (
        profileStories.map((oneStory) => (
          <div key={oneStory._id} className="profile-story-grid-item">
            <button
              onClick={() => handleDelete(oneStory._id)}
              aria-label="Delete"
            >
              <TiDeleteOutline />
            </button>
            <button onClick={() => handleEdit(oneStory)} aria-label="Edit">
              Edit
            </button>
            <h2>
              <Link
                className="story"
                to={`/stories/${oneStory._id}`}
                style={{ color: oneStory.textColor }}
              >
                {oneStory.title}
              </Link>
            </h2>
            <span
              className="emoticon"
              style={{ color: oneStory.textColor }}
              dangerouslySetInnerHTML={{ __html: oneStory.emoticon }}
            ></span>
            <p style={{ color: oneStory.textColor }}>{oneStory.content}</p>
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
