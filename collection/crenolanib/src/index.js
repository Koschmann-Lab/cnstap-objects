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

  var crenolanib = {
      "tumor_in_vitro":1,
      "tumor_in_vivo":0,
      "phase_one":1,
      "cns_data_response":0,
      "brain_penetration":0,
      "fda_approve":0,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  crenolanib.clonality = gi1
  crenolanib.varient_tier = gi2
  crenolanib.clinical_trial = gi3

  var score = (crenolanib.tumor_in_vitro*weights.two) +
              (crenolanib.tumor_in_vivo*weights.three) +
              (crenolanib.phase_one*weights.three) +
              (crenolanib.cns_data_response*weights.five) +
              (crenolanib.brain_penetration*weights.five) +
              (crenolanib.fda_approve*weights.ten) +
              (crenolanib.clonality*weights.five) +
              (crenolanib.varient_tier*weights.three) +
              (crenolanib.clinical_trial*weights.twenty)


  return score
  // return drugs["dasatinib"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}
