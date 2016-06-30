var ww = window.innerWidth;
var view;
var getWindowWidth = function() {
  return window.innerWidth;
}
var getView = function() {
   return (ww < 768) ? 'basicWeek' : 'month';
}
  
$(document).ready(function() {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyCWrRvtyHqWOJ3M0_irYnO1wBJvZPsoQyE',
    events: {
      googleCalendarId: 'apcentertainment@outlook.com',
      className: 'apc-ent-event',
      backgroundColor: '#ff7d7d',
      borderColor: 'transparent'
    },
    eventRender: function(event, element) {
      element.attr('href', '/');
    },
    eventClick: function(event) {
      if (event.url) {
        return false;
      }
    },
    header: {
    	left: 'prev',
    	center: 'title',
    	right: 'next'
    },
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesShort: ['U', 'M', 'T', 'W', 'R', 'F', 'S'],
    views: {
      basicWeek: {
        columnFormat: 'ddd'
      },
      month: {
        columnFormat: 'dddd'
      }
    },
    defaultView: getView(),
    aspectRatio: function() {
      if (getWindowWidth() < 768) {
        return 2;
      } else {
        return 1;
      }
    },
    windowResize: function(view) {
      ww = getWindowWidth();
      view = getView();
      var currentView = $('#calendar').fullCalendar('getView');
      if(view != currentView){
        $('#calendar').fullCalendar('changeView', view);
      }
    }
  });
});