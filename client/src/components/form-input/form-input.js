import React from 'react';
import PropTypes from 'prop-types';
import './form-input.scss'

const FormInput = ({
  fillColor,
  name,
  type,
  placeholder,
  className,
  value,
  error,
  children,
  label,
  searchActive,
  // onChange,
  ...props
}) => {

  const formStyle = {
    backgroundColor: '#000',
    color: fillColor,
    fontSize: 16,
    borderRadius: 5,
    border: `1px solid ${fillColor}`,
    padding: 5
  }
  
  return (
    <React.Fragment>
      {/* <label htmlFor={name}>{label}</label> */}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        {...props}
        className={className}
        // className={className}
        style={formStyle}
      />
      { error && <p>{ error }</p>}
    </React.Fragment>
  )
}

FormInput.defaultProps = {
  type: "text",
  className: ""
}

FormInput.propTypes = {
  // name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
  className: PropTypes.string,
  value: PropTypes.any,
  // onChange: PropTypes.func.isRequired
}

export default FormInput;