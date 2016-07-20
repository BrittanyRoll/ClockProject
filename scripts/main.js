$(document).ready(function(){
	setInterval(function(){
	var dateTime = new Date();
	var minutesTwoDigitsWithLeadingZero = ("0" + dateTime.getMinutes()).substr(-2);
	$('#milliseconds').text(dateTime.getMilliseconds());
	$('#seconds').text(dateTime.getSeconds());
	$('#minutes').text(minutesTwoDigitsWithLeadingZero);
	$('#hours').text(dateTime.getHours());

		if (minutesTwoDigitsWithLeadingZero % 2 === 0){
		$('body').css({"background-color":"blue"});
		} else if (minutesTwoDigitsWithLeadingZero % 2 !== 0){
		$('body').css({"background-color":"black"});}

		var colors = ['#ff0000', '#00ff00', '#0000ff'];
		if (minutesTwoDigitsWithLeadingZero % 5 === 0){
		var randcolors = colors[Math.floor(Math.random() * colors.length)];
		$('body').css('background-color', randcolors)};

		if (minutesTwoDigitsWithLeadingZero % 60 === 0){
		var randcolors = colors[Math.floor(Math.random() * colors.length)];
		$('#clock').css('color', randcolors)};

	}, 100)
});
		
	
	


		/*Color[] colors;

		colors = new Color[4];
		colors[0] = new Color(Color.red);
		colors[1] = new Color(Color.blue);
		colors[2] = new Color(Color.purple);
		colors[3] = new Color(Color.white);


	function multfive(#minutes){
		return (#minutes%5 == 0);
	}

		if(multfive(#minutes)){
			background-color: 'Color'
		}*/





