import React from 'react'
import { IoMdTrash } from 'react-icons/io'

const ElectionCandidate = ({fullName, image, motto, id}) => {
  return (
      <>
          <li className="electionCandidate">
              <div className="electionCandidate_image">
                  <img src={image} alt={fullName} />
              </div>
              <div>
                  <h5>{fullName}</h5>
                  <small>{motto?.length > 70 ? motto.substring(0, 70) + "..." : motto}</small>
                  <button className='electionCandidate_btn'><IoMdTrash/></button>
              </div>
      </li>
      </>
  )
}

export default ElectionCandidate