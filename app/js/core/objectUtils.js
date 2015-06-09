module.exports = Object.freeze({
  extend: extend,
  fromFirebaseCollectionToArray:fromFirebaseCollectionToArray
});


function extend(target, source, overwrite){
  if(typeof target !== "object" || typeof source !== "object"){
    throw new Error("target and source must be objects");
  }
  for(p in source){
    if(target[p] == null || overwrite){
      target[p] = source[p];
    } 
  }
}

function fromFirebaseCollectionToArray(data){
  var result = []; 
  data.forEach(function(v,k){
    v._code = k;
    result.push(v);
  });
  return result;
}