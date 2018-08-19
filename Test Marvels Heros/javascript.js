let myTitle =  document.createElement('h1');

myTitle.textContent = 'Marvels heros';
myTitle.id = 'shaid';
myTitle.style.color= '#000';
myTitle.style.textAlign= 'center';
myTitle.style.backgroundColor = 'bleu';
myTitle.style.fontFamily = 'monospace';


document.body.appendChild(myTitle);

let mydiv = document.createElement('div');
mydiv.id = 'divid';
document.body.appendChild(mydiv);
mydiv.style.color = 'grey';

let myul = document.createElement('ul');
myul.id = 'ulid';
mydiv.appendChild(myul);


let myarray =  ['superman', 'iron man', 'thor', 'Hulk', 'X-Men', 'captain America', 'doctor strange', 'deadpool', 'daredevil', 'Guardians of the Galaxy'];
myarray.id = 'myarray.id';
for (i = 0; i < myarray.length; i++){
    let myli = document.createElement('li');
    myli.id = 'liid';

        myli.textContent = myarray[i];
        myul.appendChild(myli);
};


let myreact = document.createElement('button');
myreact.id = 'buttonid';
myreact.textContent = 'click';

mydiv.appendChild(myreact);

let myrealbutton = document.getElementById('buttonid');

myrealbutton.addEventListener('click', function(event) {
    mydiv.style.backgroundColor = 'lightgreen';
    console.log('It\'s working now!');
});

