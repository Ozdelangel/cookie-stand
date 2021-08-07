'use strict'
let storeHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7am','8pm'
];

// let seattle = {
//     name: 'seattle',
//     min: 23,
//     max: 65,
//     avg: 6,
//     listId: `${this.name}`,
//     avgCookiesSoldEachHourArray: [],
//     dailyTotal: 0,
//     getRandomCustomer: function(){
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//     avgCookiesSoldEachHour: function(){
//         for(let i = 0; i < storeHours.length; i++){
//           let num = this.avg * this.getRandomCustomer();
//           this.avgCookiesSoldEachHourArray.push(`${num} cookies sold ${storeHours[i]}`); 
//                 this.dailyTotal = this.dailyTotal + avgCookiesSoldEachHourArray;
//         } 
//         console.log(this.dailyTotal);
//     },
//     render: function(){
//         const profileContainer = document.getElementById('SeattleSales');
//         this.avgCookiesSoldEachHour();
//         let article = document.createElement('article');
//         console.log(this.name);
    
//         article.setAttribute(`${this.name}`,"ID");
//         profileContainer.appendChild(article);
//         let h3 = document.createElement('h3');
//         h3.textContent = this.name;
//         article.appendChild(h3);
//         let ul = document.createElement('ul');
//         ul.id = this.name;
//         article.appendChild(ul);
//             this.renderList();
//     },
//     renderList:function(){
//         let cookiesSold = document.getElementById(this.name); 
//         for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++){
//             let li = document.createElement('li');
//             li.textContent = this.avgCookiesSoldEachHourArray[i];
//             cookiesSold.appendChild(li);
//         }
//         console.log(this.renderList);
//     }
    
    

// }
// seattle.render();

// let rand = seattle.getRandomCustomer();
// console.log(seattle.getRandomCustomer())
// let cookiesPerhour = seattle.avgCookiesSoldEachHour();
// console.log(seattle.avgCookiesSoldEachHour())


// console.log(profileContainer);
let storeArray = [];
function City(name, min, max, avg){
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.avgCookiesSoldEachHourArray = [];
    this.listId = `${this.name}`;
    storeArray.push(this);

    this.dailyTotal = 0;
    this.getRandomCustomer = function(){
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    this.avgCookiesSoldEachHour = function(){
        for(let i = 0; i < storeHours.length; i++){
          let num = this.avg * this.getRandomCustomer();
          this.avgCookiesSoldEachHourArray.push(num); 
          this.dailyTotal += num;
        } 
        console.log(this.dailyTotal);
    };
    this.render = function(){
        const profileContainer = document.getElementById('Sales');
        this.avgCookiesSoldEachHour();
        let article = document.createElement('article');
        console.log(this.name);
    
        article.setAttribute(`${this.name}`,"ID");
        profileContainer.appendChild(article);
        let h3 = document.createElement('h3');
        h3.textContent = this.name;
        article.appendChild(h3);
        let ul = document.createElement('ul');
        ul.id = this.name;
        article.appendChild(ul);
            this.renderList();
    };
    this.renderList = function(){
        let cookiesSold = document.getElementById(this.name); 
        for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++){
            let li = document.createElement('li');
            li.textContent = this.avgCookiesSoldEachHourArray[i];
            cookiesSold.appendChild(li);
        }
        let totalLi = document.createElement("li");
        totalLi.textContent = `${this.dailyTotal}`;
        cookiesSold.appendChild(totalLi); 

        // console.log(this.renderList);
    }
}

let seattle = new City('seattle',
'23',
'65',
'6',


)

seattle.render();

let tokyo = new City(
    'Tokyo', '3', '24','2',
)

tokyo.render();

let dubai = new City(
    'Dubai','11','38','3',
)

dubai.render();

let paris = new City(
    'Paris','20','38','2',
)

paris.render();


let lima = new City(
    'lima','2','16','5',
)

lima.render();


const cookieTable = document.querySelector('tbody');

City.prototype.renderTable = function(){
    console.log(this.avgCookiesSoldEachHourArray);
    let tableRow = document.createElement('tr');
    cookieTable.appendChild(tableRow);
    
    let tdName = document.createElement('td');
    tdName.textContent = this.name;
    tableRow.appendChild(tdName);
    for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++){
        let td = document.createElement('td');
        td.textContent = this.avgCookiesSoldEachHourArray[i];
        tableRow.appendChild(td);
    }
    

}
// let hours = document.querySelector('thead');
// City.prototype.generateHours = function(){
//     let tr = document.createElement('tr');
//     hours.appendChild(tr);

    
   
//     for(let i =0; i < storeHours.length; i++){
//         let td = document.createElement('td');
//         td.textContent = this.storeHours[i];
//         tr.appendChild(td);
//     }

// };
// let total = [];
// for (let i = 0; i < numberArray[i].length; i++) {
//   let hourTotal = 0;
// console.log(hourTotal);
//   for (let j = 0; j < numberArray.length; j++) {

//     console.log(`numberArray[${j}][${i}]: `, numberArray[j][i]);
//    hourTotal += numberArray[j][i];
//   //  console.log(hourTotal);
//   }
//   total.push(hourTotal);
//   console.log(hourTotal);
// }
// console.log(total);
// seattle.generateHours();
let hours = document.querySelector('thead');
function generateHours(){
    let tr = document.createElement('tr');
    hours.appendChild(tr);

    
   
    for(let i =0; i < storeHours.length; i++){
        if (i === 0){
            let td = document.createElement('td');
        td.textContent = 'hours';
        tr.appendChild(td);
        }
        let td = document.createElement('td');
        td.textContent = storeHours[i];
        tr.appendChild(td);
    }

};
generateHours();
seattle.renderTable();
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();