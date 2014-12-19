$(document).ready(function(){ 
		function calendarBig(year){
			for (var m = 0; m <= 11; m++) {
				//variables calendar
				
				
				var D = new Date(year, [m],
					new Date().getDate()),
					Dlast = new Date(D.getFullYear(),
					D.getMonth() + 1, 0).getDate(),
					DNlast = new Date(D.getFullYear(),
					D.getMonth(), Dlast).getDay(),
					DNfirst = new Date(D.getFullYear(),
					D.getMonth(), 1).getDay(),
					calendar = '<tr>';
				
				
				//creating calendar
				
				
				if (DNfirst != 0) {
					for (var i = 1; i < DNfirst; i++) 
						calendar += '<td>';
				}else {
					for (var i = 0; i < 6; i++) 
						calendar += '<td>';
				}
				
				for (var i = 1; i <= Dlast; i++) {
					if (i == D.getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
						calendar += '<td class="today">' + i;
					}else {
							calendar += '<td>' + i;
					};
					if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
						calendar += '<tr>';
					};
				};
				
				if (DNlast != 0) {
					for (var i = DNlast; i < 7; i++) 
						calendar += '<td>';
				};
				
				$('#calendar table[data-m="' + [m] + '"] tbody').html(calendar);
				$('.list-years-top > li:nth-child(2)').html(year);
				$('.list-years-top > li:nth-child(1)').html(parseFloat(parseFloat(year) - 1));
				$('.list-years-top > li:nth-child(3)').html(parseFloat(parseFloat(year) + 1));
				$('.list-years-bottom > li:nth-child(2)').html(year);
				$('.list-years-bottom > li:nth-child(1)').html(parseFloat(parseFloat(year) - 1));
				$('.list-years-bottom > li:nth-child(3)').html(parseFloat(parseFloat(year) + 1));
				
				
				//creating links for modal window
				
				
				for (var k = 1; k <= $('#popup-links div').length; k++) {
					var myD = document.querySelectorAll('#calendar table td'), 
						my = document.querySelector('#popup-links div:nth-child(' + [k] + ')');
					for (var i = 0; i < myD.length; i++) {
						if (my.dataset.yyyy) {
							if (myD[i].innerHTML == my.dataset.dd && myD[i].parentNode.parentNode.parentNode.dataset.m == (my.dataset.mm - 1) && year == my.dataset.yyyy) {
								myD[i].abbr = my.dataset.cls;
								myD[i].title = my.dataset.text;
								if (my.dataset.link) {
									myD[i].innerHTML = '<a href="' + my.dataset.link + '" class="fancy">' + myD[i].innerHTML + '</a>';
								}
							}
						}else {
							if (myD[i].innerHTML == my.dataset.dd && myD[i].parentNode.parentNode.parentNode.dataset.m == (my.dataset.mm - 1)) {
								myD[i].abbr = my.dataset.cls;
								myD[i].title = my.dataset.text;
								if (my.dataset.link) {
									myD[i].innerHTML = '<a href="' + my.dataset.link + '" class="fancy">' + myD[i].innerHTML + '</a>';
								}
							}
						};
					};
				};
				
				
				
			};
		};
		
		
		//top menu toggle calendar
		
		
		calendarBig(new Date().getFullYear());
		var nextYearTop = document.querySelector('.list-years-top > li:nth-child(3)'),
			prevYearTop = document.querySelector('.list-years-top > li:nth-child(1)'),
			prevYearBtnTop = document.querySelector('.list-years-top > li:nth-child(4)'),
			nextYearBtnTop = document.querySelector('.list-years-top > li:nth-child(5)');
		prevYearBtnTop.onclick = calendarBigGprevTop;
		nextYearBtnTop.onclick = calendarBigGnextTop;
		function calendarBigGnextTop(){
			calendarBig(nextYearTop.innerHTML.replace(/[^\d]/gi, ''));
		};
		function calendarBigGprevTop(){
			calendarBig(prevYearTop.innerHTML.replace(/[^\d]/gi, ''));
		};
		
		
		//bottom menu toggle calendar
		
		
		calendarBig(new Date().getFullYear());
		var nextYearBottom = document.querySelector('.list-years-bottom > li:nth-child(3)'),
			prevYearBottom = document.querySelector('.list-years-bottom > li:nth-child(1)'),
			prevYearBtnBottom = document.querySelector('.list-years-bottom > li:nth-child(4)'),
			nextYearBtnBottom = document.querySelector('.list-years-bottom > li:nth-child(5)');
		prevYearBtnBottom.onclick = calendarBigGprevBottom;
		nextYearBtnBottom.onclick = calendarBigGnextBottom;
		function calendarBigGnextBottom(){
			calendarBig(nextYearBottom.innerHTML.replace(/[^\d]/gi, ''));
		};
		function calendarBigGprevBottom(){
			calendarBig(prevYearBottom.innerHTML.replace(/[^\d]/gi, ''));
		};
		
		
		//inclusion of modal window
		
		
		$(document).ready(function(){
			$('#calendar td[title="lightbox-01"]').addClass("lightbox-01");
			$('#calendar td[title="lightbox-02"]').addClass("lightbox-02");
			$('#calendar td[title="lightbox-03"]').addClass("lightbox-03");
			$('#calendar td[title="lightbox-04"]').addClass("lightbox-04");
			$('#calendar td[title="lightbox-05"]').addClass("lightbox-05");
		});
		
		
		//including modal windows after switching calendar
		
		
		$(document).on("click", ".list-years li", function(){
			$('#calendar td[title="lightbox-01"]').addClass("lightbox-01");
			$('#calendar td[title="lightbox-02"]').addClass("lightbox-02");
			$('#calendar td[title="lightbox-03"]').addClass("lightbox-03");
			$('#calendar td[title="lightbox-04"]').addClass("lightbox-04");
			$('#calendar td[title="lightbox-05"]').addClass("lightbox-05");
		});
});