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

  var cobimetinib = {
      "tumor_in_vitro":2,
      "tumor_in_vivo":0,
      "phase_one":0,
      "cns_data_response":0,
      "brain_penetration":1,
      "fda_approve":1,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  cobimetinib.clonality = gi1
  cobimetinib.varient_tier = gi2
  cobimetinib.clinical_trial = gi3

  var score = (cobimetinib.tumor_in_vitro*weights.two) +
              (cobimetinib.tumor_in_vivo*weights.three) +
              (cobimetinib.phase_one*weights.three) +
              (cobimetinib.cns_data_response*weights.five) +
              (cobimetinib.brain_penetration*weights.five) +
              (cobimetinib.fda_approve*weights.ten) +
              (cobimetinib.clonality*weights.five) +
              (cobimetinib.varient_tier*weights.three) +
              (cobimetinib.clinical_trial*weights.twenty)


  return score
  // return drugs["dasatinib"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}
