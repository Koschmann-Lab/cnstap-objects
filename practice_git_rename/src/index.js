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

  var Alectinib = {
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

  Alectinib.clonality = gi1
  Alectinib.varient_tier = gi2
  Alectinib.clinical_trial = gi3

  var score = (Alectinib.tumor_in_vitro*weights.two) +
              (Alectinib.tumor_in_vivo*weights.three) +
              (Alectinib.phase_one*weights.three) +
              (Alectinib.cns_data_response*weights.five) +
              (Alectinib.brain_penetration*weights.five) +
              (Alectinib.fda_approve*weights.ten) +
              (Alectinib.clonality*weights.five) +
              (Alectinib.varient_tier*weights.three) +
              (Alectinib.clinical_trial*weights.twenty)


  return score
  // return drugs["Alectinib"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}
