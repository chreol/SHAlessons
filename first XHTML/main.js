// create the xmlhttp request object
let xhr = new XMLHttpRequest();
// create a variable with the url (api endpoint)
let endpoint = 'http://api.nobelprize.org/v1/prize.json?year=1969&category=literature';
// open a request (with get and the url)
xhr.open('GET', endpoint, true);
// send the request
xhr.send();
// check for change in the request's status
xhr.addEventListener("readstatechange", putContentInHTML);

// when status = 4 => parse the result
// change the innerHTML of the output to display resultslet
function putContentInHTML(){
    // here check if state is 4
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log('ok');
        let response = JSON.parse(xhr.responseText);
        console.log(response.prizes[0].laureates[0].surname);
        document.getElementById('output').innerHTML = response.prizes[0].laureates[0].surname;
    }
}