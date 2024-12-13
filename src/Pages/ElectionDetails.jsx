import React from 'react'
import { useParams } from 'react-router-dom'
import { candidates,  elections, voters } from '../data'
import ElectionCandidate from '../Components/ElectionCandidate'
import { IoAddOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { UiActions } from '../Store/ui-slice'
import AddCandidateModal from '../Components/AddCandidateModal'

const ElectionDetails = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  
  const currentElection = elections.find(election => election.id == id)

  const electionCandidates = candidates.filter(candidate => candidate.election == id)

  const AddCandidateModalShowing = useSelector(state => state.ui.addCandidateModalShowing )
  
  const openModal = () => {
    dispatch(UiActions.openAddCandidateModal())
  }
  return (
    <>
      <section className="electionDetails">
        <div className="container electionDetails_container">
          <h2>{currentElection.title}</h2>
          <p>{currentElection.desc}</p>
          <div className="electionDetails_image">
            <img src={currentElection.thumbnail} alt={currentElection.title} />
          </div>

          <menu className="electionDetails_candidates">
            {electionCandidates.map((candidate) => (
              <ElectionCandidate key={candidate.id} {...candidate} />
            ))}
            <button className="add_candidate-btn" onClick={openModal}>
              <IoAddOutline />
            </button>
          </menu>

          <menu className="voters">
            <h2>Voters</h2>
            <table className="voters_table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email Address</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {voters.map((voter) => (
                  <tr key={voter.id}>
                    <td>{voter.fullName}</td>
                    <td>{voter.email}</td>
                    <td>12:00pm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </menu>
        </div>
      </section>
      {AddCandidateModalShowing && <AddCandidateModal />}
    </>
  );
}

export default ElectionDetails