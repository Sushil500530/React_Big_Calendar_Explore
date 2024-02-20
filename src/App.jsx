// import { ScheduleComponent,Day, Week, WorkWeek, Month, Agenda, Inject } from "@syncfusion/ej2-react-schedule";

import LocalData from "./demo-data/LocalData";


const App = () => {

  return (
    <div>
      <h1 className="text-xl font-bold text-center my-5 underline">Schedule is Comming here</h1>
      {/* <ScheduleComponent currentView="month" selectedDate={new Date(2024, 2 ,20)}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
         </ScheduleComponent> */}
         <LocalData />
    </div>
  );
};

export default App;