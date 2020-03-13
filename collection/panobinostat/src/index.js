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

  var panobinostat = {
      "tumor_in_vitro":1,
      "tumor_in_vivo":2,
      "phase_one":2,
      "cns_data_response":2,
      "brain_penetration":0,
      "fda_approve":1,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  panobinostat.clonality = gi1
  panobinostat.varient_tier = gi2
  panobinostat.clinical_trial = gi3

  var score = (panobinostat.tumor_in_vitro*weights.two) +
              (panobinostat.tumor_in_vivo*weights.three) +
              (panobinostat.phase_one*weights.three) +
              (panobinostat.cns_data_response*weights.five) +
              (panobinostat.brain_penetration*weights.five) +
              (panobinostat.fda_approve*weights.ten) +
              (panobinostat.clonality*weights.five) +
              (panobinostat.varient_tier*weights.three) +
              (panobinostat.clinical_trial*weights.twenty)


  return score

}
