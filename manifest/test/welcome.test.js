const rewire = require("rewire")
const javascript = rewire("../src/index")

var welcome = javascript.__get__("welcome")

test("hello barney (src)", () =>
  {
    expect( welcome({"name": "Barney Rubble"}) )
      .toBe("Welcome to Knowledge Grid, Barney Rubble")
  })
