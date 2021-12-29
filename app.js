const inquirer = require('inquirer');
// const fs = require('fs');

// // link page-template to app.js
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);


// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw (err);

//     console.log('Portfolio Complete! Check out index.html to see the output!');
// });

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));

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