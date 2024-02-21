
import axios, { all } from "axios";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import moment from "moment";
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
    title: 'sdfsf sf',
    start: new Date('2024-02-21T18:00:00.000Z'),
    end: new Date('2024-02-21T18:00:00.000Z')
  },
  {
    title: 'sdfsf sf',
    start: new Date('2024-02-21T18:00:00.000Z'),
    end: new Date('2024-02-21T18:00:00.000Z')
  },
  {
    title: 'sdfsf sf',
    start: new Date('2024-02-21T18:00:00.000Z'),
    end: new Date('2024-02-21T18:00:00.000Z')
  }
];

const LocalData = () => {
  const [state, setstate] = useState({ title: "", start: "", end: "" });
  // const [allEvent,refetch] = useAxiosPublic();
  const [allState, setAllState] = useState(events);
 
  // refetch()
  async function handleAddState() {
    if (state.title === '') {
      return toast.error('Please enter a title')
    }
    console.log(state);
    // await axios.post('http://localhost:5000/create-rutine', state)
    setAllState([...allState, state]);
   
  }

  // async function handleGetRutine(data) {
  //   handleAddState()
  //   const response = await axios.get('http://localhost:5000/rutines?start='+moment(data.start).toISOString()+'&end='+moment(data.end).toISOString())
  //   setAllState(response.data)
  //   return handleGetRutine(state)
  // }

  return (
    <div>
      <div className="App w-full h-full">
        <div className="flex items-center justify-center gap-10 flex-col md:flex-col lg:flex-row my-5">
          <input type="text" placeholder="Add Rutine Title" value={state.title} onChange={(e) => setstate({ ...state, title: e.target.value })} className="input" required />
          <DatePicker placeholderText="Start Date" selected={state.start} onChange={(start) => setstate({ ...state, start })} className="input w-full z-[1] " required />
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

