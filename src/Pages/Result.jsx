import React, { useState } from "react";
import { elections as dummyElections } from "../data";
import ResultElections from "../Components/ResultElections";

const Result = () => {
  const [elections, setElections] = useState(dummyElections);

  return (
    <>
      <section className="results">
        <div className="container results_container">
          {elections.map((election) => (
            <ResultElections key={election.id} {...election} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Result;
