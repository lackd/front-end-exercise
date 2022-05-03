import { useEffect, useState } from 'react';
import * as Conection from './services/axios';
import { Card } from './components/card';
import './App.css';


function App() {
  const [users, setUsers] = useState([])
  const getData = () => {
    Conection.getRequest('users/random_user?size=10').then((response) => {
      console.log(response.data)
      setUsers(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    if (users.length == 0)
      getData()
  }, [users])

  return (
    <div className="App">

      {users.map((item, index) => {
        return (
          <div className='ContainerList' key={index}>
            <Card item={item} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
