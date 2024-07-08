import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import service from "../assets/service/api";
function ProfilePage() {
  const [profileStories, setProfileStories] = useState([]);
  const { user } = useContext(AuthContext);

  async function getProfileStories() {
    try {
      const response = await service.get(`/api/stories/users/${user._id}`);
      setProfileStories(response.data);
      console.log(response);
    } catch (error) {
      setProfileStories([]);
      console.log("Error fetching stories:", error);
      // console.log(error);
    }
  }
  useEffect(() => {
    getProfileStories();
  }, []);
  return (
    <div>
      {profileStories.length > 0 ? (
        profileStories.map((oneStory) => (
          <div key={oneStory._id}>
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

export default ProfilePage;
