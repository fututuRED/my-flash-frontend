import { useState, useContext } from "react";

import service from "../assets/service/api";
import { CiHeart } from "react-icons/ci";

function Like({ storyId }) {
  const { likes, setLikes } = useState(0);

  async function handleLike() {
    try {
      console.log("Liking Story ID:", storyId);
      const response = await service.post(`/api/stories/${storyId}/reaction`, {
        type: "Like",
      });

      if (response.status === 200) {
        setLikes((prevLikes) => prevLikes + 1);
      }
    } catch (error) {
      console.log("Error liking the story:", error);
    }
  }

  return (
    <button onClick={handleLike}>
      <CiHeart /> {likes}
    </button>
  );
}

export default Like;
