import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { candidates, elections as dummyElections, voters } from '../data'
import ElectionCandidate from '../Components/ElectionCandidate'

const ElectionDetails = () => {

  const { id } = useParams()
  
  const currentElection = dummyElections.find(election => election.id == id)

  const electionCandidates = candidates.filer(candidate => candidate.election == id )
  return (
    <>
      <section className='electionDetails'>
        <div className='container electionDetails_container'>
          <h2>{currentElection.title}</h2>
          <p>{currentElection.description}</p>
          <div className="electionDetails_image">
            <img src={currentElection.thumbnail} alt={currentElection.title} />
          </div>

          <menu className="electionDetails_candidates">
            {
              electionCandidates.map(candidate => <ElectionCandidate key={ candidate.id} {...candidate}/>)
            }
          </menu>

          <menu className="voters">
            <h2>Voters</h2>
            <table className='voters_table'>
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Time</th>
              </tr>
              <thead>
                <tbody>
                  {
                    voters.map(voter =>  <tr>
                      <td>{voter.fullName}</td>
                      <td>{voter.email}</td>
                      <td>12:00pm</td>
                      
                  </tr>)
                 }
                </tbody>
              </thead>
            </table>
          </menu>
        </div>
    </section>
    
    </>
  )
}

export default ElectionDetails