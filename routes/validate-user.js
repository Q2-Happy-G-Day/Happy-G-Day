const validBirthday = require('../security/validation/valid-birthday.js');
const validName = require('../security/validation/valid-name.js');
const validPassword = require('../security/validation/valid-password');
  if (!validBirthday(req.query.birthday)) {
    res.json({
      success: false,
      message: 'your birthday is not valid.'
    })
  } else if (!validName(req.query.name)) {
    res.json({
      success: false,
      message: 'your name is not valid: only alphabetical characters and spaces allowed.'
    })
  } else if (!validPassword(req.query.password)) {
    res.json({
      succes: false,
      message: 'your password is not valid. Passwords must be 8 characters in length and contain at least one uppercase character, lowercase character, and a number'
    })
  } else {

    res.json({
      success: true;
      message: 'You have successfuly signed up!'
    })
  }
}
