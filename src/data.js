import Thumbnail1 from "./assets/voting-app-assets-main/flag1.jpg";
import Thumbnail2 from "./assets/voting-app-assets-main/flag2.jpg";
import Thumbnail3 from "./assets/voting-app-assets-main/flag3.png";
import Candidate1 from "./assets/voting-app-assets-main/candidate1.jpg";
import Candidate2 from "./assets/voting-app-assets-main/candidate2.jpg";
import Candidate3 from "./assets/voting-app-assets-main/candidate3.jpg";
import Candidate4 from "./assets/voting-app-assets-main/candidate4.jpg";
import Candidate5 from "./assets/voting-app-assets-main/candidate5.jpg";
import Candidate6 from "./assets/voting-app-assets-main/candidate6.jpg";
import Candidate7 from "./assets/voting-app-assets-main/candidate7.jpg";


export const elections = [
  {
    id: "e1",
    title: "Ogun State Gubernatorial Election 2024",
    desc: "This election is for the Governor of Ogun State in 2024. Voters will choose the candidate they believe can best lead the state.",
    thumbnail: Thumbnail1,
    candidates: [
      { name: "Tobi", photo: Candidate1 },
      { name: "Tosin", photo: Candidate2 },
      { name: "Tola", photo: Candidate3 },
    ],
    voters: [],
  },
  {
    id: "e2",
    title: "Lagos State Senatorial Election 2024",
    desc: "In this election, voters will select a senator to represent Lagos State. Candidates are seasoned politicians with different visions for the state.",
    thumbnail: Thumbnail2,
    candidates: [
      { name: "Lola", photo: Candidate4 },
      { name: "Tunde", photo: Candidate5 },
      { name: "Adebayo", photo: Candidate6 },
    ],
    voters: [],
  },
  {
    id: "e3",
    title: "Abuja Mayoral Election 2024",
    desc: "The Abuja Mayoral Election will determine who will lead the capital city for the next term. This election is crucial for the growth of the city.",
    thumbnail: Thumbnail3,
    candidates: [
      { name: "Aliyu", photo: Candidate7 },
      { name: "Fatimah", photo: Candidate3 },
      { name: "Musa", photo: Candidate1 },
    ],
    voters: [],
  },
//   {
//     id: "e4",
//     title: "Kaduna State Gubernatorial Election 2024",
//     desc: "This election is to choose the next governor of Kaduna State. Voters will decide on a candidate who will address key issues like security and development.",
//     thumbnail: Thumbnail1,
//     candidates: [
//       { name: "Sarah", photo: Candidate2 },
//       { name: "Olu", photo: Candidate3 },
//       { name: "Yusuf", photo: Candidate4 },
//     ],
//     voters: [],
//   },
//   {
//     id: "e5",
//     title: "Kano State Senatorial Election 2024",
//     desc: "Kano will elect its representative for the Senate in this election. Candidates will present their plans to improve the state's infrastructure and economy.",
//     thumbnail: Thumbnail2,
//     candidates: [
//       { name: "Abubakar", photo: Candidate5 },
//       { name: "Ibrahim", photo: Candidate6 },
//       { name: "Bala", photo: Candidate7 },
//     ],
//     voters: [],
//   },
//   {
//     id: "e6",
//     title: "Rivers State Gubernatorial Election 2024",
//     desc: "The people of Rivers State will decide their next governor in this pivotal election, with promises of economic reforms and job creation.",
//     thumbnail: Thumbnail3,
//     candidates: [
//       { name: "Chika", photo: Candidate8 },
//       { name: "Eze", photo: Candidate1 },
//       { name: "Ngozi", photo: Candidate2 },
//     ],
//     voters: [],
//   },
//   {
//     id: "e7",
//     title: "Ekiti State Gubernatorial Election 2024",
//     desc: "Ekiti State will elect a new governor in 2024, with issues like healthcare and infrastructure development taking center stage in the campaigns.",
//     thumbnail: Thumbnail1,
//     candidates: [
//       { name: "Kemi", photo: Candidate3 },
//       { name: "Taiwo", photo: Candidate4 },
//       { name: "Olawale", photo: Candidate5 },
//     ],
//     voters: [],
//   },
];


export const candidates = [
  {
    id: "c1",
    fullName: "Adejare Olubayo",
    image: Candidate1,
    motto: "For a better future",
    voteCount: 23,
    election: "e1",
  },
  {
    id: "c2",
    fullName: "Tobi Ayodele",
    image: Candidate2,
    motto: "Together we can do more",
    voteCount: 45,
    election: "e1",
  },
  {
    id: "c3",
    fullName: "Tosin Fashola",
    image: Candidate3,
    motto: "Progress and prosperity",
    voteCount: 37,
    election: "e1",
  },
  {
    id: "c4",
    fullName: "Lola Adebayo",
    image: Candidate4,
    motto: "Empowering the people",
    voteCount: 30,
    election: "e2",
  },
  {
    id: "c5",
    fullName: "Tunde Olumide",
    image: Candidate5,
    motto: "Leadership with integrity",
    voteCount: 52,
    election: "e2",
  },
  {
    id: "c6",
    fullName: "Adebayo Okafor",
    image: Candidate6,
    motto: "A brighter future for Lagos",
    voteCount: 28,
    election: "e2",
  },
  {
    id: "c7",
    fullName: "Fatimah Ibrahim",
    image: Candidate7,
    motto: "New leadership, new hope",
    voteCount: 60,
    election: "e3",
  },
];


export const voters = [
    {
        id: "v1",
        fullName: "Talodabi Olubwa",
        email: "talodabi@example.com",
        password: "12345",
        isAdmin: true,
        votedElections: ["e2"],
    },
    {
        id: "v2",
        fullName: "Chike Okoro",
        email: "chike@example.com",
        password: "password123",
        isAdmin: false,
        votedElections: ["e1", "e3"],
    },
    {
        id: "v3",
        fullName: "Grace Adebisi",
        email: "grace.adebisi@example.com",
        password: "gracepass",
        isAdmin: false,
        votedElections: ["e2"],
    },
    {
        id: "v4",
        fullName: "Olumide Bakare",
        email: "olumide.bakare@example.com",
        password: "pass123",
        isAdmin: false,
        votedElections: ["e1", "e2"],
    },
    {
        id: "v5",
        fullName: "Funmi Alabi",
        email: "funmi@example.com",
        password: "funmi1234",
        isAdmin: false,
        votedElections: ["e3"],
    },
    {
        id: "v6",
        fullName: "Durojaiye Ayodele",
        email: "durojaiye.ayodele@example.com",
        password: "durojaiye2024",
        isAdmin: false,
        votedElections: ["e1", "e3"],
    },
    {
        id: "v7",
        fullName: "Chinonso Eze",
        email: "chinonso.eze@example.com",
        password: "chinonso2024",
        isAdmin: false,
        votedElections: ["e2", "e3"],
    }
];
