import React from "react";
import { Link } from "react-router-dom";
import { UiActions } from "../Store/ui-slice"; 
import { useDispatch } from "react-redux";

const Election = ({ id, title, desc, thumbnail }) => {

  const dispatch = useDispatch();

  // open update modal
const openModal = () => {
  dispatch(UiActions.openUpdateElectionModal());
};


  return (
    <>
      <article className="election">
        <div className="election_image">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="election_info">
          <Link to={`/elections/${id}`}>
            <h4>{title}</h4>
          </Link>
          <p>{desc?.length > 255 ? desc.substring(0, 255) + "..." : desc}</p>
          <div className="election_cta">
            <Link to={`/elections/${id}`} className="btn sm">
              Explore This Election
            </Link>
            <button className="btn sm primary" onClick={openModal}>
              Edit Election
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Election;
