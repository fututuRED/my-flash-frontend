import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import service from "../";
function HomePage() {
  const [pets, setPets] = useState(null);
  const { user } = useContext(AuthContext);

  async function fetchPets() {
    try {
      const response = await service.get("/api/pets");
      setPets(response.data);
    } catch (error) {
      setPets(null);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchPets();
  }, [user]);
  return (
    <div>
      {pets &&
        pets.map((onePet) => (
          <div key={onePet._id}>
            <p>{onePet.name}</p>
            <img src={onePet.image} alt="" />
          </div>
        ))}
    </div>
  );
}

export default HomePage;
