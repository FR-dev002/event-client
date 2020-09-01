import React, { Fragment } from 'react'
import { useRef, useMemo } from "react";

const InputTest = React.memo(props => {
    const ref = useRef(0)
    return (
        <Fragment>
            <label htmlFor="t">render input {ref.current++}</label>
            <input type="text" onChange={props.change} />
        </Fragment>
    )
})

export default InputTest