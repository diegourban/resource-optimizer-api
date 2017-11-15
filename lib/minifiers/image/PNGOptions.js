exports.qualityFrom = function(quality) {
  if(quality === "low") {
    return "0-30";
  } else if (quality === "average") {
    return "30-70";
  } else if(quality === "high") {
    return "70-100";
  } else {
    return "65-80";
  }
}

exports.speedFrom = function(quality) {
  if(quality === "low") {
    return 1
  } else if (quality === "average") {
    return 5;
  } else if(quality === "high") {
    return 10;
  } else {
    return 3;
  }
}

exports.floydFrom = function(quality) {
  if(quality === "low") {
    return 0.1
  } else if(quality === "high") {
    return 1.0;
  } else {
    return 0.5;
  }
}
