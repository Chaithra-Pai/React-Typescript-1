import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {

  const personName = {
    firstName: 'Chaithra',
    lastName: 'Pai'
  }

  const personList = [
    {
      firstName: 'Krishnadas',
      lastName: 'Pai'
    },
    {
      firstName: 'Mamatha',
      lastName: 'Pai'
    },    
    {
      firstName: 'Chaithra',
      lastName: 'Pai'
    }
  ]

  return (
    <div className="App">
      <Greet name='Chaithra' isLoggedIn={true}/>
      <Person name = {personName}/>
      <PersonList names={personList}/>
      <Status status='success'/>
      <Oscar>
        <Heading>Oscar goes to Leaonardo DiCaprio!!</Heading>
      </Oscar>
      <Button handleClick={(event) => { console.log('Button clicked', event)}} />
      <Input value = '' handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
