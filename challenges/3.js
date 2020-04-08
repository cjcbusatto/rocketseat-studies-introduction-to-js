// Write a function that verify if an array of skills includes 'Javascript'
// For this exercise you do not need to consider different ways to write 
// Javascript, like javascript, js, etc
function hasJavascriptSkill(skills) {
  return skills.includes('Javascript')
}

const skills = ['Javascript', 'ReactJS', 'React Native']
console.log(hasJavascriptSkill(skills))
