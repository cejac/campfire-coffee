var hours = ['6:00am: ', '7:00am: ', '8:00am: ', '9:00am: ', '10:00am: ', '11:00am: ', '12:00pm:', '1:00pm: ', '2:00pm: ', '3:00pm: ', '4:00pm: ', '5:00pm: ', '6:00pm: ', '7:00pm: ', '8:00pm: ', '9:00pm: '];

var pikePlace = {
  location: 'Pike Place Market',
  minCust: 14,
  maxCust: 35,
  cups: 1.2,
  toGo: 0.34,

  custHourly: [],
  totalCustHourly: 0,

  cupsHourly: [],
  cupsTotal: 0,

  poundsHourly: [],
  poundsTotal: 0,

  employeesNeeded: [],
  employeesTotal: 0,

  poundsForHourCup: [],
  totalPoundsPerHour: [],
  totalPkgPoundsDay: 0,
  totalPoundsDay: 0,

  hourlyString: [],
  stringTotals: [],

  hourly: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;
      this.custHourly.push(customers); //hourly cust
      this.cupsHourly.push((customers * this.cups).toFixed(1)); //hourly cups
      this.poundsHourly.push(Math.ceil(customers * this.toGo)); //hourly pounds
      this.employeesNeeded.push(Math.ceil(this.custHourly[i] / 30));
      this.poundsForHourCup.push((this.cupsHourly[i] / 16).toFixed(1)); //pounds needed to make cups
      var total = parseFloat(this.poundsForHourCup[i]) + parseFloat(this.poundsHourly[i]); //amount of beans needed
      this.totalPoundsPerHour.push(total.toFixed(1));
    }
  },

  daily: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCustHourly += parseFloat(this.custHourly[i]);
      this.cupsTotal += parseFloat(this.cupsHourly[i]);
      this.totalPkgPoundsDay += parseFloat(this.poundsHourly[i]);
      this.totalPoundsDay += parseFloat(this.poundsForHourCup[i]) * parseFloat(this.poundsHourly[i]);
    }
  },

  makeHourlyString: function() {
    for (i = 0; i < hours.length; i++) {
      var stringOne = hours[i] + this.totalPoundsPerHour[i] + ' lbs [' + this.custHourly[i] + ' customers, ' + this.cupsHourly[i] + ' cups (' + this.poundsForHourCup[i] + ' lbs), ' + this.poundsHourly[i] + ' lbs to-go]';
      this.hourlyString.push(stringOne);
    }
  },

  makeDailyString: function() {
    var sOne = 'Total customers at ' + this.location + ': ' + this.totalCustHourly;
    var sTwo = 'Total cups sold at ' + this.location + ': ' + Math.ceil(this.cupsTotal);
    var sThree = 'Total to-go pound packages sold at ' + this.location + ': ' + Math.ceil(this.totalPkgPoundsDay);
    var sFour = 'Total pounds of beans needed at ' + this.location + ': ' + parseFloat(this.totalPoundsDay).toFixed(1);
    this.stringTotals.push(sOne, sTwo, sThree, sFour);
  },

  render: function() {
    this.hourly();
    this.daily();
    this.makeHourlyString();
    this.makeDailyString();

    var uEl = document.getElementById('stores');

    var title = document.createElement('h1');
    title.textContent = this.location;
    uEl.appendChild(title);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlyString[i];
      uEl.appendChild(liEl);
    }

    for (var j = 0; j < this.stringTotals.length; j++) {
      var lisEl = document.createElement('li');
      lisEl.textContent = this.stringTotals[j];
      uEl.appendChild(lisEl);
    }
  }
};


var capitolHill = {
  location: 'Capitol Hill',
  minCust: 12,
  maxCust: 28,
  cups: 3.2,
  toGo: 0.03,

  custHourly: [],
  totalCustHourly: 0,

  cupsHourly: [],
  cupsTotal: 0,

  poundsHourly: [],
  poundsTotal: 0,

  employeesNeeded: [],
  employeesTotal: 0,

  poundsForHourCup: [],
  totalPoundsPerHour: [],
  totalPkgPoundsDay: 0,
  totalPoundsDay: 0,

  hourlyString: [],
  stringTotals: [],

  hourly: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;
      this.custHourly.push(customers); //hourly cust
      this.cupsHourly.push((customers * this.cups).toFixed(1)); //hourly cups
      this.poundsHourly.push(Math.ceil(customers * this.toGo)); //hourly pounds
      this.employeesNeeded.push(Math.ceil(this.custHourly[i] / 30));
      this.poundsForHourCup.push((this.cupsHourly[i] / 16).toFixed(1)); //pounds needed to make cups
      var total = parseFloat(this.poundsForHourCup[i]) + parseFloat(this.poundsHourly[i]); //amount of beans needed
      this.totalPoundsPerHour.push(total.toFixed(1));
    }
  },

  daily: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCustHourly += parseFloat(this.custHourly[i]);
      this.cupsTotal += parseFloat(this.cupsHourly[i]);
      this.totalPkgPoundsDay += parseFloat(this.poundsHourly[i]);
      this.totalPoundsDay += parseFloat(this.poundsForHourCup[i]) * parseFloat(this.poundsHourly[i]);
    }
  },

  makeHourlyString: function() {
    for (i = 0; i < hours.length; i++) {
      var stringOne = hours[i] + this.totalPoundsPerHour[i] + ' lbs [' + this.custHourly[i] + ' customers, ' + this.cupsHourly[i] + ' cups (' + this.poundsForHourCup[i] + ' lbs), ' + this.poundsHourly[i] + ' lbs to-go]';
      this.hourlyString.push(stringOne);
    }
  },

  makeDailyString: function() {
    var sOne = 'Total customers at ' + this.location + ': ' + this.totalCustHourly;
    var sTwo = 'Total cups sold at ' + this.location + ': ' + Math.ceil(this.cupsTotal);
    var sThree = 'Total to-go pound packages sold at ' + this.location + ': ' + Math.ceil(this.totalPkgPoundsDay);
    var sFour = 'Total pounds of beans needed at ' + this.location + ': ' + parseFloat(this.totalPoundsDay).toFixed(1);
    this.stringTotals.push(sOne, sTwo, sThree, sFour);
  },

  render: function() {
    this.hourly();
    this.daily();
    this.makeHourlyString();
    this.makeDailyString();

    var uEl = document.getElementById('stores');

    var title = document.createElement('h1');
    title.textContent = this.location;
    uEl.appendChild(title);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlyString[i];
      uEl.appendChild(liEl);
    }

    for (var j = 0; j < this.stringTotals.length; j++) {
      var lisEl = document.createElement('li');
      lisEl.textContent = this.stringTotals[j];
      uEl.appendChild(lisEl);
    }
  }
};


var capitolHill = {
  location: 'Capitol Hill',
  minCust: 12,
  maxCust: 28,
  cups: 3.2,
  toGo: 0.03,

  custHourly: [],
  totalCustHourly: 0,

  cupsHourly: [],
  cupsTotal: 0,

  poundsHourly: [],
  poundsTotal: 0,

  employeesNeeded: [],
  employeesTotal: 0,

  poundsForHourCup: [],
  totalPoundsPerHour: [],
  totalPkgPoundsDay: 0,
  totalPoundsDay: 0,

  hourlyString: [],
  stringTotals: [],

  hourly: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;
      this.custHourly.push(customers); //hourly cust
      this.cupsHourly.push((customers * this.cups).toFixed(1)); //hourly cups
      this.poundsHourly.push(Math.ceil(customers * this.toGo)); //hourly pounds
      this.employeesNeeded.push(Math.ceil(this.custHourly[i] / 30));
      this.poundsForHourCup.push((this.cupsHourly[i] / 16).toFixed(1)); //pounds needed to make cups
      var total = parseFloat(this.poundsForHourCup[i]) + parseFloat(this.poundsHourly[i]); //amount of beans needed
      this.totalPoundsPerHour.push(total.toFixed(1));
    }
  },

  daily: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCustHourly += parseFloat(this.custHourly[i]);
      this.cupsTotal += parseFloat(this.cupsHourly[i]);
      this.totalPkgPoundsDay += parseFloat(this.poundsHourly[i]);
      this.totalPoundsDay += parseFloat(this.poundsForHourCup[i]) * parseFloat(this.poundsHourly[i]);
    }
  },

  makeHourlyString: function() {
    for (i = 0; i < hours.length; i++) {
      var stringOne = hours[i] + this.totalPoundsPerHour[i] + ' lbs [' + this.custHourly[i] + ' customers, ' + this.cupsHourly[i] + ' cups (' + this.poundsForHourCup[i] + ' lbs), ' + this.poundsHourly[i] + ' lbs to-go]';
      this.hourlyString.push(stringOne);
    }
  },

  makeDailyString: function() {
    var sOne = 'Total customers at ' + this.location + ': ' + this.totalCustHourly;
    var sTwo = 'Total cups sold at ' + this.location + ': ' + Math.ceil(this.cupsTotal);
    var sThree = 'Total to-go pound packages sold at ' + this.location + ': ' + Math.ceil(this.totalPkgPoundsDay);
    var sFour = 'Total pounds of beans needed at ' + this.location + ': ' + parseFloat(this.totalPoundsDay).toFixed(1);
    this.stringTotals.push(sOne, sTwo, sThree, sFour);
  },

  render: function() {
    this.hourly();
    this.daily();
    this.makeHourlyString();
    this.makeDailyString();

    var uEl = document.getElementById('stores');

    var title = document.createElement('h1');
    title.textContent = this.location;
    uEl.appendChild(title);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlyString[i];
      uEl.appendChild(liEl);
    }

    for (var j = 0; j < this.stringTotals.length; j++) {
      var lisEl = document.createElement('li');
      lisEl.textContent = this.stringTotals[j];
      uEl.appendChild(lisEl);
    }
  }
};


var seaLibrary = {
  location: 'Seattle Public Library',
  minCust: 9,
  maxCust: 45,
  cups: 2.6,
  toGo: 0.02,

  custHourly: [],
  totalCustHourly: 0,

  cupsHourly: [],
  cupsTotal: 0,

  poundsHourly: [],
  poundsTotal: 0,

  employeesNeeded: [],
  employeesTotal: 0,

  poundsForHourCup: [],
  totalPoundsPerHour: [],
  totalPkgPoundsDay: 0,
  totalPoundsDay: 0,

  hourlyString: [],
  stringTotals: [],

  hourly: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;
      this.custHourly.push(customers); //hourly cust
      this.cupsHourly.push((customers * this.cups).toFixed(1)); //hourly cups
      this.poundsHourly.push(Math.ceil(customers * this.toGo)); //hourly pounds
      this.employeesNeeded.push(Math.ceil(this.custHourly[i] / 30));
      this.poundsForHourCup.push((this.cupsHourly[i] / 16).toFixed(1)); //pounds needed to make cups
      var total = parseFloat(this.poundsForHourCup[i]) + parseFloat(this.poundsHourly[i]); //amount of beans needed
      this.totalPoundsPerHour.push(total.toFixed(1));
    }
  },

  daily: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCustHourly += parseFloat(this.custHourly[i]);
      this.cupsTotal += parseFloat(this.cupsHourly[i]);
      this.totalPkgPoundsDay += parseFloat(this.poundsHourly[i]);
      this.totalPoundsDay += parseFloat(this.poundsForHourCup[i]) * parseFloat(this.poundsHourly[i]);
    }
  },

  makeHourlyString: function() {
    for (i = 0; i < hours.length; i++) {
      var stringOne = hours[i] + this.totalPoundsPerHour[i] + ' lbs [' + this.custHourly[i] + ' customers, ' + this.cupsHourly[i] + ' cups (' + this.poundsForHourCup[i] + ' lbs), ' + this.poundsHourly[i] + ' lbs to-go]';
      this.hourlyString.push(stringOne);
    }
  },

  makeDailyString: function() {
    var sOne = 'Total customers at ' + this.location + ': ' + this.totalCustHourly;
    var sTwo = 'Total cups sold at ' + this.location + ': ' + Math.ceil(this.cupsTotal);
    var sThree = 'Total to-go pound packages sold at ' + this.location + ': ' + Math.ceil(this.totalPkgPoundsDay);
    var sFour = 'Total pounds of beans needed at ' + this.location + ': ' + parseFloat(this.totalPoundsDay).toFixed(1);
    this.stringTotals.push(sOne, sTwo, sThree, sFour);
  },

  render: function() {
    this.hourly();
    this.daily();
    this.makeHourlyString();
    this.makeDailyString();

    var uEl = document.getElementById('stores');

    var title = document.createElement('h1');
    title.textContent = this.location;
    uEl.appendChild(title);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlyString[i];
      uEl.appendChild(liEl);
    }

    for (var j = 0; j < this.stringTotals.length; j++) {
      var lisEl = document.createElement('li');
      lisEl.textContent = this.stringTotals[j];
      uEl.appendChild(lisEl);
    }
  }
};


var southLake = {
  location: 'South Lake Union',
  minCust: 5,
  maxCust: 18,
  cups: 1.3,
  toGo: 0.04,

  custHourly: [],
  totalCustHourly: 0,

  cupsHourly: [],
  cupsTotal: 0,

  poundsHourly: [],
  poundsTotal: 0,

  employeesNeeded: [],
  employeesTotal: 0,

  poundsForHourCup: [],
  totalPoundsPerHour: [],
  totalPkgPoundsDay: 0,
  totalPoundsDay: 0,

  hourlyString: [],
  stringTotals: [],

  hourly: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;
      this.custHourly.push(customers); //hourly cust
      this.cupsHourly.push((customers * this.cups).toFixed(1)); //hourly cups
      this.poundsHourly.push(Math.ceil(customers * this.toGo)); //hourly pounds
      this.employeesNeeded.push(Math.ceil(this.custHourly[i] / 30));
      this.poundsForHourCup.push((this.cupsHourly[i] / 16).toFixed(1)); //pounds needed to make cups
      var total = parseFloat(this.poundsForHourCup[i]) + parseFloat(this.poundsHourly[i]); //amount of beans needed
      this.totalPoundsPerHour.push(total.toFixed(1));
    }
  },

  daily: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCustHourly += parseFloat(this.custHourly[i]);
      this.cupsTotal += parseFloat(this.cupsHourly[i]);
      this.totalPkgPoundsDay += parseFloat(this.poundsHourly[i]);
      this.totalPoundsDay += parseFloat(this.poundsForHourCup[i]) * parseFloat(this.poundsHourly[i]);
    }
  },

  makeHourlyString: function() {
    for (i = 0; i < hours.length; i++) {
      var stringOne = hours[i] + this.totalPoundsPerHour[i] + ' lbs [' + this.custHourly[i] + ' customers, ' + this.cupsHourly[i] + ' cups (' + this.poundsForHourCup[i] + ' lbs), ' + this.poundsHourly[i] + ' lbs to-go]';
      this.hourlyString.push(stringOne);
    }
  },

  makeDailyString: function() {
    var sOne = 'Total customers at ' + this.location + ': ' + this.totalCustHourly;
    var sTwo = 'Total cups sold at ' + this.location + ': ' + Math.ceil(this.cupsTotal);
    var sThree = 'Total to-go pound packages sold at ' + this.location + ': ' + Math.ceil(this.totalPkgPoundsDay);
    var sFour = 'Total pounds of beans needed at ' + this.location + ': ' + parseFloat(this.totalPoundsDay).toFixed(1);
    this.stringTotals.push(sOne, sTwo, sThree, sFour);
  },

  render: function() {
    this.hourly();
    this.daily();
    this.makeHourlyString();
    this.makeDailyString();

    var uEl = document.getElementById('stores');

    var title = document.createElement('h1');
    title.textContent = this.location;
    uEl.appendChild(title);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlyString[i];
      uEl.appendChild(liEl);
    }

    for (var j = 0; j < this.stringTotals.length; j++) {
      var lisEl = document.createElement('li');
      lisEl.textContent = this.stringTotals[j];
      uEl.appendChild(lisEl);
    }
  }
};


var seaTac = {
  location: 'Sea-Tac Airport',
  minCust: 28,
  maxCust: 44,
  cups: 1.1,
  toGo: 0.41,

  custHourly: [],
  totalCustHourly: 0,

  cupsHourly: [],
  cupsTotal: 0,

  poundsHourly: [],
  poundsTotal: 0,

  employeesNeeded: [],
  employeesTotal: 0,

  poundsForHourCup: [],
  totalPoundsPerHour: [],
  totalPkgPoundsDay: 0,
  totalPoundsDay: 0,

  hourlyString: [],
  stringTotals: [],

  hourly: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;
      this.custHourly.push(customers); //hourly cust
      this.cupsHourly.push((customers * this.cups).toFixed(1)); //hourly cups
      this.poundsHourly.push(Math.ceil(customers * this.toGo)); //hourly pounds
      this.employeesNeeded.push(Math.ceil(this.custHourly[i] / 30));
      this.poundsForHourCup.push((this.cupsHourly[i] / 16).toFixed(1)); //pounds needed to make cups
      var total = parseFloat(this.poundsForHourCup[i]) + parseFloat(this.poundsHourly[i]); //amount of beans needed
      this.totalPoundsPerHour.push(total.toFixed(1));
    }
  },

  daily: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCustHourly += parseFloat(this.custHourly[i]);
      this.cupsTotal += parseFloat(this.cupsHourly[i]);
      this.totalPkgPoundsDay += parseFloat(this.poundsHourly[i]);
      this.totalPoundsDay += parseFloat(this.poundsForHourCup[i]) * parseFloat(this.poundsHourly[i]);
    }
  },

  makeHourlyString: function() {
    for (i = 0; i < hours.length; i++) {
      var stringOne = hours[i] + this.totalPoundsPerHour[i] + ' lbs [' + this.custHourly[i] + ' customers, ' + this.cupsHourly[i] + ' cups (' + this.poundsForHourCup[i] + ' lbs), ' + this.poundsHourly[i] + ' lbs to-go]';
      this.hourlyString.push(stringOne);
    }
  },

  makeDailyString: function() {
    var sOne = 'Total customers at ' + this.location + ': ' + this.totalCustHourly;
    var sTwo = 'Total cups sold at ' + this.location + ': ' + Math.ceil(this.cupsTotal);
    var sThree = 'Total to-go pound packages sold at ' + this.location + ': ' + Math.ceil(this.totalPkgPoundsDay);
    var sFour = 'Total pounds of beans needed at ' + this.location + ': ' + parseFloat(this.totalPoundsDay).toFixed(1);
    this.stringTotals.push(sOne, sTwo, sThree, sFour);
  },

  render: function() {
    this.hourly();
    this.daily();
    this.makeHourlyString();
    this.makeDailyString();

    var uEl = document.getElementById('stores');

    var title = document.createElement('h1');
    title.textContent = this.location;
    uEl.appendChild(title);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlyString[i];
      uEl.appendChild(liEl);
    }

    for (var j = 0; j < this.stringTotals.length; j++) {
      var lisEl = document.createElement('li');
      lisEl.textContent = this.stringTotals[j];
      uEl.appendChild(lisEl);
    }
  }
};


pikePlace.render();
capitolHill.render();
seaLibrary.render();
southLake.render();
seaTac.render();
