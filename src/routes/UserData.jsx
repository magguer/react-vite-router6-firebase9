import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const UserData = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>{user.email}</h1>
    </div>
  );  
};

export default UserData;
