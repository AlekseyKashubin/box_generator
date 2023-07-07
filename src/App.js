import logo from './logo.svg';
import './box.css';
import Box from './components/box';
import BoxForm from './components/BoxForm';
import { useState } from 'react';

function App() {

  const [boxes, setBoxes] = useState([])

  const addBox = newBox => {
    setBoxes(currentBoxes => ([...currentBoxes, newBox]))
  }



  return (
    <div className="App">

      <BoxForm addFunction={addBox} />
      <div className='outside-box'>
        {
          boxes.map((b, i) => {
            return (
              <Box color={b.kColor} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
