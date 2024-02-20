
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const locales = {
  "en-US": "date-fns/locale/en-US",
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];


const LocalData = () => {
  const [state, setstate] = useState({ title: "", start: "", end: "" });
  const [allState, setAllState] = useState(events);
console.log(state);
  function handleAddState() {

    for (let i=0; i<allState.length; i++){

      const d1 = new Date (allState[i].start);
      const d2 = new Date(state.start);
      const d3 = new Date(allState[i].end);
      const d4 = new Date(state.end);

       if (
        ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
          (d4 <= d3) )
        )
      {   
          toast.success("Your submission is double"); 
          break;
       }
  }
    setAllState([...allState, state]);
  }
  console.log(state);
  return (
    <div>
      <div className="App w-full h-full">
        <div className="flex items-center justify-center gap-10 flex-col md:flex-col lg:flex-row my-5">
          <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={state.title} onChange={(e) => setstate({ ...state, title: e.target.value })} className="input w-full" />
          <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={state.start} onChange={(start) => setstate({ ...state, start })} className="input w-full"  />
          <DatePicker placeholderText="End Date" selected={state.end} onChange={(end) => setstate({ ...state, end })} />
          <button className="px-5 py-2 text-black hover:text-white bg-green-800 rounded" onClick={handleAddState}>
            Add Event
          </button>
        </div>
        <Calendar localizer={localizer} events={allState} startAccessor="start" endAccessor="end" className="text-green-600 w-2/3 h-[550px] mx-auto" />
      </div>
    </div>
  )
}
export default LocalData;

