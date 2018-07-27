const fs = require('fs');
const uglifycss = require('uglifycss');

var uglified = uglifycss.processFiles(
    [ '*/src/styles.css'],
);


fs.writeFile(`dist/minified.css`, uglifiedCss, function(err){
    if(err){
        console.log(err);
    } else {
        console.log(`The file was saved!`);
    }
}); 

console.log(uglified);