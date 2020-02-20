function cnstap(inputs){
  // inputs = genonmic indicators

  // 0, 1, 2
  // 0, 1, 2
  // 0, 1
  var gi1 = inputs.name
  var gi2 = inputs.name_two
  var gi3 = inputs.name_three

  var weights = {
    "two":2,
    "three":3,
    "five":5,
    "ten":10,
    "twenty":20
  }

  var dasatinib = {
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

  dasatinib.clonality = gi1
  dasatinib.varient_tier = gi2
  dasatinib.clinical_trial = gi3

  var score = (dasatinib.tumor_in_vitro*weights.two) +
              (dasatinib.tumor_in_vivo*weights.three) +
              (dasatinib.phase_one*weights.three) +
              (dasatinib.cns_data_response*weights.five) +
              (dasatinib.brain_penetration*weights.five) +
              (dasatinib.fda_approve*weights.ten) +
              (dasatinib.clonality*weights.five) +
              (dasatinib.varient_tier*weights.three) +
              (dasatinib.clinical_trial*weights.twenty)


  return score
  // return drugs["dasatinib"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}
