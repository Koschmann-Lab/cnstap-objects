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

  var Onc201 = {
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

  Onc201.clonality = gi1
  Onc201.varient_tier = gi2
  Onc201.clinical_trial = gi3

  var score = (Onc201.tumor_in_vitro*weights.two) +
              (Onc201.tumor_in_vivo*weights.three) +
              (Onc201.phase_one*weights.three) +
              (Onc201.cns_data_response*weights.five) +
              (Onc201.brain_penetration*weights.five) +
              (Onc201.fda_approve*weights.ten) +
              (Onc201.clonality*weights.five) +
              (Onc201.varient_tier*weights.three) +
              (Onc201.clinical_trial*weights.twenty)


  return score
  // return drugs["Onc201"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}
