import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import './canI.html';

city = new ReactiveVar("Stavoren");


subscribeToCity = function(newCity) {

  // console.log('newCity function ' + newCity)

  // window.removeEventListener('beforeunload');
  
  Meteor.subscribe('Weather', newCity);
  Meteor.call('addCity', newCity);
  Meteor.call('getWeather', newCity);

  window.addEventListener("beforeunload", function (e) {
    Meteor.call('removeCity', newCity);
  });

};

Template.canI.onCreated(function canIOnCreated() {
  subscribeToCity(city.get());
});

Meteor.setInterval

Template.canI.helpers({
  weather() {
    var weather = Weather.findOne({city:city.get()});
    var body = document.querySelector("body");
    var main = document.querySelector("main");

    document.querySelector("#wind-dir").style.transform = "rotate(" + weather.wind_degrees + "deg)";

    if (weather.wind_kph > 10) {
      weather.surfable = true;
      body.style.backgroundImage = "url(images/" + 1 + "-wind.jpg)";
      main.style.backgroundColor = "rgba(46, 204, 113,0.9)";
    } else {
      weather.surfable = false;
      body.style.backgroundImage = "url(images/" + 1 + "-no-wind.jpg)";
      main.style.backgroundColor = "rgba(231, 76, 60,0.9)";
    }
    return weather;
  },
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD-MM-YYYY HH:mm:ss');
});

Template.canI.events( {
  'click .chance-city': function (event) {
    oldCity = city.get();
    Meteor.call('removeCity', city.get());
    city.set(event.target.id);
    subscribeToCity(city.get());
  }
});

Template.canI.onDestroyed(function canIOnDestroyed() {
  window.removeEventListener('beforeunload');
});
















