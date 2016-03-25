$(document).ready(function() {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyCWrRvtyHqWOJ3M0_irYnO1wBJvZPsoQyE',
    events: {
      googleCalendarId: '84pqfnmiq3i0us0u37ubktuem4@group.calendar.google.com',
      className: 'apc-ent-event'
    },
    header: {
    	left: 'prev',
    	center: 'title',
    	right: 'next'
    },
    columnFormat: 'dddd'
  });
});