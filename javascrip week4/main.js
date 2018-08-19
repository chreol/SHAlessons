// let myTitle = document.createElement('h1');

// myTitle.textContent = 'Homework Javascript Week4';
// myTitle.id = 'titleId';
// myTitle.style.color = 'lightblue';
// myTitle.style.backgroundColor = 'black';
// myTitle.style.fontFamily = 'monospace';
// myTitle.style.fontSize = '42px';
// myTitle.style.textAlign = 'center';
// myTitle.style.borderRadius = '30px';
// document.body.appendChild(myTitle);

// let mydiv = document.createElement('div');
// mydiv.id = 'mydivid';
// document.body.appendChild(mydiv);
// mydiv.style.backgroundColor = 'red';
// mydiv.style.color = 'black';
// mydiv.style.borderRadius = '25px';

// let myul = document.createElement('ul');
// myul.id = 'myulid';
// mydiv.appendChild(myul);

// // let mybooklist = ['Le Bruit et la Fureur_William Faukner', 
// // 'A la recherche du temps perdu_Marcel Proust','Mohsin Hamid_Exit West', 'Autumn_Ali Smith', 'Naomi Alderman_The Power','Min Jin Lee_Pachinko','Jesmyn Ward_Sing Unburied Sing','The Evolution of Beauty_Richard O. Prum','Ron Chernow_Grant','Caroline Fraser_Prairie Fires'];

//   mybooklist.id = 'mybooklistid';
//   for (i = 0; i < mybooklist.length; i++){
//       let myli = document.createElement('li');
//       myli.id = 'myliid';

//       myli.textContent = mybooklist[i];
//       myul.appendChild(myli);
//   };

//   let myreact = document.createElement('button');
//   myreact.id = 'myreactid';
//   myreact.textContent = 'activated';

//   mydiv.appendChild(myreact);

//   let myrealbutton = document.getElementById('myreactid');

//   myrealbutton.addEventListener('click', function(event){
//     mydiv.style.backgroundColor = 'lightgreen';
//     console.log("it's showing up");
//   });


let myTitle = document.createElement('h1');

myTitle.textContent = 'Homework Javascript Week4';
myTitle.id = 'titleId';
myTitle.style.backgroundColor = 'lightgrey';
myTitle.style.fontFamily = 'monospace';
myTitle.style.fontSize = '42px';
myTitle.style.textAlign = 'center';
myTitle.style.borderRadius = '10px';


document.body.appendChild(myTitle);

let  mydiv = document.createElement('div');
mydiv.id = 'mydivId';
mydiv.style.backgroundColor = 'black';
mydiv.style.color = 'white';
mydiv.style.borderRadius = '10%';
mydiv.style.textAlign = 'left';
mydiv.style.paddingLeft = '40px'
document.body.appendChild(mydiv);


let myul = document.createElement('ul');
myul.id = 'ulid';
mydiv.appendChild(myul);

let mybooklist = [
     {
       ID: 1,
     Author: 'William Faukner',
     Title: 'Le Bruit et la Fureur',
     Langage: 'french',
     // Img: 'src=http://images.commeaucinema.com/news/208_132606.jpg'
    },
     {
       ID: 2,
     Author: 'Marcel Proust',
     Title: 'A la recherche du temps perdu',
     Language: ''
    },
   {
     ID: 3,
    Author: 'Mohsin Hamid',
    Title: 'Exit West',
    Language: 'English'
    },
   {
     ID: 4,
    Author: 'Ali Smith',
    Title: 'Autumn',
    Language: 'English'
    },
  {
    ID: 5,
    Author: 'Naomi Alderman',
    Title: 'The Power',
    Langage: 'English'
    },
  {
    ID: 6,
    Author: 'Min Jin Lee',
    Title: 'Pachinko',
    Langage: 'English'
    },
  {
    ID: 7,
    Author: 'Jesmyn Ward',
    Title: 'Sing, Unburied, Sing',
    Langage: 'English'
    },
   {
     ID: 8,
    Author: 'Richard O. Prum',
    Title: 'The Evolution of Beauty',
    Langage: 'English'  
  },
  {
    ID: 9,
    Author: 'Ron Chernow',
    Title: 'Grant',
    Langage: 'English'
    },
  {
    ID: 10,
    Author: 'Caroline Fraser',
    Title: 'Prairie Fires',
    Langage: 'English'
  }
  ];
console.log(mybooklist);  

  mybooklist.id = 'mybooklistid';
  for (i = 0; i < mybooklist.length; i++){
      let myli = document.createElement('li');
      myli.id = 'liid';

      myli.textContent = mybooklist[i].ID + ' ' + mybooklist[i].Title;
    console.log(mybooklist[i].Title);
      myul.appendChild(myli);
  };

  let myreact = document.createElement('button');
  myreact.id = 'myreactid';
  myreact.textContent = 'SIMULATE';
  
  mydiv.appendChild(myreact);

  let myrealbutton = document.getElementById('myreactid');

  myrealbutton.addEventListener('click', function(event){
    mydiv.style.backgroundColor = 'lightgreen';
    mydiv.style.color = 'black';
    mydiv.style.fontWeight = 'bold';
    myTitle.style.borderRadius = ('30px');
  myTitle.style.backgroundColor = ('red');
    console.log("it's showing up");
  });
