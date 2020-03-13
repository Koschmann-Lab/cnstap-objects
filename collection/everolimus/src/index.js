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

  var everolimus = {
      "tumor_in_vitro":1,
      "tumor_in_vivo":0,
      "phase_one":2,
      "cns_data_response":2,
      "brain_penetration":1,
      "fda_approve":1,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  everolimus.clonality = gi1
  everolimus.varient_tier = gi2
  everolimus.clinical_trial = gi3

  var score = (everolimus.tumor_in_vitro*weights.two) +
              (everolimus.tumor_in_vivo*weights.three) +
              (everolimus.phase_one*weights.three) +
              (everolimus.cns_data_response*weights.five) +
              (everolimus.brain_penetration*weights.five) +
              (everolimus.fda_approve*weights.ten) +
              (everolimus.clonality*weights.five) +
              (everolimus.varient_tier*weights.three) +
              (everolimus.clinical_trial*weights.twenty)


  return score
}
