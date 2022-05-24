var testFolder = 'data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
 console.log(filelist[0]);
 console.log(filelist[1]);
 console.log(filelist[2]);
})