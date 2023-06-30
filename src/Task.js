import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import React from "react";

const Task = ({ taskObj, onComplete }) => {

  const distance = formatDistanceToNow(
    new Date(taskObj.deadline),{
      addSuffix: true,
      locale: tr,
    }
  );

  const isDeadlineClose  = differenceInDays(
    new Date(taskObj.deadline),
    new Date()
  )<=3

  return (
    <div className="p-6 bg-white rounded-md leading-6 mt-4 shadow-md">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="deadline">son teslim: <span className={isDeadlineClose ? "bg-red-300 text": "bg-slate-400"}>{distance}</span></div>
      <p className="p-2 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
