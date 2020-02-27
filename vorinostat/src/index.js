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

  var vorinostat = {
      "tumor_in_vitro":1,
      "tumor_in_vivo":2,
      "phase_one":2,
      // data_response is -2 in the excel file - mistake?
      "cns_data_response":2,
      "brain_penetration":2,
      "fda_approve":1,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  vorinostat.clonality = gi1
  vorinostat.varient_tier = gi2
  vorinostat.clinical_trial = gi3

  var score = (vorinostat.tumor_in_vitro*weights.two) +
              (vorinostat.tumor_in_vivo*weights.three) +
              (vorinostat.phase_one*weights.three) +
              (vorinostat.cns_data_response*weights.five) +
              (vorinostat.brain_penetration*weights.five) +
              (vorinostat.fda_approve*weights.ten) +
              (vorinostat.clonality*weights.five) +
              (vorinostat.varient_tier*weights.three) +
              (vorinostat.clinical_trial*weights.twenty)


  return score

}
