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

  var alisertib = {
      "tumor_in_vitro":2,
      "tumor_in_vivo":2,
      "phase_one":2,
      "cns_data_response":2,
      "brain_penetration":2,
      "fda_approve":0,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  alisertib.clonality = gi1
  alisertib.varient_tier = gi2
  alisertib.clinical_trial = gi3

  var score = (alisertib.tumor_in_vitro*weights.two) +
              (alisertib.tumor_in_vivo*weights.three) +
              (alisertib.phase_one*weights.three) +
              (alisertib.cns_data_response*weights.five) +
              (alisertib.brain_penetration*weights.five) +
              (alisertib.fda_approve*weights.ten) +
              (alisertib.clonality*weights.five) +
              (alisertib.varient_tier*weights.three) +
              (alisertib.clinical_trial*weights.twenty)


  return score

}
