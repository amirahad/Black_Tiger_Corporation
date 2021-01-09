$(window).load(function () {
    $('#slider').nivoSlider({
	effect: 'random',
	slices: 15,
	boxCols: 8,
	boxRows: 4,
	animSpeed: 500,
	pauseTime: 3000,
	startSlide: 0,
	directionNav: false,
	controlNav: false,
	controlNavThumbs: false,
	pauseOnHover: true,
	manualAdvance: false,
	prevText: '',
	nextText: '',
	randomStart: false,
	beforeChange: function() { },
	afterChange: function() { },
	slideshowEnd: function() { },
	lastSlide: function() { },
	afterLoad: function() { }
	});
});




function send(e){
	e.preventDefault();
	Email.send({
	SecureToken: "93959c04-81c2-49a5-a3b0-1e0211f569a0",
    To : 'amirahad420@gmail.com',
    From : "arahad4783@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
	}).then(
		message => alert(message)
	);
}