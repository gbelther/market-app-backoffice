import { api } from "../../services/api";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/user/userSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const request = async () => {
    try {
      await api.get("/users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={request}>Request</button>
    </div>
  );
};

export default Home;
