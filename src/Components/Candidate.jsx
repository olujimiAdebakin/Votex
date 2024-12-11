import React from 'react'

const Candidate = ({image, id, fullName, motto}) => {
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
        <button className="btn primary">Vote Wisely</button>
      </article>
    </>
  );
}

export default Candidate