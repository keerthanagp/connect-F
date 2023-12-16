import axios from "axios";

const ChangingMentor = async (body) => {
  const result = await axios.post(
    "https://connect-hmuf.onrender.com/assignmentor/modifyMentor",
    body
  );
  return result;
};
export default ChangingMentor;
