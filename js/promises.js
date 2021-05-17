


fetch('https://api.github.com/users/DavidHWagnon/events')
    .then(response => console.log(response))
    .catch(error => console.error(error));


fetch("https://api.github.com/users/DavidHWagnon/events", {headers: {'Authorization': 'token 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'}})
    .then(function (data){
        console.log(fetch(data.url));
    })
    .catch(error => console.error(error));

// function getCommitDate(username) {
//     return fetch('https://api.github.com/users',
//         .then(response => response.json(username))
// }
//
// getCommitDate("DavidHWagnon").then( users => {
//     users
// }).catch(error => console.error(error));'
