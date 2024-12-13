import React, { useState } from 'react'
import { elections as dummyElections, elections } from '../data'
import Election from '../Components/Election'
import AddElectionModal from '../Components/AddElectionModal'
import { useDispatch, useSelector } from 'react-redux'
// import { ImOpt } from 'react-icons/im'
import {UiActions} from "../Store/ui-slice"
import UpdateElectionModal from '../Components/UpdateElectionModal'
// import UpdateElectionModal from '../Components/'

const Elections = () => {

  const [elections, setElections] = useState(dummyElections)
  
  const dispatch = useDispatch();

  // open election modal
  const openModal = () => {
  dispatch(UiActions.openElectionModal())
  }
  
  const electionModalShowing = useSelector(state => state.ui.electionModalShowing)
    const updateElectionModalShowing = useSelector(state => state.ui.updateElectionModalShowing
    );

  return (
    <>
      <section className="elections">
        <div className="container elections_container">
          <header className="elections_header">
            <h1>Ongoing Elections</h1>
            <button className="btn primary" onClick={openModal}>
              Create New election
            </button>
          </header>
          <menu className="elections_menu">
            {elections.map((election) => (
              <Election key={election.id} {...election} />
            ))}
          </menu>
        </div>
      </section>

      {electionModalShowing && <AddElectionModal />}
      {updateElectionModalShowing && <UpdateElectionModal />}
    </>
  );
}

export default Elections