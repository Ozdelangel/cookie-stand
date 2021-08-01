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
//         } 
//         console.log(this.avgCookiesSoldEachHourArray);
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

function City(name, min, max, avg){
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.avgCookiesSoldEachHourArray = [];
    this.listId = `${this.name}`;

    this.dailyTotal = 0;
    this.getRandomCustomer = function(){
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    this.avgCookiesSoldEachHour = function(){
        for(let i = 0; i < storeHours.length; i++){
          let num = this.avg * this.getRandomCustomer();
          this.avgCookiesSoldEachHourArray.push(`${num} cookies sold ${storeHours[i]}`);  
        } 
        console.log(this.avgCookiesSoldEachHourArray);
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
        // console.log(this.renderList);
    }
}

let seattle = new City('seattle',
'23',
'65',
'6',


)
seattle.avgCookiesSoldEachHour();
seattle.render();

let tokyo = new City(
    'Tokyo', '3', '24','2',
)
tokyo.avgCookiesSoldEachHour();
tokyo.render();

let dubai = new City(
    'Dubai','11','38','3',
)
dubai.avgCookiesSoldEachHour();
dubai.render();

let paris = new City(
    'Paris','20','38','2',
)
paris.avgCookiesSoldEachHour();
paris.render();


let lima = new City(
    'lima','2','16','5',
)
lima.avgCookiesSoldEachHour();
lima.render();



// print(seattle.avgCookiesSoldEachHourArray)
// const profileContainer = document.getElementById('TokyoSales');
// let Tokyo = {
//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg: 2,
//     avgCookiesSoldEachHourArray: [],
//     dailyTotal: 0,
//     getRandomCustomer: function(){
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//     avgCookiesSoldEachHour: function(){
//         for(let i = 0; i < storeHours.length; i++){
//           let num = this.avg * this.getRandomCustomer();
//           this.avgCookiesSoldEachHourArray.push(`${num} cookies sold ${storeHours[i]}`);  
//         } 
//         console.log(this.avgCookiesSoldEachHourArray);
//     },
//     render:function(){
//         this.avgCookiesSoldEachHour();
//         let article = document.createElement('article');
//     profileContainer.appendChild(article);
//     let h3 = document.createElement('h3');
//     h3.textContent = 'Tokyo';
//     article.appendChild(h3);
//     let ul = document.createElement('ul');
//     ul.id = 'tokyoCookies';
//     article.appendChild(ul);
//         for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++){
//             let li = document.createElement('li');
//             li.textContent = this.avgCookiesSoldEachHourArray[i];
//             ul.appendChild(li);
//         }

//     }
    
    

// }
// Tokyo.render();

// let Dubai = {
//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3,
//     avgCookiesSoldEachHourArray: [],
//     dailyTotal: 0,
//     getRandomCustomer: function(){
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//     avgCookiesSoldEachHour: function(){
//         for(let i = 0; i < storeHours.length; i++){
//           let num = this.avg * this.getRandomCustomer();
//           this.avgCookiesSoldEachHourArray.push(`${num} cookies sold ${storeHours[i]}`);  
//         } 
//         console.log(this.avgCookiesSoldEachHourArray);
//     },
//     render:function(){
//         this.avgCookiesSoldEachHour();
//         let article = document.createElement('article');
//     profileContainer.appendChild(article);
//     let h3 = document.createElement('h3');
//     h3.textContent = 'Dubai';
//     article.appendChild(h3);
//     let ul = document.createElement('ul');
//     ul.id = 'dubaiCookies';
//     article.appendChild(ul);
//         for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++){
//             let li = document.createElement('li');
//             li.textContent = this.avgCookiesSoldEachHourArray[i];
//             ul.appendChild(li);
//         }

//     }
    
    

// }
// Dubai.render();

// let Paris = {
//     name: 'Paris',
//     min: 20,
//     max: 38,
//     avg: 2,
//     avgCookiesSoldEachHourArray: [],
//     dailyTotal: 0,
//     getRandomCustomer: function(){
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//     avgCookiesSoldEachHour: function(){
//         for(let i = 0; i < storeHours.length; i++){
//           let num = this.avg * this.getRandomCustomer();
//           this.avgCookiesSoldEachHourArray.push(`${num} cookies sold ${storeHours[i]}`);  
//         } 
//         console.log(this.avgCookiesSoldEachHourArray);
//     },
//     render:function(){
//         this.avgCookiesSoldEachHour();
//         let article = document.createElement('article');
//     profileContainer.appendChild(article);
//     let h3 = document.createElement('h3');
//     h3.textContent = 'Paris';
//     article.appendChild(h3);
//     let ul = document.createElement('ul');
//     ul.id = 'parisCookies';
//     article.appendChild(ul);
//         for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++){
//             let li = document.createElement('li');
//             li.textContent = this.avgCookiesSoldEachHourArray[i];
//             ul.appendChild(li);
//         }

//     }
    
    

// }
// Paris.render();

// let Lima = {
//     name: 'Lima',
//     min: 2,
//     max: 16,
//     avg: 5,
//     avgCookiesSoldEachHourArray: [],
//     dailyTotal: 0,
//     getRandomCustomer: function(){
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//     avgCookiesSoldEachHour: function(){
//         for(let i = 0; i < storeHours.length; i++){
//           let num = this.avg * this.getRandomCustomer();
//           this.avgCookiesSoldEachHourArray.push(`${num} cookies sold ${storeHours[i]}`);  
//         } 
//         console.log(this.avgCookiesSoldEachHourArray);
//     },
//     render:function(){
//         this.avgCookiesSoldEachHour();
//         let article = document.createElement('article');
//     profileContainer.appendChild(article);
//     let h3 = document.createElement('h3');
//     h3.textContent = 'Lima';
//     article.appendChild(h3);
//     let ul = document.createElement('ul');
//     ul.id = 'limaCookies';
//     article.appendChild(ul);
//         for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++){
//             let li = document.createElement('li');
//             li.textContent = this.avgCookiesSoldEachHourArray[i];
//             ul.appendChild(li);
//         }

//     }
    
    

// }
// Lima.render();
