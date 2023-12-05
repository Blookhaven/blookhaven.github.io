$('.rollover').on('mouseover',(e)=>{
	$('.circle').addClass('grey');
	$(`.${e.target.classList[1]}`).removeClass('grey');
});
$('.rollover').on('mouseout',()=>{
	$('.circle').removeClass('grey');
});

// let foreground = $('#foreground');

// $(window).on('resize',()=>{
// 	console.log(`W:${foreground.width()}\nH:${foreground.height()}`)
// })

$(window).on('scroll',()=>{

	let foreground = $('#foreground');

	// console.log(`Y:${foreground.position().top}`)
	// console.log(`Y:${foreground.scrollTop()}`)
	// console.log(`Y:${foreground.offset().top}`)
	
	// console.log(window.scrollY)
	// console.log(window.scrollY / 2)
	// console.log((window.scrollY / 2) - (window.innerHeight / 2))


	// $('#background').css({'margin-top':`-${window.scrollY / 2}px`})
	// $('#background').css({'margin-top':`calc(-${(window.scrollY / 2)}px - 50vh)`});
	// $('#background').css({
	// 	'margin-top':`-${(window.scrollY / 2) - (window.innerHeight / 2)}px`,
	// 	'height':`${Math.ceil($('#foreground').height() / 2)}px`
	// });

	// $('#background').css({'margin-top':`-${(window.scrollY / 2) - (window.innerHeight / 2)}px`});
	$('#background').css({'margin-top':`-${window.scrollY / 2}px`});
	$('#background2').css({'margin-top':`-${window.scrollY / 4}px`});
})

window.addEventListener('contextmenu',(e)=>{
	e.preventDefault(); 
}, false);