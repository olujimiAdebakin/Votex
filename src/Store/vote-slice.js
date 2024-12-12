import { createSlice } from "@reduxjs/toolkit";




const currentVoter = { id: "v1", token: "sffhrjrgr", isAdmin: true }
const initialState = {selectedVoteCandidate: "", currentVoter, selectedElection: "", idOfElectionToUpdate: "", addCandidateElectionId: ""}

const voteSlice = createSlice({
    name: "vote",
    initialState,
    reducers: {
         // Action to change the currently selected vote candidate
        changeSelectedVoteCandidate(state, action) {
            state.selectedVoteCandidate = action.payload;
        },

        // Action to change the currently selected election
        changeSelectedElection(state, action) {
            state.selectedElection = action.payload;
        },

         // Action to change the ID of the election to be updated
        changeIdOfCandidateElectionid(state, action) {
            state.addCandidateElectionId = action.payload;
        },

          // Action to change the ID of the election for which a candidate is being added
    changeAddCandidateElectionId(state, action) {
      state.addCandidateElectionId = action.payload;
        },
    
    }
})

export const voteActions = voteSlice.actions

export default voteSlice