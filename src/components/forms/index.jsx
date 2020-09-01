import React from 'react'
// import "./form.sass"
export default function Form(props) {
    return (
        <form className={props.className}>
            {props.children}
        </form>
    )
}
