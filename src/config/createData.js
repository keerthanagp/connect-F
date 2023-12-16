import axios from "axios";

const createData = async (type, body) => {
  const result = await axios.post(
    `https://connect-hmuf.onrender.com/${type}`,
    body
  );
  return result;
};

export default createData;
