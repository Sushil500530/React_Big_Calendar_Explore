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


    // for (let i = 0; i < allState.length; i++) {

    //   const d1 = new Date(allState[i].start);
    //   const d2 = new Date(state.start);
    //   const d3 = new Date(allState[i].end);
    //   const d4 = new Date(state.end);

    //   if (
    //     ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
    //       (d4 <= d3))
    //   ) {
    //     break;
    //   }
    // }