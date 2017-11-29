require("dotenv").config();

require("../mongoose");

const userData = new (require("./UserData"))();

const assert = require("assert");

// list

userData
  .list()
  .then(assertList)
  .catch(assertList);

function assertList(res) {
  assert.ok(!(res instanceof Error), `should get results without error ${res}`);

  assert.ok(res, "results should not be empty");

  assert.ok(res.length > 0, "results should have values");

  console.log("userData.list OK");
}

// add quiz

userData
  .addQuiz("5a04c5ae1d195c4e88dbfcaa", "5a1e9c8ebf5dd9069fb29b31", [
    {
      _id: "5a1e9c8ebf5dd9069fb29b35",
      answer: "5a1e9c8ebf5dd9069fb29b36"
    },
    {
      _id: "5a1e9c8ebf5dd9069fb29b32",
      answer: "5a1e9c8ebf5dd9069fb29b33"
    }
  ])
  .then(assertAddQuiz)
  .catch(assertAddQuiz);

function assertAddQuiz(res) {
  assert.ok(!(res instanceof Error), `should get results without error ${res}`);

  assert.ok(res, "results should not be empty");

  assert.ok(res._id, "results should have _id");

  console.log("userData.addQuiz OK");
}
