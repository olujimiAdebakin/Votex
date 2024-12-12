import React from 'react'
import {UiActions} from "../Store/ui-slice"
import { useDispatch } from 'react-redux';
import { voteActions } from "../Store/vote-slice";
const Candidate = ({ image, id, fullName, motto }) => {

  const dispatch = useDispatch()

    // open confirm vote modal
  const openCandidateModal = () => {
    // console.log("Clicked Vote Wisely with ID:", id);
    dispatch(UiActions.openVoteCandidateModal());
    dispatch(voteActions.changeSelectedVoteCandidate(id));
  }

  return (
    <>
      <article className="candidate">
        <div className="candidate_image">
          <img src={image} alt={fullName} />
        </div>
        <h5>
          {fullName?.length > 30 ? fullName.substring(0, 30) + "..." : fullName}
        </h5>
        <small>
          {motto?.length > 30 ? motto.substring(0, 30) + "..." : motto}
        </small>
        <button className="btn primary" onClick={openCandidateModal}>
          Vote Wisely
        </button>
      </article>
    </>
  );
}

export default Candidate

