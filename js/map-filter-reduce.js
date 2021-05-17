const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// returns an array containing users that know 3 or more languages
const threeLang = users.filter(n => n.languages.length >2);
console.log(threeLang);

//returns an array with all the users emails
const emails = users.filter(n => n.email);
console.log(emails);

// returns total years of experience among users
const total = users.reduce((total, currentNumber) => {
    return total + currentNumber.yearsOfExperience;
}, 0);
console.log("The total amount of experience among the users is " + total + "years");
const average = total / users.length;
console.log("The average amount of experience in years among the users is " + average + " years");

var longest = users.reduce(function (a, b) {
    return a.email.length > b.email.length ? a : b;
}).email;

console.log(longest);


const userNames = users.reduce((total, person, index, usersArray) => {
    if(index < usersArray.length-1){
        return total+ person.name + ", ";
    }else{
        return total+ person.name + ". ";
    }

}, "");

console.log("Your instructors are: "+ userNames);
