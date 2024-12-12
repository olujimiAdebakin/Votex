import React from 'react'
import { Link } from 'react-router-dom';

const Congrats = () => {
  return (
    <>
      <section className="congrats">
        <div className="container congrats_container">
          <h2>Every Vote Counts – Thanks for Making Yours Count!</h2>
          <p>
            🎉 Your vote just made waves! Your candidate's tally is climbing,
            and democracy is dancing. 🗳️
          </p>
          <Link to="/results" className='btn sm primary'>View the People's Choice</Link>
        </div>
      </section>
    </>
  );
}

export default Congrats