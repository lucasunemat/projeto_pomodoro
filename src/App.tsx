/**
 * npx create-react-app my-app --template typescript = Cria um projeto React com Typescript
 * npm start = Inicia o projeto
 */

import React from 'react';
import {PomodoroTimer} from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Olá!</h1>
      <PomodoroTimer />
    </div>
  );
}

export default App;
