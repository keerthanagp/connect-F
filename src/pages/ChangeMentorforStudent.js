import React, { useState, useEffect } from "react";
import ListData from "../config/ListAll";

const ChangeMentorforStudent = () => {
  const [mentor, setMentor] = useState("");
  const [student, setStudent] = useState("");

  useEffect(() => {
    ListData().then((result) => {
      setMentor(result.mentor);
      setStudent(result.student);
      return () => {
        setMentor("");
        setStudent("");
      };
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            <label>Select Mentor</label>
            <select>
              <option>Select Mentor</option>
              {mentor &&
                mentor.map((ment) => {
                  return (
                    <option value={ment._id} key={ment._id}>
                      {ment.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>

        <div className="col">
          <div>
            <label>Select Students</label>
            {student && (
              <ul style={{ listStyle: "none" }}>
                {student.map((stud) => {
                  return (
                    <li key={stud._id}>
                      <input type="checkbox" value={stud._id} />
                      {stud.name}
                    </li>
                  );
                })}
              </ul>
            )}
            {/* <select>
              <option>Select Students</option>
              {student &&
                student.map((stud) => {
                  return (
                    <option value={stud._id} key={stud._id}>
                      {stud.name}
                    </option>
                  );
                })}
            </select> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeMentorforStudent;
