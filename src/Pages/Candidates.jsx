import React from 'react'
import { useParams } from 'react-router-dom';
import Candidate from "../Components/Candidate"

import {candidates as dummyCandidates} from "../data"
import ConfirmVote from '../Components/ConfirmVote';


const Candidates = () => {
  const { id } = useParams();

  // get candidates that belong to this election
  const candidates = dummyCandidates.filter(candidate => candidate.election === id)


  return (
    <>
      <section className="candidates">
        <header className="candidates_header">
          <h1>Make Your Vote Count!</h1>
          <p>
            Meet the candidates for this election. Choose wisely – this is your
            one chance to have your say. Once you cast your vote, there's no
            turning back!
          </p>
        </header>

        <div className="container candidates_container">
          {
            candidates.map(candidate => <Candidate key={candidate.id} {...candidate}/> )
          }
        </div>
      </section>

      <ConfirmVote/>
    </>
  );
}

export default Candidates