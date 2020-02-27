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

  var Perifosine = {
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

  Perifosine.clonality = gi1
  Perifosine.varient_tier = gi2
  Perifosine.clinical_trial = gi3

  var score = (Perifosine.tumor_in_vitro*weights.two) +
              (Perifosine.tumor_in_vivo*weights.three) +
              (Perifosine.phase_one*weights.three) +
              (Perifosine.cns_data_response*weights.five) +
              (Perifosine.brain_penetration*weights.five) +
              (Perifosine.fda_approve*weights.ten) +
              (Perifosine.clonality*weights.five) +
              (Perifosine.varient_tier*weights.three) +
              (Perifosine.clinical_trial*weights.twenty)


  return score
  // return drugs["Perifosine"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}
