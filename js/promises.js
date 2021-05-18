




// fetch('https://api.github.com/users/DavidHWagnon/events', {headers: {'Authorization': 'token ' + GITHUB_ACCESS_TOKEN}})
//     .then(response => console.log(response.json()));

const userLastCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token ' + GITHUB_ACCESS_TOKEN}})
        .then(resp => resp.json())
        .then(data => {
            // console.log(data);
            let lastPush;
            for(let event of data){
                if(event.type === "PushEvent"){
                    last = new Date(event.created_at);
                    break;
                }
            }
            console.log(last);
        });
}

userLastCommit("davidhwagnon");

const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`You'll see this after ${ms/1000} seconds`);
        }, ms);
    })
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

