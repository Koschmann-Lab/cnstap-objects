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

  var pazopanib_fgfr = {
      "tumor_in_vitro":2,
      "tumor_in_vivo":2,
      "phase_one":2,
      "cns_data_response":1,
      "brain_penetration":1,
      "fda_approve":1,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  pazopanib_fgfr.clonality = gi1
  pazopanib_fgfr.varient_tier = gi2
  pazopanib_fgfr.clinical_trial = gi3

  var score = (pazopanib_fgfr.tumor_in_vitro*weights.two) +
              (pazopanib_fgfr.tumor_in_vivo*weights.three) +
              (pazopanib_fgfr.phase_one*weights.three) +
              (pazopanib_fgfr.cns_data_response*weights.five) +
              (pazopanib_fgfr.brain_penetration*weights.five) +
              (pazopanib_fgfr.fda_approve*weights.ten) +
              (pazopanib_fgfr.clonality*weights.five) +
              (pazopanib_fgfr.varient_tier*weights.three) +
              (pazopanib_fgfr.clinical_trial*weights.twenty)


  return score

}
