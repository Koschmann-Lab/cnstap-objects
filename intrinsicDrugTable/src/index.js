function intrinsicDrugTable(inputs){
  // inputs = genonmic indicators

// pathway allows the requesting system to indicate a specific tumor target biochemical pathway of interest
  var pathway = inputs.pathway

  var IDT = [
  MK2206={
    "pathway":"AKT",
    "tumor_in_vitro":4,
    "tumor_in_vivo":6,
    "phase_one_safety_data":6,
    "cns_data_with_response":0,
    "brain_penetration":0,
    "fda_approval":0,
    "total_points":16,
  },
  Perifosine={
    "pathway":"AKT",
    "tumor_in_vitro":2,
    "tumor_in_vivo":0,
    "phase_one_safety_data":6,
    "cns_data_with_response":0,
    "brain_penetration":0,
    "fda_approval":0,
    "total_points":8,
  },
  Ceritinib={
    "pathway":"AKT",
    "tumor_in_vitro":2,
    "tumor_in_vivo":0,
    "phase_one_safety_data":6,
    "cns_data_with_response":0,
    "brain_penetration":10,
    "fda_approval":10,
    "total_points":28,
  }];

  return IDT
  // return table of information
}
