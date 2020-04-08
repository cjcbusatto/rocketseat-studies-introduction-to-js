// Based on the object
const users = [
  {
    name: 'Diego',
    skills: ['Javascript', 'ReactJS', 'Redux'],
  },
  {
    name: 'Gabriel',
    skills: ['VueJS', 'Ruby on Rails', 'Elixir'],
  },
]
// Write a function that produce the following result:
// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

function printUsers(users) {
  for (const user of users) {
    console.log(
      `O ${user.name} possui as habilidades: ${user.skills.join(', ')}`,
    )
  }
}

printUsers(users);
