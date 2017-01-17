$(document).ready(function() {
	$('#calculate').click(function() {
		var candy = Number.parseInt($('#candy').val()),
				pokemon = Number.parseInt($('#pokemon').val()),
				cost = Number.parseInt($('#cost').val());

		var p = pokemon - Math.floor(((Math.floor(candy/cost)) + candy)/cost);
		console.log('p: ' + p);

		var r = (Math.floor(candy/cost) + candy) % cost;
		console.log('r: ' + r);

		var xferAmt;

		if (p >= (cost - r + 1)) {
			p = p - 1 - cost + r;
			if (p >= cost) {
				xferAmt = (cost - r) + ((Math.floor(p/cost) * cost) - Math.floor(p/cost));
			}
			else {
				xferAmt = (cost - r);
			}
		}
		else {
			xferAmt = 0;
		}
		$('#results').html(xferAmt);
	});
});