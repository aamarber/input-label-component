import React from 'react'

function InputLabelComponent({label, placeholder}){
    return (
        <>
          <label>{label}</label>
          <input type="text" placeholder={placeholder}/>
        </>
      );
}

export default InputLabelComponent;