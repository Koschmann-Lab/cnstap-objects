function cnstap(inputs){
  // inputs = pathway, genonmic indicators
  var pathway = inputs.pathway
  var gi1 = inputs.percent_tumor
  var gi2 = inputs.parsons_score

  const weights={
    clonality:5,
    tierscore:3
  }
  var results = inputs
  if(gi1==null | gi2==null) {     // Missing input field
    results.error="Invalid Input."
  }else{
    results.subtotal=gi1*weights.clonality+gi2*weights.tierscore
  }
  return results

}
