
import styled from 'styled-components';
import StartGame from './components/StartGame';
import { useState } from 'react';
import GamePlay from './components/GamePlay';



function App() {

  const [isGameStarted, setIsGAmeStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGAmeStarted((prev) => !prev);
  }
  return <>
    {
      isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />

    }
  </>;
}

export default App;
