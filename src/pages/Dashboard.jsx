import { useAuth } from "../context/AuthContext";

const Dashboard = () => {

  const { user, logout } = useAuth();
  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px]">
        <h1 className="text-2xl font-bold text-center mb-6">
          Dashboard
        </h1>
        <div className="bg-gray-50 p-4 rounded-lg">

          <p className="text-sm text-gray-500"> Name </p>
          <p className="font-medium mb-3"> {user?.name} </p>
          <p className="text-sm text-gray-500"> Email </p>
          <p className="font-medium"> {user?.email} </p>

        </div>

        <button
          onClick={logout}
          className=" w-full mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition "
        >
          Logout
        </button>

      </div>
    </div>

  );
};

export default Dashboard;