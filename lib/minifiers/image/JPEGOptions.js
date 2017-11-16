exports.qualityFrom = function(quality) {
  if(quality === "low") {
    return "30";
  } else if (quality === "average") {
    return "50";
  } else if(quality === "high") {
    return "100";
  } else {
    return "75";
  }
}
