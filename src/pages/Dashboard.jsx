import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useEvents } from "../context/EventContext";

import SearchBar from "../components/SearchBar";
import EventGrid from "../components/EventGrid";
import LoadingSkeleton from "../components/LoadingSkeleton";

const Dashboard = () => {

  const { logout } = useAuth();
  const { events, loading, fetchEvents } = useEvents();
  const [searchTerm, setSearchTerm] = useState("");

  // 🔥 Fetch when dashboard loads
  useEffect(() => {
    fetchEvents();
  }, []);

  // Filter logic
  const filteredEvents =
    events.filter((event) =>
      event.name
        .toLowerCase()
        .includes( searchTerm.toLowerCase() )
    );

  if (loading) 
    return <LoadingSkeleton />;

  return (

    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800">
          Events Dashboard
        </h1>
        <button onClick={logout} className=" px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition " >
          Logout
        </button>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <EventGrid
        filteredEvents={filteredEvents}
      />

    </div>

  );

};

export default Dashboard;