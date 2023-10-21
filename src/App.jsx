
import { useState } from 'react';
import './App.css'
import { ListCard } from './components/ListCard'
import { Navbar } from './components/Navbar'
import { dogs } from './data/dogs';

function App() {
  const [filteredDogs, setFilteredDogs] = useState(dogs);

  const onInputChange = ( newValue ) => {

    const filteres = dogs.filter( dog  => 
      dog.name.toLowerCase().includes( newValue.trim().toLowerCase()) ||
      dog.pais.toLowerCase().includes( newValue.trim().toLowerCase()) 
    );
    
    setFilteredDogs( filteres );
  }

  return (
    <>
      <Navbar onNewValue={ value => onInputChange( value )} />
      <ListCard dogs={ filteredDogs } /> 
    </>
  )
}

export default App
