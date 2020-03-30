var rewire = require('rewire');

//Get load in the js
//THIS VARIABLE NEEDS THE FILENAME AND PATH FOR THE KO OF INTEREST
var javascript = rewire("../collection/tumorPatientCalculator/src/index");

//THIS VARIABLE NEEDS A FUNCTION NAME FROM THE KO OF INTEREST
var table = javascript.__get__("cnstap");


// TEST 1 - Pathway "ALK"; clonality = 1; varient_tier = 2
var input = {"pathway":"ALK",percent_tumor:1,parsons_score:2}

test('Normal Input', () => {

    // shows the corresponding drugs to pathway
    var result = table(input);
    console.log(JSON.stringify(result, undefined, 2));

    for(var i in result){

      console.log(JSON.stringify(result[i], undefined, 2));

      // new total = previous total + clonality*weight + varient_tier*weight
      result[i].total_points = result[i].total_points + 1*5 + 2*3;

      var score = result[i].total_points;
      console.log(JSON.stringify(result[i].drug_name));
      console.log(JSON.stringify(result[i].total_points));

    }

});
