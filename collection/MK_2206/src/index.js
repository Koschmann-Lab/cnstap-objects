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

  var MK_2206 = {
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

  MK_2206.clonality = gi1
  MK_2206.varient_tier = gi2
  MK_2206.clinical_trial = gi3

  var score = (MK_2206.tumor_in_vitro*weights.two) +
              (MK_2206.tumor_in_vivo*weights.three) +
              (MK_2206.phase_one*weights.three) +
              (MK_2206.cns_data_response*weights.five) +
              (MK_2206.brain_penetration*weights.five) +
              (MK_2206.fda_approve*weights.ten) +
              (MK_2206.clonality*weights.five) +
              (MK_2206.varient_tier*weights.three) +
              (MK_2206.clinical_trial*weights.twenty)


  return score
  // return drugs["MK_2206"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}
