import { createContext, useContext, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const EventContext = createContext();

export const EventProvider = ({ children }) => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState( localStorage.getItem("lastEvent") || null );

  // Fetch events 
  const fetchEvents = async () => {

    setLoading(true); 
    try {
      const querySnapshot = await getDocs( collection(db, "events") );
      let eventList = [];
      querySnapshot.forEach((doc) => {
        eventList.push({ id: doc.id, ...doc.data() });
      });

      // Move selected event to top
      if (selectedEventId) {
        const selected = eventList.find( e => e.id === selectedEventId );
        const others = eventList.filter( e => e.id !== selectedEventId );
        if (selected) { eventList = [selected, ...others]; }
      }
      setEvents(eventList);

    } catch (error) { 
        console.error( "Error fetching events:", error ) 
    } finally {
         setLoading(false) 
    }
  };

  // Select event
  const selectEvent = (id) => {
    setSelectedEventId(id);
    localStorage.setItem( "lastEvent", id );
  };

  // Clear selection
  const clearSelection = () => {
    setSelectedEventId(null);
    localStorage.removeItem( "lastEvent" );
  };

  return (
    <EventContext.Provider
      value={{ events, loading, selectedEventId, selectEvent, clearSelection, fetchEvents }}
    >
      {children}
    </EventContext.Provider>
  );

};

export const useEvents = () => useContext(EventContext);