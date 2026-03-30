import { useEvents } from "../context/EventContext";
import EventCard from "./EventCard";

const EventGrid = ({ filteredEvents }) => {

  const { clearSelection } = useEvents();

  return (

    <div
      onClick={clearSelection}
      className="p-6"
    >

      {filteredEvents.length === 0 ? (

        <div className="text-center py-20 text-gray-500">
          <p className="text-lg font-medium">
            No events found
          </p>
        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}
        </div>

      )}

    </div>

  );

};

export default EventGrid;