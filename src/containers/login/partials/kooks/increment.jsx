import React, { Fragment, useRef, useState } from "react";
import LoginProcess from "./../../partials/loginProses";

const Increment = React.memo((props) => {
    const {values} = LoginProcess()

    const render = useRef(0)
    const [count, setCount] = useState(0)
    return (
      <Fragment>
        <h4>Render: {render.current++}</h4>
        <h4>Count: {count}</h4>
        <h4>Val: {values}</h4>
        <h4>val 2: {props.val2}</h4>
        <button
          onClick={() => {
            setCount(prev => prev + 1);
            if (count % 2 === 0) {
              props.click();
            }
          }}
        >
          Tambah
        </button>
      </Fragment>
    );
}, (prevProps, nextProps) => {
    const prev = prevProps.data;
    const next = nextProps.data;
    if (prev.event !== next.event) {
        return false;
    }
    return true;
})

export default Increment