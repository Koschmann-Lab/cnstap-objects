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

  var selumetinib = {
      "tumor_in_vitro":2,
      "tumor_in_vivo":0,
      "phase_one":0,
      "cns_data_response":0,
      "brain_penetration":2,
      "fda_approve":0,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  selumetinib.clonality = gi1
  selumetinib.varient_tier = gi2
  selumetinib.clinical_trial = gi3

  var score = (selumetinib.tumor_in_vitro*weights.two) +
              (selumetinib.tumor_in_vivo*weights.three) +
              (selumetinib.phase_one*weights.three) +
              (selumetinib.cns_data_response*weights.five) +
              (selumetinib.brain_penetration*weights.five) +
              (selumetinib.fda_approve*weights.ten) +
              (selumetinib.clonality*weights.five) +
              (selumetinib.varient_tier*weights.three) +
              (selumetinib.clinical_trial*weights.twenty)


  return score

}
