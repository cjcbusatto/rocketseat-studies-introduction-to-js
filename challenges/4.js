// Write a function that return how experienced an user is based on the table:
// 0-1 year: Beginner
// 1-3 years: Intermediate
// 3-6 years: Advanced
// Above 6 years: Jedi Master
function getTitleByExperience(yearsOfExperience) {
  if (yearsOfExperience <= 1) return 'Beginner'
  if (yearsOfExperience <= 3) return 'Intermediate'
  if (yearsOfExperience <= 6) return 'Advanced'
  
  return 'Jedi Master'
}

const experienceTimeYears = 6.7
console.log(getTitleByExperience((experienceTimeYears)))
