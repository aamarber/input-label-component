import React from 'react'
import ReactDOM from 'react-dom/client'
import InputLabel from './inputLabelComponent/inputLabelComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InputLabel label='Name:' placeholder='Peter'></InputLabel>
    <InputLabel label='Surname:' placeholder='Pearson' required={true}></InputLabel>
    <InputLabel label='Pets name:' placeholder='Marramiau'></InputLabel>
  </React.StrictMode>
)
