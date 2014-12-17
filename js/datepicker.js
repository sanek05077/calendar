$(document).ready(function(){ 
//функция, которая генерит таблицу с датами
		function calendarBig(year){
			for (var m = 0; m <= 11; m++) {
				var D = new Date(year, [m],
				new Date().getDate()),
				Dlast = new Date(D.getFullYear(),
				D.getMonth() + 1, 0).getDate(),
				DNlast = new Date(D.getFullYear(),
				D.getMonth(), Dlast).getDay(),
				DNfirst = new Date(D.getFullYear(),
				D.getMonth(), 1).getDay(),
				calendar = '<tr>';
				
				if (DNfirst != 0) {
					for (var i = 1; i < DNfirst; i++) 
						calendar += '<td>';
				}
				else {
					for (var i = 0; i < 6; i++) 
						calendar += '<td>';
				}
				
				for (var i = 1; i <= Dlast; i++) {
					if (i == D.getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
						calendar += '<td class="today">' + i;
					}
					else {
						if ((i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) ||
						(i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) ||
						((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) ||
						(i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) ||
						(i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001) ||
						(i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) ||
						(i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) ||
						(i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) ||
						(i == 12 && D.getMonth() == 5 && D.getFullYear() > 1990) ||
						(i == 7 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 2005)) ||
						(i == 8 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 1992)) ||
						(i == 4 && D.getMonth() == 10 && D.getFullYear() > 2004)) {
							calendar += '<td class="holiday">' + i;
						}
						else {
							calendar += '<td>' + i;
						}
					}
					if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
						calendar += '<tr>';
					}
				}
				
				if (DNlast != 0) {
					for (var i = DNlast; i < 7; i++) 
						calendar += '<td>';
				}
				//это по ходу чтоб текст подставлялся в года при переключении
				document.querySelector('#calendarBig table[data-m="' + [m] + '"] tbody').innerHTML = calendar;
				document.querySelector('.list-years-top > li:nth-child(2)').innerHTML =year;
				document.querySelector('.list-years-top > li:nth-child(1)').innerHTML = parseFloat(parseFloat(year) - 1);
				document.querySelector('.list-years-top > li:nth-child(3)').innerHTML =parseFloat(parseFloat(year) + 1);
				document.querySelector('.list-years-bottom > li:nth-child(2)').innerHTML =year;
				document.querySelector('.list-years-bottom > li:nth-child(1)').innerHTML = parseFloat(parseFloat(year) - 1);
				document.querySelector('.list-years-bottom > li:nth-child(3)').innerHTML =parseFloat(parseFloat(year) + 1);
				//эта херня берет с html data атрибуты и вставляет их по определенным датам
				for (var k = 1; k <= document.querySelectorAll('#calendarTable div').length; k++) {
					var myD = document.querySelectorAll('#calendarBig table td'), my = document.querySelector('#calendarTable div:nth-child(' + [k] + ')');
					for (var i = 0; i < myD.length; i++) {
						if (my.dataset.yyyy) {
							if (myD[i].innerHTML == my.dataset.dd && myD[i].parentNode.parentNode.parentNode.dataset.m == (my.dataset.mm - 1) && year == my.dataset.yyyy) {
								myD[i].title = my.dataset.text;
								if (my.dataset.link) {
									myD[i].innerHTML = '<a href="' + my.dataset.link + '" class="fancy">' + myD[i].innerHTML + '</a>';
								}
							}
						}
						else {
							if (myD[i].innerHTML == my.dataset.dd && myD[i].parentNode.parentNode.parentNode.dataset.m == (my.dataset.mm - 1)) {
								myD[i].title = my.dataset.text;
								if (my.dataset.link) {
									myD[i].innerHTML = '<a href="' + my.dataset.link + '" class="fancy">' + myD[i].innerHTML + '</a>';
								}
							}
						}
					}
				}
				
			}
		};
		// вот это по идее переключение между годами. но оно не меняется ни хера. я пробовал поставить на список, там где
		//предыдущий и следующий год, но не работает
		calendarBig(new Date().getFullYear());
		document.querySelector('.list-years-top > li:nth-child(1)').onclick = calendarBigG;
		document.querySelector('.list-years-top > li:nth-child(3)').onclick = calendarBigG;
		document.querySelector('.list-years-bottom > li:nth-child(1)').onclick = calendarBigG;
		document.querySelector('.list-years-bottom > li:nth-child(3)').onclick = calendarBigG;
		function calendarBigG(){
			calendarBig(this.innerHTML.replace(/[^\d]/gi, ''));
		};
		//это я писал, чтоб ссылки с разными класами генерились
		$(document).ready(function(){
			$('#calendarBig td[title="lightbox-01"]').addClass("lightbox-01");
			$('#calendarBig td[title="lightbox-02"]').addClass("lightbox-02");
			$('#calendarBig td[title="lightbox-03"]').addClass("lightbox-03");
			$('#calendarBig td[title="lightbox-04"]').addClass("lightbox-04");
			$('#calendarBig td[title="lightbox-05"]').addClass("lightbox-05");
		});
		$(document).on("click", ".list-years li", function(){
			$('#calendarBig td[title="lightbox-01"]').addClass("lightbox-01");
			$('#calendarBig td[title="lightbox-02"]').addClass("lightbox-02");
			$('#calendarBig td[title="lightbox-03"]').addClass("lightbox-03");
			$('#calendarBig td[title="lightbox-04"]').addClass("lightbox-04");
			$('#calendarBig td[title="lightbox-05"]').addClass("lightbox-05");
		});
});