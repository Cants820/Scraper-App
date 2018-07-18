var makeDate = function() {
  var d = new Date();

  var formattedDate = "";

  formattedDate += (d.getMonth() + 1) + "_";
  formattedDate += (d.getDate() + "_";
  formattedDate += d.getFullYear();
  console.log(formattedDate);
  return formattedDate;

}

module.exports = makeDate;