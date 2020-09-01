import React, { Fragment } from 'react'

const A = props => {
    return (
      <Fragment>
        <input type="text" onChange={props.change} name="A" />
      </Fragment>
    );
}

export default A