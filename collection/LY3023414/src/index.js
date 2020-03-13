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

  var LY3023414 = {
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

  LY3023414.clonality = gi1
  LY3023414.varient_tier = gi2
  LY3023414.clinical_trial = gi3

  var score = (LY3023414.tumor_in_vitro*weights.two) +
              (LY3023414.tumor_in_vivo*weights.three) +
              (LY3023414.phase_one*weights.three) +
              (LY3023414.cns_data_response*weights.five) +
              (LY3023414.brain_penetration*weights.five) +
              (LY3023414.fda_approve*weights.ten) +
              (LY3023414.clonality*weights.five) +
              (LY3023414.varient_tier*weights.three) +
              (LY3023414.clinical_trial*weights.twenty)


  return score
  // return drugs["LY3023414"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}
