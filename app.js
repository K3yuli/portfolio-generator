const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);











// notice the lack of parentheses around 'profileDataArr' parameter?
const printProfileData = profileDataArr => {
    // this...
    for (let i = 0; i < profileDataArr.length; i+=1) {
        console.log(profileDataArr[i]);
    }
    console.log('=================');

    // is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);