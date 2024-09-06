// import { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContextWrapper";
// import service from "../assets/service/api";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import "../style/Story.css";

// function StoryPage() {
//   const { user } = useContext(AuthContext);

//   const { id } = useParams();
//   const [story, setStory] = useState(null);
//   const navigate = useNavigate();

//   async function fetchStory() {
//     try {
//       const response = await service.get(`/api/stories/${id}`);
//       setStory(response.data);
//     } catch (error) {
//       setStory({});
//     }
//   }
//   useEffect(() => {
//     fetchStory();
//   }, [id]);

//   if (!story) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="story">
//       {story ? (
//         <div
//           key={story._id}
//           className="bg-color-custom"
//           style={{ "--custom-bg-color": story.backgroundColor }}
//         >
//           <h2>{story.title}</h2>
//           <p>{story.content}</p>
//           <span
//             className="emoticon"
//             dangerouslySetInnerHTML={{ __html: story.emoticon }}
//           ></span>
//           <blockquote>
//             by {story.author?.username || "unknown author"}
//           </blockquote>
//         </div>
//       ) : (
//         <div>No story available</div>
//       )}
//       <button
//         className="btn btn-primary"
//         onClick={() => {
//           navigate(-1);
//         }}
//       >
//         Back
//       </button>
//     </div>
//   );
// }

// export default StoryPage;

// import { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContextWrapper";
// import service from "../assets/service/api";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import "../style/Story.css";

// function StoryPage() {
//   const { user } = useContext(AuthContext);
//   const { id } = useParams();
//   const [story, setStory] = useState(null);
//   const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [emoticon, setEmoticon] = useState("");
//   const [backgroundColor, setBackgroundColor] = useState("#ffffff");
//   const navigate = useNavigate();

//   async function fetchStory() {
//     try {
//       const response = await service.get(`/api/stories/${id}`);
//       const storyData = response.data;
//       setStory(storyData);
//       setTitle(storyData.title);
//       setContent(storyData.content);
//       setEmoticon(storyData.emoticon);
//       setBackgroundColor(storyData.backgroundColor);
//     } catch (error) {
//       setStory({});
//     }
//   }

//   useEffect(() => {
//     fetchStory();
//   }, [id]);

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       const updatedStory = {
//         title,
//         content,
//         emoticon,
//         backgroundColor,
//       };
//       await service.put(`/api/stories/${id}`, updatedStory);
//       setIsEditing(false);
//       fetchStory(); // Refresh the story data
//     } catch (error) {
//       console.error("Error updating story:", error);
//     }
//   }

//   if (!story) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="story">
//       {isEditing ? (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="title">Title:</label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.currentTarget.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="content">Content:</label>
//             <textarea
//               id="content"
//               value={content}
//               onChange={(e) => setContent(e.currentTarget.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="emoticon">Emoticon:</label>
//             <input
//               type="text"
//               id="emoticon"
//               value={emoticon}
//               onChange={(e) => setEmoticon(e.currentTarget.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="backgroundColor">Background Color:</label>
//             <input
//               type="color"
//               id="backgroundColor"
//               value={backgroundColor}
//               onChange={(e) => setBackgroundColor(e.currentTarget.value)}
//             />
//           </div>
//           <button type="submit">Save Changes</button>
//         </form>
//       ) : (
//         <div
//           key={story._id}
//           className="bg-color-custom"
//           style={{ "--custom-bg-color": story.backgroundColor }}
//         >
//           <h2>{story.title}</h2>
//           <p>{story.content}</p>
//           <span
//             className="emoticon"
//             dangerouslySetInnerHTML={{ __html: story.emoticon }}
//           ></span>
//           <blockquote>
//             by {story.author?.username || "unknown author"}
//           </blockquote>
//           {user._id === story.author._id && (
//             <button onClick={() => setIsEditing(true)}>Edit Story</button>
//           )}
//         </div>
//       )}
//       <button
//         className="btn btn-primary"
//         onClick={() => {
//           navigate(-1);
//         }}
//       >
//         Back
//       </button>
//     </div>
//   );
// }

// export default StoryPage;

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import service from "../assets/service/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../style/Story.css";
import CreateStoryPage from "./CreateStoryPage"; // Import the CreateStoryPage component

function StoryPage() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode
  const navigate = useNavigate();

  async function fetchStory() {
    try {
      const response = await service.get(`/api/stories/${id}`);
      setStory(response.data);
    } catch (error) {
      setStory({});
    }
  }

  useEffect(() => {
    fetchStory();
  }, [id]);

  function handleSave() {
    setIsEditing(false);
    fetchStory(); // Refresh the story data after saving
  }

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div className="story">
      {isEditing ? (
        <CreateStoryPage story={story} onSave={handleSave} /> // Render CreateStoryPage when editing
      ) : (
        <div
          key={story._id}
          className="bg-color-custom"
          style={{ "--custom-bg-color": story.backgroundColor }}
        >
          <h2>{story.title}</h2>
          <p>{story.content}</p>
          <span
            className="emoticon"
            dangerouslySetInnerHTML={{ __html: story.emoticon }}
          ></span>
          <blockquote>
            by {story.author?.username || "unknown author"}
          </blockquote>
          {user._id === story.author._id && (
            <button onClick={() => setIsEditing(true)}>Edit Story</button>
          )}
        </div>
      )}
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default StoryPage;
