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

  var tazemetostat = {
      "tumor_in_vitro":1,
      "tumor_in_vivo":0,
      "phase_one":1,
      "cns_data_response":0,
      "brain_penetration":1,
      "fda_approve":0,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  tazemetostat.clonality = gi1
  tazemetostat.varient_tier = gi2
  tazemetostat.clinical_trial = gi3

  var score = (tazemetostat.tumor_in_vitro*weights.two) +
              (tazemetostat.tumor_in_vivo*weights.three) +
              (tazemetostat.phase_one*weights.three) +
              (tazemetostat.cns_data_response*weights.five) +
              (tazemetostat.brain_penetration*weights.five) +
              (tazemetostat.fda_approve*weights.ten) +
              (tazemetostat.clonality*weights.five) +
              (tazemetostat.varient_tier*weights.three) +
              (tazemetostat.clinical_trial*weights.twenty)


  return score

}
