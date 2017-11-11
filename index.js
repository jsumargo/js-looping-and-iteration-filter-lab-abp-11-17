// Code your solution in this file
function findMatching(drivers, string) {
  console.log(drivers);
  console.log(string);
  drivers.filter(function(driver) {return driver == string;});
}
