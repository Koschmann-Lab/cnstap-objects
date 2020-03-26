var rewire = require('rewire');

//Get load in the js
var javascript = rewire("../collection/intrinsicDrugTable/src/index");
var table = javascript.__get__("intrinsicDrugTable");

// TEST 1 - Full Drug Table
// var input = {"pathway":""}

// test('Normal Input', () => {
//
//   var result = table(input);
//   console.log(JSON.stringify(result, undefined, 2));
//
// });

// TEST 2 - Pathway "ALK"; clonality = 1; varient_tier = 2
var input = {"pathway":"ALK"}

test('Normal Input', () => {

    // shows the corresponding drugs to pathway
    var result = table(input);
    console.log(JSON.stringify(result, undefined, 2));

    for(var i in result){

      console.log(JSON.stringify(result[i], undefined, 2));

      // new total = previous total + clonality*weight + varient_tier*weight
      result[i].total_points = result[i].total_points + 1*5 + 2*3;

      var score = result[i].total_points;
      console.log(JSON.stringify(result[i].drug_name))
      console.log(JSON.stringify(result[i].total_points));

    }

});
