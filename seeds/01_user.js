
const encrypt = require('../security/encrypt/encrypt.js')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 17;')
    .then(function () {
      // Inserts seed entries
      var users = [{
        id: 1,
        name: 'JJ',
        birthday: '08/25/1990',
        password: encrypt('cruzeiro')
      },{
        id: 2,
        name: 'Matthew Drumheller',
        birthday: '08/27/1984',
        password: encrypt('snorlax')
      },{
        id: 3,
        name: 'Jasmine Cervantes',
        birthday: '07/13/1989',
        password: encrypt('whiskey')
      },{
        id: 4,
        name: 'Recardo Poole',
        birthday: '12/09/1975',
        password: encrypt('celtics')
      },{
        id: 5,
        name: 'Mr January',
        birthday: '01/01/1990',
        password: encrypt('january')
      },{
        id: 6,
        name: 'Ms February',
        birthday: '02/02/1990',
        password: encrypt('february')
      },{
        id: 7,
        name: 'Mr March',
        birthday: '03/03/1990',
        password: encrypt('march')
      },{
        id: 8,
        name: 'Ms April',
        birthday: '04/04/1990',
        password: encrypt('april')
      },{
        id: 9,
        name: 'Mr May',
        birthday: '05/05/1990',
        password: encrypt('may')
      },{
        id: 10,
        name: 'Ms June',
        birthday: '06/06/1990',
        password: encrypt('june')
      },{
        id: 11,
        name: 'Mr July',
        birthday: '07/07/1990',
        password: encrypt('july')
      },{
        id: 12,
        name: 'Ms August',
        birthday: '08/08/1990',
        password: encrypt('august')
      },{
        id: 13,
        name: 'Mr September',
        birthday: '09/09/1990',
        password: encrypt('september')
      },{
        id: 14,
        name: 'Ms October',
        birthday: '10/10/1990',
        password: encrypt('october')
      },{
        id: 15,
        name: 'Mr November',
        birthday: '11/11/1990',
        password: encrypt('november')
      },{
        id: 16,
        name: 'Ms December',
        birthday: '12/12/1990',
        password: encrypt('december')
      }];

      return knex('user').insert(users);
    });
};
