import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { login, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if logged in
  useEffect(() => {
    if (user) { navigate("/dashboard"); }
  }, [user]);

  const handleLogin = async () => {
    await login();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[350px] text-center">
        <h1 className="text-2xl font-bold mb-2">
          Celebrare Auth
        </h1>
        <p className="text-gray-500 mb-6 text-sm">
          Login to access your dashboard
        </p>
        <button
          onClick={handleLogin}
          className = " w-full px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition "
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;