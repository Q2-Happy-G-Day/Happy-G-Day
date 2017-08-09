function showProfiles(users){
  console.log(users);
  let birthdayDay = users.filter((e) => {
    return JSON.stringify(new Date(`${e.birthday.slice(0,6)}/${new Date().getFullYear()}`)) == JSON.stringify(new Date(`${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`))
  })

  if (birthdayDay.length < 1) {
    let birthdayTime = users.map((e)=>{
      var today = new Date();
      var bday = new Date(`${e.birthday.slice(0,6)}/${new Date().getFullYear()}`);
      var nextBday = new Date(`${e.birthday.slice(0,6)}/${new Date().getFullYear() + 1}`);
      if (bday - today < 0 ) {
        return nextBday - today;
      } else {
        return bday - today;
      }
    })
    let nextBirthday = users[0]
    for (var i = 0; i < birthdayTime.length; i++) {
      if (birthdayTime[0] > birthdayTime[i] && !birthdayDay.includes(users[i])) {
        nextBirthday = users[i]
      }
    }
    birthdayDay.push(nextBirthday)
  }

  birthdayDay.forEach((e) => {
    getComments(e, 'profiles')
  })

}
