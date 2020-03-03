function cnstap(inputs){
  // inputs = genonmic indicators

  // 0, 1, 2
  // 0, 1, 2
  // 0, 1
  var gi1 = inputs.percent_tumor
  var gi2 = inputs.parsons_score
  var gi3 = inputs.trial_considered

  var weights = {
    "two":2,
    "three":3,
    "five":5,
    "ten":10,
    "twenty":20
  }

  var Debio_1347 = {
      "tumor_in_vitro":2,
      "tumor_in_vivo":2,
      "phase_one":2,
      "cns_data_response":1,
      "brain_penetration":2,
      "fda_approve":1,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  Debio_1347.clonality = gi1
  Debio_1347.varient_tier = gi2
  Debio_1347.clinical_trial = gi3

  var score = (Debio_1347.tumor_in_vitro*weights.two) +
              (Debio_1347.tumor_in_vivo*weights.three) +
              (Debio_1347.phase_one*weights.three) +
              (Debio_1347.cns_data_response*weights.five) +
              (Debio_1347.brain_penetration*weights.five) +
              (Debio_1347.fda_approve*weights.ten) +
              (Debio_1347.clonality*weights.five) +
              (Debio_1347.varient_tier*weights.three) +
              (Debio_1347.clinical_trial*weights.twenty)


  return score
  // return drugs["Debio_1347"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}
