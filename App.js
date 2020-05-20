import React from 'react';
import CronometroPomodoro from './components/CronometroPomodoro';

//No supe como mantener la posición de los TextInput y de los botones al abrirse el teclado.

export default class App extends React.Component {
  render() {
    return (
      <CronometroPomodoro/>
    );
  }
}


