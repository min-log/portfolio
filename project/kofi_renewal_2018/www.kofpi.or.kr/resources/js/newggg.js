
				var doughnutData = [ 
						{
							value: 70, 
							color:"#2c4b5f", 
							highlight: "#2c4b5f",

						},
						{
							value: 20,
							color: "#a9dc51",
							highlight: "#a9dc51",

						},
						{
							value: 10,
							color: "#a65d03",
							highlight: "#a65d03",

						}
					];

				var doughnutData2 = [ 
						{
							value: 80,
							color:"#2c4b5f",
							highlight: "#2c4b5f",

						}, 
						{
							value: 10,
							color: "#a9dc51",
							highlight: "#a9dc51",
	
						},
						{
							value: 10,
							color: "#e0e0e0",
							highlight: "#e0e0e0",
			
						}
					];

/*					window.onload = function(){ 
						var ctx = document.getElementById("chart-area").getContext("2d");
						window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
						var ctx2 = document.getElementById("chart-area2").getContext("2d");
						window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData2, {responsive : true});				
					};*/



$(window).scroll(function () {
   if ($(this).scrollTop() > 1500 && $(this).scrollTop() < 1700 ) {

			var ctx = document.getElementById("chart-area").getContext("2d");
			window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
			var ctx2 = document.getElementById("chart-area2").getContext("2d");
			window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData2, {responsive : true});				
   }
});     