import { useState, useContext } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import service from "../assets/service/api";

function Respect({ storyId }) {
  const { respects, setRespects } = useState(0);

  async function handleRespect() {
    try {
      console.log("Respecting Story ID:", storyId);
      const response = await service.post(`/api/stories/${storyId}/reaction`, {
        type: "Respect",
      });

      if (response.status === 200) {
        setRespects((prevRespects) => prevRespects + 1);
      }
    } catch (error) {
      console.log("Error respecting the story:", error);
    }
  }

  return (
    <button onClick={handleRespect}>
      <FaRegThumbsUp />
      {respects}
    </button>
  );
}

export default Respect;
