
const fs = require('fs');

// link page-template to app.js
const generatePage = require('./src/page-template.js');

// now we have our profileDataArgvs array, which holds the user command-line arguments
const profileDataArgs = process.argv.slice(2, process.argv.length);

// extract arguments and store them into distinct variables
const [name, github] = profileDataArgs;


fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error (err);

    console.log('Portfolio Complete! Check out index.html to see the output!');
});


// // notice the lack of parentheses around 'profileDataArr' parameter?
// const printProfileData = profileDataArr => {
//     // this...
//     for (let i = 0; i < profileDataArr.length; i+=1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('=================');

//     // is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);