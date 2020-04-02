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
    console.log(result)
    expect(result.subtotal).toEqual(11)
});

test('Missing paramter Input', () => {
    // shows the corresponding drugs to pathway
    var result = table({"pathway":"ALK",percent_tumor:1});
    console.log(result)
    expect(result.error).toEqual("Invalid Input.")
});
