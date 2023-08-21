var eventdata = [
	{
		title: 'initial event',
		start: '2022-07-02',
		color: '#008000',
		resourceEditable: false // resource not editable for this event
	}
];


document.addEventListener('DOMContentLoaded', function() {

	function datachange(info) {
		eventdata.push({
			title: 'click event',
			start: '2022-07-03',
			color: '#800080'
		})
	}
	
	var calendarEl = document.getElementById('calendarz');
	let draggableEl = document.getElementById('draggable-el');
	var Draggable = FullCalendar.Draggable;
	new Draggable(draggableEl, {
		eventData: function(eventEl) {
			return {
				title: eventEl.innerText
			};
		}
	});
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'dayGridMonth',
		headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
		dateClick: function(info) {
			// datachange(info);	
			calendar.batchRendering(function() {
				// calendar.changeView('dayGridMonth');
				// let tempevents = calendar.getEvents();
				// for(let i=0; i < tempevents.length; i++) {
				// 	if(tempevents[i].start == info.date) {}
				// }
				calendar.addEvent({ title: 'new event zz', start: info.dateStr });
			});
		},
		editable: true,
    droppable: true,
		events: eventdata
	});
	calendar.render();


	$( document ).ready(function() {
		document.getElementById('prez').addEventListener('click', function() {
			calendar.prevYear();
		});
		document.getElementById('nextz').addEventListener('click', function() {
			calendar.nextYear();
		});
	});

});

// calendar.on('dateClick', function(info) {
//   console.log('clicked on ' + info.dateStr);
// });


// $( document ).ready(function() {
// 	document.getElementById('prez').addEventListener('click', function() {
// 		calendar.prevYear();
// 	});
// 	document.getElementById('nextz').addEventListener('click', function() {
// 		calendar.nextYear();
// 	});
// });



