const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function pointsPossible(agArray, assignment_id) {
   for (let j = 0; j < agArray.length; j++) {
   if (agArray[j].id == assignment_id){
        console.log("points_possible: "+agArray[j].points_possible);
        console.log("Inside the Function");
        return agArray[j].points_possible
        break;
      }
   }
}


function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

function getLearnerData(course, ag, submissions){
  
  const result = []

  const ids = []

  for (let sub of submissions){
    if(ids.includes(sub.learner_id) !== true) {
  ids.push(sub.learner_id)
    }
  }
  console.log(ids);
}

  // const result = []

  const ids = []

// Create learner objects
for (let learnerId of ids){
  console.log("Learner id: "+learnerId)
  
  //for(every value in Submissions){
  //does the learner id match?
  //yes: add to the object
  //no: skip it
  //}


  //variable to share totals
  let score = 0
  let totalPossible = 0

  for(let i = 0; i < submissions.length; i++){
    if (learnerId === submissions[i].learner_id){
      console.log("submission score: "+submissions[i].submission.score)
      score += submissions[i].submission.score
      totalPossible += pointsPossible(ag.assignments, submissions[i].assignment_id)
  }
} 
console.log("Total score: "+score);
console.log("total possible: " + totalPossible);
let avg = score /  totalPossible
console.log(avg)


  let learnerReport = {
    id: learnerId
  }
  console.log(learnerReport)
  result.push(learnerReport);
  }

  // Trying to loop through all the assignment due dates into an array 
  function getDueDate(agArray, assignment_id) {
  for (let j = 0; j < agArray.length; j++) {
    if (agArray[j].id == assignment_id) {
      return agArray[j].due_at;
    }
  }
}
console.log(getDueDate)


// Trying to remove the assignment thats due in 3156

for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
  if (new Date(AssignmentGroup.assignments[i].due_at) > new Date()) {
    AssignmentGroup.assignments.splice(i, 1);
  }
  console.log(AssignmentGroup.assignments)
}