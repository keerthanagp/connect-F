import axios from "axios";

const AddingStudentsToMentor = async (body) => {
  const result = await axios.post(
    "https://connect-hmuf.onrender.com/newMentor",
    body
  );
  return result;
};

export default AddingStudentsToMentor;
