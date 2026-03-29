import { useEvents } from "../context/EventContext";

const EventCard = ({ event }) => {

  const { selectedEventId, selectEvent } = useEvents();
  const isSelected =
    selectedEventId === event.id;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        selectEvent(event.id);
      }}

      className={` p-5 rounded-xl border cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]
        ${isSelected
          ? "border-blue-600 bg-blue-100 shadow-lg scale-[1.02]"
          : "border-gray-200 bg-white"
        }
      `}
    >

      <h2 className="font-semibold text-lg text-gray-800">
        {event.name}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {event.date}
      </p>

      <p className="text-sm text-gray-600">
        {event.location}
      </p>

    </div>
  );

};

export default EventCard;