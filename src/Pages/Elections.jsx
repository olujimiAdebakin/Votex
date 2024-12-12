import React, { useState } from 'react'
import { elections as dummyElections, elections } from '../data'
import Election from '../Components/Election'

const Elections = () => {

  const [elctions, setElections] = useState(dummyElections)
  

  return (
    <>
      <section className='elections'>
        <div className="container elections_container">
          <header className='elections_header'>
            <h1>Ongoing Elections</h1>
            <button className='btn primary'>Create New election</button>
          </header>
          <menu className='elections_menu'>
            {
              elections.map(election => <Election key={ elections.id} {...election}/>)
            }
          </menu>
        </div>
    </section>
    
    </>
  )
}

export default Elections