$(function () {
	$('a[href^="#"]').click(function () {
		var a = $(this).attr("href");
		a = $(a).offset().top - 60;
		jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: a}, 800);
		return !1
	});
	Data = new Date;
	Year = Data.getFullYear();
	Month = Data.getMonth();
	Day = Data.getDate();
	switch (Month) {
		case 0:
			fMonth = "\u044f\u043d\u0432\u0430\u0440\u044f";
			break;
		case 1:
			fMonth = "\u0444\u0435\u0432\u0440\u0430\u043b\u044f";
			break;
		case 2:
			fMonth = "\u043c\u0430\u0440\u0442\u0430";
			break;
		case 3:
			fMonth = "\u0430\u043f\u0440\u0435\u043b\u044f";
			break;
		case 4:
			fMonth = "\u043c\u0430\u044f";
			break;
		case 5:
			fMonth = "\u0438\u044e\u043d\u044f";
			break;
		case 6:
			fMonth = "\u0438\u044e\u043b\u044f";
			break;
		case 7:
			fMonth = "\u0430\u0432\u0433\u0443\u0441\u0442\u0430";
			break;
		case 8:
			fMonth = "\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f";
			break;
		case 9:
			fMonth = "\u043e\u043a\u0442\u044f\u0431\u0440\u044f";
			break;
		case 10:
			fMonth = "\u043d\u043e\u044f\u0431\u0440\u044f";
			break;
		case 11:
			fMonth = "\u0434\u0435\u043a\u0430\u0431\u0440\u044f"
	}
	$(".m1-date").html(" " + Day + "&nbsp;" + fMonth);
	$(".rev-cont").slick({
		infinite: !0,
		autoplay: !1,
		dots: !0,
		arrows: !0,
		fade: !1,
		speed: 300,
		slidesToShow: 3,
		responsive: [{breakpoint: 959, settings: {slidesToShow: 2, slidesToScroll: 1}}, {
			breakpoint: 639,
			settings: {slidesToShow: 1, slidesToScroll: 1}
		}]
	})
});

$(document).on('ready', function() {

	$('[name="country"]').on('change', function () {
		var geoKey = $(this).find('option:selected').val();
		var data = $jsonData.prices[geoKey];
		var price = data.price;
		var oldPrice = data.old_price;
		var currency = data.currency
		$("[value = " + geoKey + "]").attr("selected", true).siblings().attr('selected', false);

		$('.price_land_s1').text(price);
		$('.price_land_s2').text(oldPrice);
		$('.price_land_curr').text(currency);
	});
});
