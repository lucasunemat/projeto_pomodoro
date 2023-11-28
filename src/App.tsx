/**
 * npx create-react-app my-app --template typescript = Cria um projeto React com Typescript
 * npm start = Inicia o projeto
 */

import React from 'react';
import {PomodoroTimer} from './components/pomodoro-timer';

//propriedade defaultPomodoroTimer é compatível com a interface 
//que usei lá no pomodoro-timer e que setei como algo dele
function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTimer={1500} />
    </div>
  );
}

export default App;
