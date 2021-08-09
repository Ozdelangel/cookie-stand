'use strict'
let storeHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7am','8pm'
];


let storeArray = [];
function City(name, min, max, avg){
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.avgCookiesSoldEachHourArray = [];
    this.listId = `${this.name}`;
    this.dailyTotal = 0;
    storeArray.push(this);

    
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

       
    }
}

new City('seattle',
'23',
'65',
'6',


)

// seattle.render();

new City(
    'Tokyo', '3', '24','2',
)



new City(
    'Dubai','11','38','3',
)



 new City(
    'Paris','20','38','2',
)




 new City(
    'lima','2','16','5',
)




const cookieTable = document.querySelector('tbody');

City.prototype.renderTable = function(){
    this.avgCookiesSoldEachHour();
    console.log(this.avgCookiesSoldEachHourArray);
    let tableRow = document.createElement('tr');
    let tdName = document.createElement('td');
    tdName.textContent = this.name;
    tableRow.appendChild(tdName);
    cookieTable.appendChild(tableRow);
    for (let i = 0; i < storeHours.length; i++){
        let td = document.createElement('td');
        td.textContent = this.avgCookiesSoldEachHourArray[i];
        tableRow.appendChild(td);
    }
    let total = document.createElement('td');
    total.textContent = this.dailyTotal;
    tableRow.appendChild(total);
    cookieTable.appendChild(tableRow);
    

}

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
    let total = [];
let hourlyTotal = document.querySelector('tfoot');
function hourTotal(){
    let tr1 = document.createElement('tr');
    hourlyTotal.appendChild(tr1);
    let td2 = document.createElement('td');
    td2.textContent = 'total';
    tr1.appendChild(td2);
   
    for (let i = 0; i < storeHours.length; i++) {
        let td1 = document.createElement('td');
      let hourTotal = 0;
    console.log(hourTotal);
      for (let j = 0; j < storeArray.length; j++) {
          console.log(storeArray[j].avgCookiesSoldEachHourArray[i]);
    
        // console.log(`avgCookiesSoldEachHourArray[${j}][${i}]: `, avgCookiesSoldEachHourArray[j][i]);
       hourTotal += storeArray[j].avgCookiesSoldEachHourArray[i];
       
        td1.textContent = hourTotal;
        tr1.appendChild(td1);
       console.log(hourTotal);
      }
      total.push(hourTotal);
      console.log(hourTotal);
    }
    console.log(total);
}




function renderAllStore(){
    for(let i = 0; i < storeArray.length; i++){
        storeArray[i].renderTable();
    }
}
renderAllStore();
hourTotal();
generateHours();

