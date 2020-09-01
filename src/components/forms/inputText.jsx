import React, { Fragment} from "react";
const InputText = React.memo(props => {
  return (
    <Fragment>
      <div className="row form__group">
        <div className="col-12">
          <label htmlFor="">{props.label}</label>
        </div>
        <div className="col-12">
          <input
            className={"input__text " + (props.error ? "input__error" : "")}
            type={props.type}
            onChange={props.change}
            name={props.name}
            onBlur={props.blur}
            required={props.required}
            special-character={props.specialCharacter}
            matches={props.matches}
            alpa-numeric={props.alpaNumeric}
            mail={props.mail}
          />
          <p className="error__text">{props.error ? props.error : ""}</p>
        </div>
      </div>
    </Fragment>
  );
}, (prevProps, nextProps) => {
  if(prevProps.render !== nextProps.render) {
    return false;
  }
  return true;
  
});

export default InputText;
