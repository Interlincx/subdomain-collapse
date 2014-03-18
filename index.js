module.exports = function(pathname){
  if(typeof pathname !== "string") {
    throw new TypeError("pathname argument must be a string");
  } 

  var result = pathname.replace(/^www[0-9]?\./, '');

  return result;
}