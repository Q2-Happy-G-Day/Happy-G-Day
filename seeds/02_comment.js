
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "comment"; ALTER SEQUENCE comment_id_seq RESTART WITH 5;')
    .then(function () {
      // Inserts seed entries
      var comments = [{
        id: 1,
        comment: "Q: What's the easiest way to remeber your wife's birthday? A: Forget it once!",
        birthday_user_id: 4,
        comment_user_id: 1
      },{
        id: 2,
        comment: "Q: What does cat like to eat on his birthday? A: Mice cream and cake!",
        birthday_user_id: 3,
        comment_user_id: 2
      },{
        id: 3,
        comment: "Q: Where do you find a birthday present for a cat? A: In a cat-alogue",
        birthday_user_id: 2,
        comment_user_id: 3
      },{
        id: 4,
        comment: "Q: What is a meaning of a true friend? A: One who remembers your birthday but not your age!",
        birthday_user_id: 1,
        comment_user_id: 4
      }];
      return knex('comment').insert(comments);
    });
};
