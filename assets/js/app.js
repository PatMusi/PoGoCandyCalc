$(document).ready(function() {
	$('#calculate').click(function() {
		var candy = Number.parseInt($('#candy').val()),
			pokemon = Number.parseInt($('#pokemon').val()),
			cost = Number.parseInt($('#cost').val());

		if (!isNaN(candy) && !isNaN(pokemon) && !isNaN(cost)) {
			if (cost > 0) {
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
				var evolveAmount = Math.floor(Math.floor((candy + xferAmt) / cost) + ((Math.floor((candy + xferAmt) / cost) + ((candy + xferAmt) % cost)) / cost));
				if (evolveAmount > pokemon && pokemon >= 0) {
					evolveAmount = pokemon;
				}
				$('#results').html(xferAmt);
				$('#evolveResults').html(evolveAmount);
			}
			else {
				alert('Candy cost must be greater than 0');
			}
		}
		else {
			alert('All fields must be specified');
		}
	});
});
