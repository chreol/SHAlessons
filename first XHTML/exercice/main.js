let xhr;
let searchButton = document.getElementById("mybutton");
let endpoint = 'http://api.nobelprize.org/v1/prize.json?';

searchButton.addEventListener("click", search);

function search(){
    console.log("ok");
    let category = document.getElementsByTagName('input')['category'].value;
    // console.log(category);
    let year = document.getElementsByTagName('input')['year'].value;
    // console.log(year);
    let request = `${endpoint}category=${category}&year=${year}`;
    console.log(request);

    xhr = new XMLHttpRequest();
    xhr.open('GET', request, true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
}

function processRequest(e){
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log("OK");
       response = JSON.parse(xhr.responseText);
    //    console.log(xhr.responseText);
       console.log(response);
    let print = document.getElementById('output');
    // print.innerHTML = response.prizes[0].category;
    print.innerHTML += `<h3>
           Year: ${response.prizes[0].year}<br>
           Category: ${response.prizes[0].category}<br>
           </h3>`;
           let laureates = response.prizes[0].laureates;
            console.log(laureates);

           for (let i = 0; i<laureates.length; i++){
               let name = laureates[i].firstname;
               let surname = laureates[i].surname;
               let motivation = laureates[i].motivation;
               print.innerHTML += `<h5>
                    Winner nobel Prizes:<br>
                    First Name: ${name}<br>
                    Last Name: ${surname}<br>
                    Motivation: ${motivation}<br>
                    </h5>`;
           }

    }else {
        console.log(xhr.status);
    }
}


// DONE
// function collectInputOfUser(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//         // import data of category and use the value
//         let category = document.getElementById("categoryID").value;
//         // importe value of year by id
//         let year = document.getElementById("yearId").value;
//         // check if our condition is verify state =4 and status = 200 console.log
//         console.log('ok');

//         // endpoint will be getresult now by adding #value yr n category
//         let getResult = endpoint + "year=" + year + "&category=" + category;

//         // get the result of collecting value
//         return getResult;
//         console.log(collectInputOfUser(getResult));

//         // now open a request 
//         xhr.open('GET', getResult, true);
//         //send it
//         xhr.send();
         
//         // parse the json to js and console it
//         let finalResult = JSON.parse(xhr.responseText);
//         console.log(finalResult);

//         // now get the final result first and last name 
//         console.log(finalResult.prizes[0].laureates[0].name + " " + finalResult.prizes[0].laureates[0].surname;);

//         // priint on our html by  innerHTML
//         document.getElementById('output').innerHTML = finalResult.prizes[0].laureates[0].name + " " + finalResult.prizes[0].laureates[0].surname;
//     }
// }



