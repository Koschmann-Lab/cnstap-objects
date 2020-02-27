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

  var Osimertinib_Mesylate = {
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

  Osimertinib_Mesylate.clonality = gi1
  Osimertinib_Mesylate.varient_tier = gi2
  Osimertinib_Mesylate.clinical_trial = gi3

  var score = (Osimertinib_Mesylate.tumor_in_vitro*weights.two) +
              (Osimertinib_Mesylate.tumor_in_vivo*weights.three) +
              (Osimertinib_Mesylate.phase_one*weights.three) +
              (Osimertinib_Mesylate.cns_data_response*weights.five) +
              (Osimertinib_Mesylate.brain_penetration*weights.five) +
              (Osimertinib_Mesylate.fda_approve*weights.ten) +
              (Osimertinib_Mesylate.clonality*weights.five) +
              (Osimertinib_Mesylate.varient_tier*weights.three) +
              (Osimertinib_Mesylate.clinical_trial*weights.twenty)


  return score
  // return drugs["Osimertinib_Mesylate"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}
