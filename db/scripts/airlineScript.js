//--- use database ---//
//use TECPlane;

//--- show database ---//
db;

//--- create collection ---//

db.createCollection('airlines');

//--- fill collection ---//
db.airlines.insert({
  _id: 'AAL',
  name: 'American Airlines',
  countries: [
    'Australia',
    'Aruba',
    'Brasil',
    'United Arab Emirates',
    'Costa Rica',
    'Egypt',
    'United Kingdom',
    'United States',
    'Germany',
    'Japan'
  ],
  airport_id: 'ATL'
});

db.airlines.insert({
  _id: 'CLH',
  name: 'Lufthansa',
  countries: [
    'Australia',
    'Brasil',
    'United Arab Emirates',
    'Costa Rica',
    'Egypt',
    'United Kingdom',
    'United States',
    'Germany',
    'Japan'
  ],
  airport_id: 'FRA'
});

db.airlines.insert({
  _id: 'SHT',
  name: 'British Airways',
  countries: [
    'Australia',
    'Aruba',
    'Brasil',
    'United Arab Emirates',
    'Costa Rica',
    'Egypt',
    'United Kingdom',
    'United States',
    'Germany',
    'Japan'
  ],
  airport_id: 'LHR'
});

db.airlines.insert({
  _id: 'UAE',
  name: 'Emirates',
  countries: [
    'Australia',
    'Brasil',
    'United Arab Emirates',
    'Egypt',
    'United Kingdom',
    'United States',
    'Germany',
    'Japan'
  ],
  airport_id: 'DXB'
});

db.airlines.insert({
  _id: 'JBU',
  name: 'JetBlue',
  countries: [
    'Brasil',
    'Costa Rica',
    'United Kingdom',
    'United States',
    'Germany',
    'Japan'
  ],
  airport_id: 'ATL'
});

db.airlines.insert({
  _id: 'QTR',
  name: 'Qatar Airways',
  countries: [
    'Australia',
    'United Arab Emirates',
    'Egypt',
    'United Kingdom',
    'United States',
    'Germany',
    'Japan'
  ],
  airport_id: 'DXB'
});
