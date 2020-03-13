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

  var Ceritinib = {
      "tumor_in_vitro":2,
      "tumor_in_vivo":2,
      "phase_one":2,
      "cns_data_response":1,
      "brain_penetration":2,
      "fda_approve":1,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  Ceritinib.clonality = gi1
  Ceritinib.varient_tier = gi2
  Ceritinib.clinical_trial = gi3

  var score = (Ceritinib.tumor_in_vitro*weights.two) +
              (Ceritinib.tumor_in_vivo*weights.three) +
              (Ceritinib.phase_one*weights.three) +
              (Ceritinib.cns_data_response*weights.five) +
              (Ceritinib.brain_penetration*weights.five) +
              (Ceritinib.fda_approve*weights.ten) +
              (Ceritinib.clonality*weights.five) +
              (Ceritinib.varient_tier*weights.three) +
              (Ceritinib.clinical_trial*weights.twenty)


  return score
  // return drugs["Ceritinib"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}
