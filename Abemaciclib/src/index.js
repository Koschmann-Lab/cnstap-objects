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

  var Abemaciclib = {
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

  Abemaciclib.clonality = gi1
  Abemaciclib.varient_tier = gi2
  Abemaciclib.clinical_trial = gi3

  var score = (Abemaciclib.tumor_in_vitro*weights.two) +
              (Abemaciclib.tumor_in_vivo*weights.three) +
              (Abemaciclib.phase_one*weights.three) +
              (Abemaciclib.cns_data_response*weights.five) +
              (Abemaciclib.brain_penetration*weights.five) +
              (Abemaciclib.fda_approve*weights.ten) +
              (Abemaciclib.clonality*weights.five) +
              (Abemaciclib.varient_tier*weights.three) +
              (Abemaciclib.clinical_trial*weights.twenty)


  return score
  // return drugs["Abemaciclib"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}
