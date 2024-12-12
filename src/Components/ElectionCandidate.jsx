import React from 'react'

const ElectionCandidate = ({fullName, image, motto, id}) => {
  return (
      <>
          <li className="election_candidate">
              <div className="electionCandidate_image">
                  <img src={image} alt={fullName} />
              </div>
              <div>
                  <h5>{fullName}</h5>
              </div>
      </li>
      </>
  )
}

export default ElectionCandidate