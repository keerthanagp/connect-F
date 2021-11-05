import React, { useEffect, useState } from "react";
import List from "../config/ListAll";

const ListAll = () => {
  useEffect(() => {
    List().then(({ student, mentor }) => {
      setMentor(mentor);
      setStudent(student);
    });
  }, []);
  const [studentState, setStudent] = useState(null);
  const [mentorState, setMentor] = useState(null);
  console.log("student", studentState);
  console.log("mentor", mentorState);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* list students */}
          {studentState ? JSON.stringify(studentState) : ""}
        </div>
        <div className="col">{/* list mentors */}</div>
      </div>
    </div>
  );
};

export default ListAll;
