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

  var tamoxifen = {
      "tumor_in_vitro":1,
      "tumor_in_vivo":0,
      "phase_one":0,
      "cns_data_response":0,
      "brain_penetration":2,
      "fda_approve":1,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  tamoxifen.clonality = gi1
  tamoxifen.varient_tier = gi2
  tamoxifen.clinical_trial = gi3

  var score = (tamoxifen.tumor_in_vitro*weights.two) +
              (tamoxifen.tumor_in_vivo*weights.three) +
              (tamoxifen.phase_one*weights.three) +
              (tamoxifen.cns_data_response*weights.five) +
              (tamoxifen.brain_penetration*weights.five) +
              (tamoxifen.fda_approve*weights.ten) +
              (tamoxifen.clonality*weights.five) +
              (tamoxifen.varient_tier*weights.three) +
              (tamoxifen.clinical_trial*weights.twenty)


  return score

}
