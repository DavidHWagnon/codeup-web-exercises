fetch("https://cloudy-enthusiastic-tarantula.glitch.me/books")
    .then(resp => resp.json())
    .then(data => console.log(data))