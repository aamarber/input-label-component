import React, { useState } from 'react'

function InputLabelComponent({label, placeholder, required}){

  const [showRequiredMessage, setShowRequiredMessage] = useState(false);

  const onInputChanges = (event) => {
    if(!event?.target?.value){
      setShowRequiredMessage(true);
    }
    else if(showRequiredMessage){
      setShowRequiredMessage(false);
    }
  }

    return (
        <>
          <label>{label}
            <input type="text" placeholder={placeholder} required={required ? 'required' : ''} onChange={onInputChanges}/>
          </label>
          {showRequiredMessage ? (<span className='required-error'>The {label} field is required.</span>) : ''}
        </>
      );
}

export default InputLabelComponent;