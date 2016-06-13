var hours = ['6:00am ', '7:00am ', '8:00am ', '9:00am ', '10:00am ', '11:00am ', '12:00pm ', '1:00pm ', '2:00pm ', '3:00pm ', '4:00pm ', '5:00pm ', '6:00pm ', '7:00pm ', '8:00pm ', '9:00pm '];
var allstores = [];
var dailyBeanTotal = 0;
var hourlyBeanTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dailyBarTotal = 0;
var hourlyBarTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function Store(kiosk, minCust, maxCust, cups, pounds) {
  this.kiosk = kiosk;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cups = cups;
  this.pounds = pounds;

  this.custHourly = [];
  this.cupsHourly = [];
  this.poundsHourly = [];
  this.poundsForHourCup = [];
  this.totalPoundsPerHour = [];

  this.totalCustHourly = 0;
  this.cupsTotal = 0;
  this.poundsTotal = 0;
  this.totalPkgPoundsDay = 0;
  this.totalPoundsDay = 0;

  this.employeesNeeded = [];
  this.employeesTotal = 0;

  allstores.push(this);
};

Store.prototype.hourly = function() {
  for (var i = 0; i < hours.length; i++) {
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;
    this.custHourly.push(customers); //hourly cust
    this.cupsHourly.push((customers * this.cups).toFixed(1)); //hourly cups
    this.poundsHourly.push(Math.ceil(customers * this.pounds)); //hourly pounds
    this.employeesNeeded.push(Math.ceil(this.custHourly[i] / 30));
    this.poundsForHourCup.push((this.cupsHourly[i] / 16).toFixed(1)); //pounds needed to make cups
    var total = parseFloat(this.poundsForHourCup[i]) + parseFloat(this.poundsHourly[i]); //amount of beans needed
    this.totalPoundsPerHour.push(total.toFixed(1));
  }
};

Store.prototype.daily = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalCustHourly += parseFloat(this.custHourly[i]);
    this.cupsTotal += parseFloat(this.cupsHourly[i]);
    this.totalPkgPoundsDay += parseFloat(this.poundsHourly[i]);
    this.totalPoundsDay += Math.ceil(this.poundsForHourCup[i]) * Math.ceil(this.poundsHourly[i]);
    this.employeesTotal += parseFloat(this.employeesNeeded[i]);
  }
};

Store.prototype.render = function() {
  this.hourly();
  this.daily();
};

var pikePlace = new Store('Pike Place Market', 14, 35, 1.2, 0.34);
var capitolHill = new Store('Capitol Hill', 12, 28, 3.2, 0.03);
var seaLibrary = new Store('Seattle Public Library', 9, 45, 2.6, 0.02);
var southLake = new Store('South Lake Union', 5, 18, 1.3, 0.04);
var seaTac = new Store('Sea-Tac Airport', 28, 44, 1.1, 0.41);


pikePlace.render();
capitolHill.render();
seaLibrary.render();
southLake.render();
seaTac.render();

//making tables
var table = document.getElementById('bothTables');
var beHead = document.createElement('h2');
var beTable = document.createElement('table');
beHead.textContent = 'Beans Needed By Location Each Day';
table.appendChild(beHead);
table.appendChild(beTable);

//Table head
var stores = document.createElement('tr');
var empty = document.createElement('th');
var totals = document.createElement('th');
totals.textContent = 'Daily Totals';
empty.textContent = '';
stores.appendChild(empty);
stores.appendChild(totals);

for (idx in hours) {
  var tdEl = document.createElement('th');
  tdEl.textContent = hours[idx];
  stores.appendChild(tdEl);
}

beTable.appendChild(stores);

//table data
for (var i = 0; i < allstores.length; i++) {
  var locations = document.createElement('tr');
  locations.textContent = allstores[i].kiosk;
  var totalPoundsDayTdEl = document.createElement('td');
  totalPoundsDayTdEl.textContent = allstores[i].totalPoundsDay;
  locations.appendChild(totalPoundsDayTdEl);
  for (j in hours) {
    var hourBeans = document.createElement('td');
    hourBeans.textContent = allstores[i].totalPoundsPerHour[j];
    locations.appendChild(hourBeans);
  }
  beTable.appendChild(locations);
};

//total row
var totalRow = document.createElement('tr');

var totalTotalTd = document.createElement('td');
totalTotalTd.textContent = 'Total';
totalRow.appendChild(totalTotalTd);

beTable.appendChild(totalRow);

for (var l = 0; l < allstores.length; l++) {
  dailyBeanTotal += allstores[l].totalPoundsDay;
  var dailyTotalBean = document.createElement('td');
  dailyTotalBean.textContent = dailyBeanTotal;
  for (var m = 0; m < hours.length; m++) {
    hourlyBeanTotal[m] += Math.round(allstores[l].totalPoundsPerHour[m]);
  };
};

totalRow.appendChild(dailyTotalBean);

for (a in hours) {
  var hourlyTotalBeanEl = document.createElement('td');
  hourlyTotalBeanEl.textContent = hourlyBeanTotal[a];
  totalRow.appendChild(hourlyTotalBeanEl);
};

//Barista
var baHead = document.createElement('h2');
var baTable = document.createElement('table');
baHead.textContent = 'Baristas Needed By Location Each Day';
table.appendChild(baHead);
table.appendChild(baTable);

var baStores = document.createElement('tr');
var baEmpty = document.createElement('th');
var baTotals = document.createElement('th');
baTotals.textContent = 'Daily Totals';
baEmpty.textContent = '';
baStores.appendChild(baEmpty);
baStores.appendChild(baTotals);

for (idx in hours) {
  var baTdEl = document.createElement('th');
  baTdEl.textContent = hours[idx];
  baStores.appendChild(baTdEl);
}

baTable.appendChild(baStores);

//table data
for (var n = 0; n < allstores.length; n++) {
  var baLocations = document.createElement('tr');
  baLocations.textContent = allstores[n].kiosk;
  var employeesTotalEl = document.createElement('td');
  employeesTotalEl.textContent = allstores[n].employeesTotal;
  baLocations.appendChild(employeesTotalEl);
  for (j in hours) {
    var empHour = document.createElement('td');
    empHour.textContent = allstores[n].employeesNeeded[j];
    baLocations.appendChild(empHour);
  }
  baTable.appendChild(baLocations);
};

//total row
var baTotalRow = document.createElement('tr');

var baTotalTotalTd = document.createElement('td');
baTotalTotalTd.textContent = 'Total';
baTotalRow.appendChild(baTotalTotalTd);

baTable.appendChild(baTotalRow);

for (var o = 0; o < allstores.length; o++) {
  dailyBarTotal += allstores[o].employeesTotal;
  var dailyBarEl = document.createElement('td');
  dailyBarEl.textContent = dailyBarTotal;
  for (var p = 0; p < hours.length; p++) {
    hourlyBarTotal[p] += allstores[o].employeesNeeded[p];
  };
};

baTotalRow.appendChild(dailyBarEl);

for (b in hours) {
  var baHourly = document.createElement('td');
  baHourly.textContent = hourlyBarTotal[b];
  baTotalRow.appendChild(baHourly);
};
