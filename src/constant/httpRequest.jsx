import { useState, useCallback } from "react";
import axios from "axios";

import errorHandler409 from "../utils/errorHandler_409";
import errorHandler422 from "./../utils/errorHandler_422";

const HttpPostData = ({ url, headers, payload }) => {
  // default response api
  const [res, setRes] = useState({
    data: null,
    error: null,
    isLoading: false,
    status: false,
    conflig: null
  });

  // API POST
  const callAPIPost = useCallback(() => {

    async function PostData() {

      try {
        setRes(prevState => ({ ...prevState, isLoading: true }));
        axios
          .post(url, payload, headers)
          .then(res => {
            const data = res.data;
            // set response success
            setRes({
              data: data.status === 'success' ? data : null,
              isLoading: false,
              error: data.status === 'fail' ? data : null,
              conflig: null,
              status: true
            });
          })
          .catch(async error => {
            
            // set variabel error and conflig primary key
            let errorList = {};
            let conflig = {};

            // generate errors 422
            if (error.response.status === 422) {
              errorList = await errorHandler422(error.response.data);
            }

            // generate error 409 (conflig primary key / unique key)
            if (
              error.response.status === 409 ||
              error.response.status === 401
            ) {
              conflig = await errorHandler409(error.response.data);
            }

            // set response error
            setRes({
              data: null,
              isLoading: false,
              error: errorList,
              conflig: conflig
            });
          });
      } catch (error) {
        setRes({ data: null, isLoading: false, error });
      }
    }

    if (payload !== "") {
      PostData();
    }
  }, [headers, payload, url]);

  return [res, callAPIPost];
};

export default HttpPostData;
