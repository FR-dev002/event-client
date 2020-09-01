import { useState, useEffect } from "react";
import { useCallback } from "react";

const LoginProcess = () => {
const dummy = [
  { id: 1, name: "lorem1", isDeleted: false },
  { id: 2, name: "lorem2", isDeleted: false }
];
  const [values, setValues] = useState('');
  const [toogleModal, setToogleModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [data, setData] = useState(dummy);


  const fetchData = async () => {
    // console.log(data);
  }

  useEffect(() => {
    fetchData()
    return ( data) => {
      data = [];
    };
  }, []);

  // useEffect(() => {
  //   if (isSubmitting) {
  //     setIsSubmitting(false);
  //     setToogleModal(false);
  //     setData(data);
  //   }
  //   return (isSubmitting, values, data) => {
  //     isSubmitting = false;
  //     values = false;
  //     data = [];
  //   };
  // }, [isSubmitting, values, data]);

  // const updateData = param => {
  //   setValues(prev => !prev);
  //   setToogleModal(prev => !prev);
  //   if (param >= 0) {
  //       data[param].isDeleted = !data[param].isDeleted
  //       setData(data)
  //       fetchData()
  //   } 
  // };
  const onChange = useCallback( (e) => {
    setValues(e.target.value)
  }, [setValues])
  return {
    values,
    toogleModal,
    data,
    onChange
    // updateData
  };
};

export default LoginProcess;
