import { useState, useEffect } from "react";
import axios from 'axios';
import LocalStorage from "../../helpers/localStorage";

const HandleEvent = initialState => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState([]);

  const { getToken } = LocalStorage();
  const token = getToken();

  useEffect(() => {
    async function fetchData() {
        setLoading(true)
        const res = await axios({
          method: "get",
          url: "http://localhost:8000/event/getAll/byUser",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData(res.data.data);
        setLoading(false)
      }
      fetchData();
      return () => {
        setData({});
      };
  }, [token]);


  return {
    data,
    loading
  };
};

export default HandleEvent;
