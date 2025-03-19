import React from 'react'
import './App.css'
import Loop from './Components/Loop'
import "/src/Components/Netflix.css";
import Tailwind from './Components/Tailwind';
import Ev from './Components/Ev';
import Eprops from './Components/Eprops';
import State, { DerivedState } from './Hooks/State';
import LiftingupState from './Components/LiftingupState';
import Toggle from './Projects/Toggle/Toggle';
import Todo from './Projects/Todo/Todo';
import Ptodo from './Projects/Todo/Ptodo';

function App() {

  return (
    <>

{/*     
   <section className='container'>

<h1 className='card-heading'>List Of The Best Netflix Series</h1>

  <Loop/>

<Tailwind/>

<br />

<Ev/>

<Eprops/>

<State/>

<DerivedState/>

    </section> */}



{/* 
    <section className='section2'>
      
<Toggle/>
    </section> */}


    <section className='todo'>
      <Todo/>

    </section>

    <Ptodo/>

    </>
  )
}

export default App
