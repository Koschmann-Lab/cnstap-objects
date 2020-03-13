function intrinsicDrugTable(inputs){
  // inputs = genonmic indicators

// pathway allows the requesting system to indicate a specific tumor target biochemical pathway of interest
  var PW = inputs.pathway;

  var IDT = [
  MK2206 = {
    "drug_name":"MK2206",
    "pathway":"AKT",
    "tumor_in_vitro":4,
    "tumor_in_vivo":6,
    "phase_one_safety_data":6,
    "cns_data_with_response":0,
    "brain_penetration":0,
    "fda_approval":0,
    "total_points":16,
  },
  Perifosine = {
    "drug_name":"Perifosine",
    "pathway":"AKT",
    "tumor_in_vitro":2,
    "tumor_in_vivo":0,
    "phase_one_safety_data":6,
    "cns_data_with_response":0,
    "brain_penetration":0,
    "fda_approval":0,
    "total_points":8,
  },
  Ceritinib = {
    "drug_name":"Ceritinib",
    "pathway":"ALK",
    "tumor_in_vitro":2,
    "tumor_in_vivo":0,
    "phase_one_safety_data":6,
    "cns_data_with_response":0,
    "brain_penetration":10,
    "fda_approval":10,
    "total_points":28,
  }];

  var RESPONSE;

  if (PW === "") {RESPONSE = IDT;} else {RESPONSE = IDT.filter(object => {return object.pathway === PW})}

  return RESPONSE
  // return table of information
}
