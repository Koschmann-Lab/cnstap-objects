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

  var trametinib = {
      "tumor_in_vitro":1,
      "tumor_in_vivo":1,
      "phase_one":1,
      "cns_data_response":1,
      "brain_penetration":2,
      "fda_approve":1,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  trametinib.clonality = gi1
  trametinib.varient_tier = gi2
  trametinib.clinical_trial = gi3

  var score = (trametinib.tumor_in_vitro*weights.two) +
              (trametinib.tumor_in_vivo*weights.three) +
              (trametinib.phase_one*weights.three) +
              (trametinib.cns_data_response*weights.five) +
              (trametinib.brain_penetration*weights.five) +
              (trametinib.fda_approve*weights.ten) +
              (trametinib.clonality*weights.five) +
              (trametinib.varient_tier*weights.three) +
              (trametinib.clinical_trial*weights.twenty)


  return score

}
