'use strict'
let storeHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7am','8pm'
];
const profileContainer = document.getElementById('SeattleSales');
let seattle = {
    name: 'seattle',
    min: 23,
    max: 65,
    avg: 6,
    avgCookiesSoldEachHourArray: [],
    dailyTotal: 0,
    getRandomCustomer: function(){
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    avgCookiesSoldEachHour: function(){
        for(let i = 0; i < storeHours.length; i++){
          let num = this.avg * this.getRandomCustomer();
          this.avgCookiesSoldEachHourArray.push(`${num} cookies sold ${storeHours[i]}`);  
        } 
        console.log(this.avgCookiesSoldEachHourArray);
    },
    render:function(){
        this.avgCookiesSoldEachHour();
        let article = document.createElement('article');
    profileContainer.appendChild(article);
    let h3 = document.createElement('h3');
    h3.textContent = 'Seattle';
    article.appendChild(h3);
    let ul = document.createElement('ul');
    ul.id = 'seattleCookies';
    article.appendChild(ul);
        for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++){
            let li = document.createElement('li');
            li.textContent = this.avgCookiesSoldEachHourArray[i];
            ul.appendChild(li);
        }

    }
    
    

}
seattle.render();

// let rand = seattle.getRandomCustomer();
// console.log(seattle.getRandomCustomer())
// let cookiesPerhour = seattle.avgCookiesSoldEachHour();
// console.log(seattle.avgCookiesSoldEachHour())


console.log(profileContainer);



// const profileContainer = document.getElementById('TokyoSales');
let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 2,
    avgCookiesSoldEachHourArray: [],
    dailyTotal: 0,
    getRandomCustomer: function(){
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    avgCookiesSoldEachHour: function(){
        for(let i = 0; i < storeHours.length; i++){
          let num = this.avg * this.getRandomCustomer();
          this.avgCookiesSoldEachHourArray.push(`${num} cookies sold ${storeHours[i]}`);  
        } 
        console.log(this.avgCookiesSoldEachHourArray);
    },
    render:function(){
        this.avgCookiesSoldEachHour();
        let article = document.createElement('article');
    profileContainer.appendChild(article);
    let h3 = document.createElement('h3');
    h3.textContent = 'Tokyo';
    article.appendChild(h3);
    let ul = document.createElement('ul');
    ul.id = 'tokyoCookies';
    article.appendChild(ul);
        for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++){
            let li = document.createElement('li');
            li.textContent = this.avgCookiesSoldEachHourArray[i];
            ul.appendChild(li);
        }

    }
    
    

}
Tokyo.render();

let Dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3,
    avgCookiesSoldEachHourArray: [],
    dailyTotal: 0,
    getRandomCustomer: function(){
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    avgCookiesSoldEachHour: function(){
        for(let i = 0; i < storeHours.length; i++){
          let num = this.avg * this.getRandomCustomer();
          this.avgCookiesSoldEachHourArray.push(`${num} cookies sold ${storeHours[i]}`);  
        } 
        console.log(this.avgCookiesSoldEachHourArray);
    },
    render:function(){
        this.avgCookiesSoldEachHour();
        let article = document.createElement('article');
    profileContainer.appendChild(article);
    let h3 = document.createElement('h3');
    h3.textContent = 'Dubai';
    article.appendChild(h3);
    let ul = document.createElement('ul');
    ul.id = 'dubaiCookies';
    article.appendChild(ul);
        for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++){
            let li = document.createElement('li');
            li.textContent = this.avgCookiesSoldEachHourArray[i];
            ul.appendChild(li);
        }

    }
    
    

}
Dubai.render();

let Paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2,
    avgCookiesSoldEachHourArray: [],
    dailyTotal: 0,
    getRandomCustomer: function(){
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    avgCookiesSoldEachHour: function(){
        for(let i = 0; i < storeHours.length; i++){
          let num = this.avg * this.getRandomCustomer();
          this.avgCookiesSoldEachHourArray.push(`${num} cookies sold ${storeHours[i]}`);  
        } 
        console.log(this.avgCookiesSoldEachHourArray);
    },
    render:function(){
        this.avgCookiesSoldEachHour();
        let article = document.createElement('article');
    profileContainer.appendChild(article);
    let h3 = document.createElement('h3');
    h3.textContent = 'Paris';
    article.appendChild(h3);
    let ul = document.createElement('ul');
    ul.id = 'parisCookies';
    article.appendChild(ul);
        for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++){
            let li = document.createElement('li');
            li.textContent = this.avgCookiesSoldEachHourArray[i];
            ul.appendChild(li);
        }

    }
    
    

}
Paris.render();

let Lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 5,
    avgCookiesSoldEachHourArray: [],
    dailyTotal: 0,
    getRandomCustomer: function(){
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    avgCookiesSoldEachHour: function(){
        for(let i = 0; i < storeHours.length; i++){
          let num = this.avg * this.getRandomCustomer();
          this.avgCookiesSoldEachHourArray.push(`${num} cookies sold ${storeHours[i]}`);  
        } 
        console.log(this.avgCookiesSoldEachHourArray);
    },
    render:function(){
        this.avgCookiesSoldEachHour();
        let article = document.createElement('article');
    profileContainer.appendChild(article);
    let h3 = document.createElement('h3');
    h3.textContent = 'Lima';
    article.appendChild(h3);
    let ul = document.createElement('ul');
    ul.id = 'limaCookies';
    article.appendChild(ul);
        for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++){
            let li = document.createElement('li');
            li.textContent = this.avgCookiesSoldEachHourArray[i];
            ul.appendChild(li);
        }

    }
    
    

}
Lima.render();
