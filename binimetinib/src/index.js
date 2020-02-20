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

  var binimetinib = {
      "tumor_in_vitro":2,
      "tumor_in_vivo":0,
      "phase_one":0,
      "cns_data_response":1,
      "brain_penetration":0,
      "fda_approve":0,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  binimetinib.clonality = gi1
  binimetinib.varient_tier = gi2
  binimetinib.clinical_trial = gi3

  var score = (binimetinib.tumor_in_vitro*weights.two) +
              (binimetinib.tumor_in_vivo*weights.three) +
              (binimetinib.phase_one*weights.three) +
              (binimetinib.cns_data_response*weights.five) +
              (binimetinib.brain_penetration*weights.five) +
              (binimetinib.fda_approve*weights.ten) +
              (binimetinib.clonality*weights.five) +
              (binimetinib.varient_tier*weights.three) +
              (binimetinib.clinical_trial*weights.twenty)


  return score
}
