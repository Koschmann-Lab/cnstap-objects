var rewire = require('rewire');

//Get load in the js
var javascript = rewire("../collection/intrinsicDrugTable/src/index");
var table = javascript.__get__("intrinsicDrugTable");

var input = {}

test('Normal Input', () => {

  var result = table(input);
  console.log(JSON.stringify(result, undefined, 2));

});
