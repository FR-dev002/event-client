import { useState, useEffect } from "react";
import axios from 'axios';

const HandleHome = initialState => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchData() {
        setLoading(true)
        const res = await axios({
          method: "get",
          url: "http://localhost:8000/event/getAll",
        });
        setData(res.data.data);
        setLoading(false)
      }
      fetchData();
      return () => {
        setData({});
      };
  }, []);


  return {
    data,
    loading
  };
};

export default HandleHome;
