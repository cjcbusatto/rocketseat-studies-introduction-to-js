// 1. Write a function that, based on the following object
const address = {
  street: 'Rua dos Pinheiros',
  number: 534,
  neighborhood: 'Centro',
  city: 'São Paulo',
  zip: '05422-000',
}
// returns the following string:
//
const expectedMessage =
  'The user lives in São Paulo (ZIP 05422-000), Centro. Street "Rua dos Pinheiros 534".'

// Solution
function formatMessage({street, number, neighborhood, city, zip}) {
  return `The user lives in ${city} (ZIP ${zip}), ${neighborhood}. Street "${street} ${number}".`
}

const message = formatMessage(address)

// Evaluation
if (expectedMessage === message) {
  console.log('Your challenge solution is correct!')
}
