import { useState } from 'react';

export const Input = ({ onNewValue }) => {


  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value);
    onNewValue( target.value )
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue === '') return;
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input 
        value={inputValue} 
        onChange={onInputChange} 
        className='Input-Search' 
        type="text" 
        placeholder='Buscar Mascota..' 
      />
    </form>
  )
}
