module.exports = (birthday) => {
  return (
    birthday.split('')[2] === '/' &&
    birthday.split('')[5] === '/' &&
    !isNaN(birthday.slice(0,2)) &&
    !isNaN(birthday.slice(3,5)) &&
    !isNaN(birthday.slice(6,10)) &&
    birthday.length === 10
  )
}
