module.exports = (name) => {
  return (
    name.length > 0 &&
    (/[^\w]/g).test(name)
  )
}
