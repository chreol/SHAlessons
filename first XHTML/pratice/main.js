let xhr = new XMLHttpRequest();

// open it
xhr.open('GET', date.json, false);

// send it
xhr.send();

if (xhr.readyState !=4 || xhr.status != 200){
    throw new error('Go to the hell !! I\'m sleeping');
}
let user = JSON.parse(xhr.responseText);

console.log(user);

document.getElementById('output').innerHTML = "hello " + user.name + " " + user.lastname;