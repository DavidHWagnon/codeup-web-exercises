let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

const getBooks = () => {
    fetch("https://cloudy-enthusiastic-tarantula.glitch.me/books")
        .then(resp => resp.json())
        .then(books => {
            console.log(books);
            let htmlStr = "";
            for (let book of books) {
                htmlStr += `<h1>${book.title}</h1>
                            <p>by: ${book.author.firstName} ${book.author.lastName}</p>`;
            }
            $("#container").html(htmlStr);
        });
}

getBooks();

fetch("https://cloudy-enthusiastic-tarantula.glitch.me/books/1")
    .then(resp => resp.json())
    .then(book => console.log(book));

// POST
let newBook = {
    "title": "Percy Jers & The Lightning Thief",
    "author": {
        "firstName": "Tick",
        "lastName": "Tiordan"
    }
};

let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook)
}

$("#addPercy").click(() => {
    fetch("https://cloudy-enthusiastic-tarantula.glitch.me/books")
        .then(resp => resp.json())
        .then(books => {
            for (let book of books) {
                if(book.title !== newBook.title || book.author.firstName !== newBook.author.firstName || book.author.lastName !== newBook.author.lastName) {
                    fetch("https://cloudy-enthusiastic-tarantula.glitch.me/books", postOptions)
                        .then(getBooks);
                } else {
                    alert("Hey, that book already exists!");
                    break;
                }
            }
        })

});

// PUT

let putThis = {
    "title": "Percy Jackson & The Sea of Monsters",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
}

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(putThis)
}

fetch("https://cloudy-enthusiastic-tarantula.me/books/", putOptions).then(getBooks);

// PATCH

let patchThis = {
    "title": "Percy Jackson & The Titan's Curse",
    "author": {
        "firstName": "Trick",
        "lastName": "Triordan"
    }
}

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis)
}

fetch("https://cloudy-enthusiastic-tarantula.glitch.me/books/7", patchOptions).then(getBooks);


// DELETE

let deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    }
};

$("#id-to-delete").click((e) => {
    e.preventDefault();
    let inputVal = $("#id-to-delete").val();
    fetch(`https://cloudy-enthusiastic-tarantula.glitch.me/books/${inputVal}`, deleteOptions)
        .then(getBooks);
})

