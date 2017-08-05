module.exports = (name) => {
  return (
    typeof name === 'string' &&
    !(/[^A-Za-z ]/g).test(name)
  )
}
