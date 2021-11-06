import React, { useState, useEffect } from "react";
import ListData from "../config/ListAll";

const AddStudentstoMentor = () => {
  const [mentor, setMentor] = useState("");
  const [student, setStudent] = useState("");
  const [studentsSelected, setStudentsSelected] = useState([]);
  const [mentorSelected, setMentorSelected] = useState("");

  const onMountFunc = () => {
    ListData()
      .then((result) => {
        setMentor(result.mentor);
        setStudent(
          result.student.filter((stud) => {
            return !stud.mentorAssigned ? stud : null;
          })
        );
      })
      .then(() => console.log(student, " students from useEffect"));
  };

  useEffect(() => {
    onMountFunc();
  }, []);

  const checkboxChangeFunc = (ev) => {
    setStudentsSelected((prev) => {
      if (ev.target.checked === true) {
        if (!studentsSelected.includes(ev.target.name)) {
          return [...prev, ev.target.name];
        }
      }
      if (ev.target.checked === false) {
        if (studentsSelected.includes(ev.target.name)) {
          return prev.filter((pre) => {
            return pre !== ev.target.name ? pre : null;
          });
        }
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            <label>Select Mentor</label>
            <select
              onChange={(ev) => {
                setMentorSelected(ev.target.value);
              }}
            >
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
                      <input
                        type="checkbox"
                        name={stud._id}
                        value={stud._id}
                        onChange={(ev) => checkboxChangeFunc(ev)}
                      />
                      {stud.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              console.log(studentsSelected, "studentsselected");
              console.log(mentorSelected, "mentorSelected");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudentstoMentor;
