
import { createSlice } from "@reduxjs/toolkit";

const initialState = {addCandidateModalShowing: false, voteCandidateModalShowing: false, electionModalShowing: false, updateElectionModalShowing: false}




const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    openAddCandidateModal(state) {
      state.addCandidateModalShowing = true;
    },

    closeAddCandidateModal(state) {
      state.addCandidateModalShowing = true;
    },

    openVoteCandidateModal(state) {
      state.voteCandidateModalShowing = true;
    },


    closeVoteCandidateModal(state) {
      state.voteCandidateModalShowing = true;
      },
    
        openElectionModal(state) {
      state.electionModalShowing = true;
    },


    closeElectionModal(state) {
      state.electionModalShowing = true;
      },
    
        
        openUpdateElectionModal(state) {
      state.updateElectionModalShowing = true;
    },

    closeUpdateElectionModal(state) {
      state.updateElectionModalShowing = true;
    },
  },
  
});

export const UiActions = uiSlice.actions;
export default uiSlice;

// export const {
//   openAddCandidateModal,
//   closeAddCandidateModal,
//   openVoteCandidateModal,
//   closeVoteCandidateModal,
//   openElectionModal,
//   closeElectionModal,
//   openUpdateElectionModal,
//   closeUpdateElectionModal,
// } = uiSlice.actions;

// export default uiSlice.reducer;