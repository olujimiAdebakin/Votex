import { useEffect, useState } from 'react'
import { candidates } from '../data'
import { useDispatch, useSelector } from 'react-redux';
import {UiActions} from "../Store/ui-slice";

const ConfirmVote = () => {
  const [modalCandidate, setModalCandidates] = useState({});
  
  const dispatch = useDispatch();

  // close confirm vote modal
  const closeCandidateModal = () => {
    dispatch(UiActions.closeVoteCandidateModal())
  }

  // get selected candidates id from redux store
  const selectedVoteCandidate = useSelector(state => state.vote.selectedVoteCandidate)

    // get the selected candidates
  const fetchCandidate = () => {
    candidates.find(candidate => {
      if (candidate.id === selectedVoteCandidate) {
        setModalCandidates(candidate)
      }
    })
  }

    useEffect(() => {
      fetchCandidate();
    }, [])

  return (
    <>
      <section className="modal">
        <div className="modal_content confirm_vote-content">
          <h5>Please confirm Your Vote</h5>
          <p>You are about to vote for: {modalCandidate.fullName}</p>
          <div className="confirm_vote-image">
            <img src={modalCandidate.image} alt={modalCandidate.fullName} />
          </div>
          <h2>
            {modalCandidate.fullName?.length > 20
              ? modalCandidate.fullName?.substring(0, 20) + "..."
              : modalCandidate?.fullName}
          </h2>
          <p>
            {modalCandidate.motto?.length > 30
              ? modalCandidate.motto?.substring(0, 30) + "..."
              : modalCandidate?.motto}
          </p>
          <div className="confirm_vote-cta">
            <button className="btn" onClick={closeCandidateModal}>Cancel</button>
            <button className="btn primary">Confirm</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConfirmVote