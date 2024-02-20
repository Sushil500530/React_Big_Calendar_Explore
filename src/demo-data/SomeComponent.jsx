import { Scheduler } from "@aldabil/react-scheduler";
import { typeSchedulerRef } from '@aldabil/react-scheduler/types';
import { Fragment, useRef } from "react";

const SomeComponent = () => {
  const calendarRef = useRef<typeSchedulerRef>(null);

  return <Fragment>
    <div>
      <button onClick={()=>{
        calendarRef.current.scheduler.handleState("day", "view");
      }}>
        Change View
      </button>
      <button onClick={()=>{
        calendarRef.current.scheduler.triggerDialog(true, {
          start:'2024-20-02',
          end:'2024-22-02'
        })
      }}>
        Add Event Tomorrow
      </button>
    </div>

    <Scheduler
      ref={calendarRef}
      events={'2'}
      //...
    />
  </Fragment>
};
export default SomeComponent