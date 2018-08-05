let cardtaker = ''

let p1f1 = ''
let p1f1right = ''
let p1f1bottom = ''
// ------ player 1 card1 goes here right and bottom

let p1f2 = ''
let p1f2left = ''
let p1f2right = ''
let p1f2bottom = ''
// ------- player 1 card2 goes here right and left & bottom

let p1f3 = ''
let p1f3left = ''
let p1f3bottom = ''

// -------- player 1 card1 goes here left and bottom
let p1s1 = ''
let p1s1right = ''
let p1s1top = ''
let p1s1bottom = ''
// -----------player 1 card1 goes here right & top and bottom
let p1s2 = ''
let p1s2top = ''
let p1s2left = ''
let p1s2right = ''
let p1s2bottom = ''

let p1s3 = ''
let p1s3top = ''
let p1s3left = ''
let p1s3bottom = ''
let p1t1 = ''
let p1t1top = ''
let p1t1right = ''
let p1t2 = ''
let p1t2top = ''
let p1t2left = ''
let p1t2right = ''
let p1t3 = ''
let p1t3top = ''
let p1t3left = ''

let p2f1 = ''
let p2f1right = ''
let p2f1bottom = ''
let p2f2 = ''
let p2f2left = ''
let p2f2right = ''
let p2f2bottom = ''
let p2f3 = ''
let p2f3left = ''
let p2f3bottom = ''
let p2s1 = ''
let p2s1right = ''
let p2s1top = ''
let p2s1bottom = ''
let p2s2 = ''
let p2s2top = ''
let p2s2left = ''
let p2s2right = ''
let p2s2bottom = ''
let p2s3 = ''
let p2s3top = ''
let p2s3left = ''
let p2s3bottom = ''
let p2t1 = ''
let p2t1top = ''
let p2t1right = ''
let p2t2 = ''
let p2t2top = ''
let p2t2left = ''
let p2t2right = ''
let p2t3 = ''
let p2t3top = ''
let p2t3left = ''
let bs = 0;
let rs = 0;
// deck of player 1 -------------------
$('#p1ucard1').click(()=> {
	$('#p1ucard1').css('transform' ,'scale(1.2,1.2)').css('border','2px solid white').css('transition','transform 1s');
	cardtaker = $('#p1ucard1').html();
	$('#p1ucard2').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard3').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard4').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard5').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	

	
}) //card1 of player 1
$('#p1ucard2').click(()=> {
	$('#p1ucard2').css('transform' ,'scale(1.2,1.2)').css('border','2px solid blue').css('transition','transform 1s');
	cardtaker = $('#p1ucard2').html();
	$('#p1ucard1').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard3').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard4').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard5').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	
	

	
}) //card2 of player 1
$('#p1ucard3').click(()=> {
	$('#p1ucard3').css('transform' ,'scale(1.2,1.2)').css('border','2px solid blue').css('transition','transform 1s');
	cardtaker = $('#p1ucard3').html();
	$('#p1ucard1').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard2').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard4').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard5').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	
	

	
}) //card3 of player 1
$('#p1ucard4').click(()=> {
	$('#p1ucard4').css('transform' ,'scale(1.2,1.2)').css('border','2px solid blue').css('transition','transform 1s');
	cardtaker = $('#p1ucard4').html();
	$('#p1ucard1').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard2').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard3').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard5').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	
	

	
}) //card4 of player 1
$('#p1ucard5').click(()=> {
	$('#p1ucard5').css('transform' ,'scale(1.2,1.2)').css('border','2px solid blue').css('transition','transform 1s');
	cardtaker = $('#p1ucard5').html();
	$('#p1ucard1').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard2').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard3').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p1ucard4').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	

	
}) // card5 of player 1

// end deck of player 1 - - -  ---- - - --- 

// - -- - - --- - --- start of deck of player2

$('#p2ucard1').click(()=> {


	$('#p2ucard1').css('transform' ,'scale(1.2,1.2)').css('border','2px solid blue').css('transition','transform 1s');
	cardtaker = $('#p2ucard1').html();
	$('#p2ucard2').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard3').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard4').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard5').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');

})   // card1 of player2

$('#p2ucard2').click(()=> {
	$('#p2ucard2').css('transform' ,'scale(1.2,1.2)').css('border','2px solid blue').css('transition','transform 1s');
	cardtaker = $('#p2ucard2').html();
	$('#p2ucard1').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard3').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard4').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard5').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');

}) // card2 of player 2

$('#p2ucard3').click(()=> {
	$('#p2ucard3').css('transform' ,'scale(1.2,1.2)').css('border','2px solid blue').css('transition','transform 1s');
	cardtaker = $('#p2ucard3').html();
	$('#p2ucard2').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard1').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard4').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard5').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');

}) //card3 of player2

$('#p2ucard4').click(()=> {
	$('#p2ucard4').css('transform' ,'scale(1.2,1.2)').css('border','2px solid blue').css('transition','transform 1s');
	cardtaker = $('#p2ucard4').html();
	$('#p2ucard2').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard3').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard1').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard5').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');

}) //card4 of player2

$('#p2ucard5').click(()=> {
	$('#p2ucard5').css('transform' ,'scale(1.2,1.2)').css('border','2px solid blue').css('transition','transform 1s');
	cardtaker = $('#p2ucard5').html();
	$('#p2ucard2').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard3').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard4').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');
	$('#p2ucard1').css('transform' ,'scale(1,1)').css('border','5px solid black').css('transition','transform 1s');

}) //card5 of player2


// --- --- ---- ---- - end deck of player 2

$('#f1').click(()=> { 

	if (cardtaker == $('#t1').html()) {  
	// checker of the same card on battle fields
		alert('Select a new card')
	} else if (cardtaker == $('#t2').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f1').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f2').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f4').html()) {
		alert('Select a new card')

	}else if (cardtaker == $('#s1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#s2').html()) {
		alert('Select a new card')
	}	else if (cardtaker == $('#s3').html()) {
		alert('Select a new card')
	} else  {
		
	$('#f1').html(cardtaker);  // -- > top first box in battle field
	} // checker of the same card on battle fields





	if ($('#f1').html() == $('#p1ucard1').html()) {
		p1f1 = $('#f1').html();
		p1f1right = $('#f1 .right1').html();
		p1f1bottom = $('#f1 .bottom1').html();

	} else if ($('#f1').html() == $('#p1ucard2').html()) {
		p1f1 = $('#f1').html();
		p1f1right = $('#f1 .right1').html();
		p1f1bottom = $('#f1 .bottom1').html();


	}else if  ($('#f1').html() == $('#p1ucard3').html()) {
		p1f1 = $('#f1').html();
		p1f1right = $('#f1 .right1').html();
		p1f1bottom = $('#f1 .bottom1').html();

	} else if ($('#f1').html() == $('#p1ucard4').html()) {
		p1f1 = $('#f1').html();
		p1f1right = $('#f1 .right1').html();

		p1f1bottom = $('#f1 .bottom1').html();
	} else if ($('#f1').html() == $('#p1ucard5').html()) {
		p1f1 = $('#f1').html();
		p1f1right = $('#f1 .right1').html();
		p1f1bottom = $('#f1 .bottom1').html();
	}
	 // identifieer if the card is owner of player 1 
	else if ($('#f1').html() == $('#p2ucard1').html()) {
		p2f1 = $('#f1').html();
		p2f1right = $('#f1 .right2').html();
		p2f1bottom = $('#f1 .bottom2').html(); 

	} else if ($('#f1').html() == $('#p2ucard2').html()) {
		p2f1 = $('#f1').html();
		p2f1right = $('#f1 .right2').html();
		p2f1bottom = $('#f1 .bottom2').html(); 

	} else if ($('#f1').html() == $('#p2ucard3').html()) {
		p2f1 = $('#f1').html();
		p2f1right = $('#f1 .right2').html();
		p2f1bottom = $('#f1 .bottom2').html(); 

	} else if ($('#f1').html() == $('#p2ucard4').html()) {
		p2f1 = $('#f1').html();
		p2f1right = $('#f1 .right2').html();
		p2f1bottom = $('#f1 .bottom2').html(); 

	} else if ($('#f1').html() == $('#p2ucard5').html()) {
		p2f1 = $('#f1').html();
		p2f1right = $('#f1 .right2').html();
		p2f1bottom = $('#f1 .bottom2').html(); 

	}

	

	

	// f1 battle condition

	








	// start of player 1 card animation --------------

		if (cardtaker == $('#p1ucard1').html()) {
			$('#p1ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p1ucard2').html()){

			$('#p1ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p1ucard3').html()){

			$('#p1ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard4').html()){

			$('#p1ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard5').html()){

			$('#p1ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
			
			//end of player 1 card animation ------------ 

			//-------- start of player 2 card animation


		} else if (cardtaker == $('#p2ucard1').html()) {
			$('#p2ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p2ucard2').html()){

			$('#p2ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p2ucard3').html()){

			$('#p2ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard4').html()){

			$('#p2ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard5').html()){

			$('#p2ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
			
			// --------------- end of player 2 card animation

		} // animation of each card when summon
		
if($('#f1').html() == p1f1)	{
		if (p2f2 == '') {
		} else if (parseInt(p1f1right) > parseInt(p2f2left)) {
			p1f2 = p2f2
			p1f2left = p2f2left 
			p1f2bottom = p2f2bottom 
			p1f2right = p2f2right
			$('#f2').removeClass('animated flip')
			$('#f2').addClass('animated flip').css('border','2px solid white')
			$('#blue').html(++bs)
			$('#red').html(--rs)
			


			}  else if (parseInt(p1f1right) < parseInt(p2f2left)) {
			p2f1  = p1f1 
			p2f1right = p1f1right
			p2f1bottom  = p1f1bottom 
			$('#f1').removeClass('animated flip')
			$('#f1').addClass('animated flip').css('border','2px solid red')
			$('#blue').html(--bs)
			$('#red').html(++rs)
		}  

		if (p2s1 == '') {
		} else if (parseInt(p1f1bottom) > parseint(p2s1top)){
			p1s1  = p2s1 
			p1s1right  = p2s1right 
			p1s1bottom  = p2s1bottom
			p1s1top = p2s1top
			$('#s1').removeClass('animated flip')
			$('#s1').addClass('animated flip').css('border','2px solid white')
			$('#blue').html(++bs)
			$('#red').html(--rs)

		} else if (parseInt(p1f1bottom) < parseInt(p2s1top)){
			 p2f1= p1f1  
			 p2f1right = p1f1right  
			 p2f1bottom = p1f1bottom  
			p2s1top = p1s1top 
			$('#s1').removeClass('animated flip')
			$('#s1').addClass('animated flip').css('border','2px solid red')
			$('#blue').html(--bs)
			$('#red').html(++rs)

		} //-----  end player one inner else if


	} if ($('#f1').html() == p2f1){ // ----> main else if

		if (p1f2 == '') {

		} else if (parseInt(p2f1right) > parseInt(p1f2left)) {

			p2f2 = p1f2
			p2f2left = p1f2left 
			p2f2bottom= p1f2bottom
			p2f2right = p1f2right
			$('#f2').removeClass('animated flip')
			$('#f2').addClass('animated flip').css('border','2px solid red')
			$('#blue').html(--bs)
			$('#red').html(++rs)


		} else if (parseInt(p2f1right) < parseInt(p1f2left)) {
	

			p1f1 = p2f2
			p1f1bottom = p2f1bottom
			p1f1right = p2f1right 
			$('#f1').removeClass('animated flip')
			$('#f1').addClass('animated flip').css('border','2px solid white')
			$('#blue').html(++bs)
			$('#red').html(--rs)
		}
		if (p1s1 == '') {

		} else if (parseInt(p2f1bottom) > parseInt(p1s1top)){
			p2s1 = p1s2
			p2s1right  = p1s1right
			p2s1bottom  = p1s1bottom
			p2s1top = p2s1top
			$('#s1').removeClass('animated flip')
			$('#s1').addClass('animated flip').css('border','2px solid red')
			$('#blue').html(--bs)
			$('#red').html(++rs)
		} else if (parseInt(p2f1bottom) < parseInt(p1s1top)){
			 p1s2 = p2s1 
			 p1f2left = p2s1right 
			 p1f2bottom = p2s1bottom 
			p1s1top = p2s1top 
			$('#f1').removeClass('animated flip')
			$('#f1').addClass('animated flip').css('border','2px solid white')
			$('#blue').html(++bs)
			$('#red').html(--rs)

		} 
	} // end else if 
})
$('#f2').click(()=> { // -- > top second box in battle field

	// checker of the same card on battle fields
	if (cardtaker == $('#t1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t2').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f1').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f2').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f4').html()) {
		alert('Select a new card')

	}else if (cardtaker == $('#s1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#s2').html()) {
		alert('Select a new card')
	}	else if (cardtaker == $('#s3').html()) {
		alert('Select a new card')
	} else {
		
	$('#f2').html(cardtaker);
	}


	if ($('#f2').html() == $('#p1ucard1').html()) {
		p1f2 = $('#f2').html();
		p1f2right = $('#f2 .right1').html();
		p1f2bottom = $('#f2 .bottom1').html();
		p1f2left = $('#f2 .left1').html();

	} else if ($('#f2').html() == $('#p1ucard2').html()) {
		p1f2 = $('#f2').html();
		p1f2right = $('#f2 .right1').html();
		p1f2bottom = $('#f2 .bottom1').html();
		p1f2left = $('#f2 .left1').html();

	}else if  ($('#f2').html() == $('#p1ucard3').html()) {
		p1f2 = $('#f2').html();
		p1f2right = $('#f2 .right1').html();
		p1f2bottom = $('#f2 .bottom1').html();
		p1f2left = $('#f2 .left1').html();	

	} else if ($('#f2').html() == $('#p1ucard4').html()) {
		p1f2 = $('#f2').html();
		p1f2right = $('#f2 .right1').html();
		p1f2left = $('#f2 .left1').html();	
		p1f2bottom = $('#f2 .bottom1').html();

	} else if ($('#f2').html() == $('#p1ucard5').html()) {
		p1f2 = $('#f2').html();
		p1f2right = $('#f2 .right1').html();
		p1f2left = $('#f2 .left1').html();
		p1f2bottom = $('#f2 .bottom1').html();
	}
	 // identifieer if the card is owner of player 1 
	else if ($('#f2').html() == $('#p2ucard1').html()) {
		p2f2 = $('#f2').html();
		p2f2right = $('#f2 .right2').html();
		p2f2bottom = $('#f2 .bottom2').html();
		p2f2left = $('#f2 .left2').html(); 

	} else if ($('#f2').html() == $('#p2ucard2').html()) {
		p2f2 = $('#f2').html();
		p2f2right = $('#f2 .right2').html();
		p2f2bottom = $('#f2 .bottom2').html(); 
		p2f2left = $('#f2 .left2').html();

	} else if ($('#f2').html() == $('#p2ucard3').html()) {
		p2f2 = $('#f2').html();
		p2f2right = $('#f2 .right2').html();
		p2f2bottom = $('#f2 .bottom2').html(); 
		p2f2left = $('#f2 .left2').html();

	} else if ($('#f2').html() == $('#p2ucard4').html()) {
		p2f2 = $('#f2').html();
		p2f2right = $('#f2 .right2').html();
		p2f2bottom = $('#f2 .bottom2').html(); 
		p2f2left = $('#f2 .left2').html();

	} else if ($('#f2').html() == $('#p2ucard5').html()) {
		p2f2 = $('#f2').html();
		p2f2right = $('#f2 .right2').html();
		p2f2bottom = $('#f2 .bottom2').html(); 
		p2f2left = $('#f2 .left2').html();
	}

	

	if (cardtaker == $('#p1ucard1').html()) {
			$('#p1ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p1ucard2').html()){

			$('#p1ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p1ucard3').html()){

			$('#p1ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard4').html()){

			$('#p1ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard5').html()){
			
			$('#p1ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		


		}else if (cardtaker == $('#p2ucard1').html()) {
			$('#p2ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p2ucard2').html()){

			$('#p2ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p2ucard3').html()){

			$('#p2ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard4').html()){

			$('#p2ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard5').html()){

			$('#p2ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		}  
if($('#f2').html() == p1f2)	{

		if (p2f1 == '') {

		} else if (parseInt(p1f2left) > parseInt(p2f1right)) {

			p1f1 = p2f1
			p1f1right = p2f1right 
			p1f1bottom = p2f1bottom 
			$('#f1').removeClass('animated flip')
			$('#f1').addClass('animated flip').css('border','2px solid white')
			$('#blue').html(++bs)
			$('#red').html(--rs)
		}  else if (parseInt(p1f2left) < parseInt(p2f1right)) {

			p2f2  = p1f2 
			p2f2left  = p1f2left 
			p2f2bottom  = p1f2bottom
			p2f2right = p1f2right 
			$('#f2').removeClass('animated flip')
			$('#f2').addClass('animated flip').css('border','2px solid red')
			$('#blue').html(--bs)
			$('#red').html(++rs)
		}  

		if (p2s2 == '') {
		} else if (parseInt(p1f2bottom) > parseInt(p2s2top)){
			p1s2  = p2s2 
			p1s2right  = p2s2right 
			p1s2bottom  = p2s2bottom
			p1s2top = p2s2top
			p1s2left = p2s2left
			$('#s2').removeClass('animated flip')
			$('#s2').addClass('animated flip').css('border','2px solid white')
			$('#blue').html(++bs)
			$('#red').html(--rs)

		} else if (parseInt(p1f2bottom) < parseInt(p2s2top)){

			p2f2  = p1f2 
			p2f2left  = p1f2left 
			p2f2bottom  = p1f2bottom
			p2f2right = p1f2right 

			$('#f2').removeClass('animated flip')
			$('#f2').addClass('animated flip').css('border','2px solid red')
			$('#blue').html(--bs)
			$('#red').html(++rs)

		}

		
		if (p2f3 == '') {
		} else if (parseInt(p1f2right) > parseInt(p2f3left)){
			p1f3 = p2f3
			p1f3left = p2f3left
			p1f3bottom = p2f3bottom

			$('#f3').removeClass('animated flip')
			$('#f3').addClass('animated flip').css('border','2px solid white')
			$('#blue').html(++bs)
			$('#red').html(--rs)
		} else if (parseInt(p1f2right) < parseInt(p2f3left)){
			p2f2 = p1f2
			p2f2left = p1f2left
			p2f2right = p1f2right
			p2f2bottom = p1f2bottom

			$('#blue').html(--bs)
			$('#red').html(++rs)

			$('#f2').removeClass('animated flip')
			$('#f2').addClass('animated flip').css('border','2px solid red')

		}


}	else if ($('#f2').html() == p2f2){
		if (p1f1 == '') {
		} else if (parseInt(p2f2left) > parseInt(p1f1right)) {
			p2f1 = p1f1
			p2f1right = p1f1right 
			p2f1bottom = p1f1bottom 
			$('#f1').removeClass('animated flip')
			$('#f1').addClass('animated flip').css('border','2px solid red')
			$('#blue').html(--bs)
			$('#red').html(++rs)

		}  else if (parseInt(p2f2left) < parseInt(p1f1right)) {
			p1f2  = p2f2 
			p1f2left  = p2f2left 
			p1f2bottom  = p2f2bottom
			p1f2right = p2f2right 
			$('#f2').removeClass('animated flip')
			$('#f2').addClass('animated flip').css('border','2px solid white')
			$('#blue').html(++bs)
			$('#red').html(--rs)
		}  

		if (p1s2 == '') {

		} else if (parseInt(p2f2bottom) > parseInt(p1s2top)){
			
			p2s2  = p1s2 
			p2s2right  = p1s2right 
			p2s2bottom  = p1s2bottom
			p2s2top = p1s2top
			p2s2left = p1s2left
			$('#s2').removeClass('animated flip')
			$('#s2').addClass('animated flip').css('border','2px solid red')
			$('#blue').html(--bs)
			$('#red').html(++rs)


		} else if (parseInt(p2f2bottom) < parseInt(p1s2top)){
			p1f2  = p2f2 
			p1f2left  = p2f2left 
			p1f2bottom  = p2f2bottom
			p1f2right = p2f2right 
			$('#blue').html(++bs)
			$('#red').html(--rs)
			$('#f2').removeClass('animated flip')
			$('#f2').addClass('animated flip').css('border','2px solid white')

		}
		if (p1f3 == '') {
		} else if (parseInt(p2f2right) > parseInt(p1f3left)){
			p2f3 = p1f3
			p2f3left = p1f3left
			p2f3bottom = p1f3bottom
			$('#blue').html(--bs)
			$('#red').html(++rs)
			$('#f3').removeClass('animated flip')
			$('#f3').addClass('animated flip').css('border','2px solid red')

		} else if (parseInt(p1f2right) < parseInt(p2f3left)){
			p2f2 = p1f2
			p2f2left = p1f2left
			p2f2right = p1f2right
			p2f2bottom = p1f2bottom
			$('#blue').html(--bs)
			$('#red').html(++rs)
			$('#f2').removeClass('animated flip')
			$('#f2').addClass('animated flip').css('border','2px solid white')

		}


}
})
$('#f3').click(()=> {  // -- > top third box in battle field

	// checker of the same card on battle fields
	if (cardtaker == $('#t1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t2').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f1').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f2').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f4').html()) {
		alert('Select a new card')

	}else if (cardtaker == $('#s1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#s2').html()) {
		alert('Select a new card')
	}	else if (cardtaker == $('#s3').html()) {
		alert('Select a new card')
	} else {
		
	$('#f3').html(cardtaker);
	}

	if ($('#f3').html() == $('#p1ucard1').html()) {
		p1f3 = $('#f3').html();
		p1f3bottom = $('#f3 .bottom1').html();
		p1f3left = $('#f3 .left1').html();

	} else if ($('#f3').html() == $('#p1ucard2').html()) {
		p1f3 = $('#f3').html();
		p1f3bottom = $('#f3 .bottom1').html();
		p1f3left = $('#f3 .left1').html();

	}else if  ($('#f3').html() == $('#p1ucard3').html()) {
		p1f3 = $('#f3').html();
		p1f3bottom = $('#f3 .bottom1').html();
		p1f3left = $('#f3 .left1').html();	

	} else if ($('#f3').html() == $('#p1ucard4').html()) {
		p1f3 = $('#f3').html();
		p1f3left = $('#f3 .left1').html();	
		p1f3bottom = $('#f3 .bottom1').html();

	} else if ($('#f3').html() == $('#p1ucard5').html()) {
		p1f3 = $('#f3').html();
		p1f3left = $('#f3 .left1').html();
		p1f3bottom = $('#f3 .bottom1').html();
	}
	 // identifieer if the card is owner of player 1 
	else if ($('#f3').html() == $('#p2ucard1').html()) {
		p2f3 = $('#f3').html();
		p2f3bottom = $('#f3 .bottom2').html();
		p2f3left = $('#f3 .left2').html(); 

	} else if ($('#f3').html() == $('#p2ucard2').html()) {
		p2f3 = $('#f3').html();
		p2f3bottom = $('#f3 .bottom2').html(); 
		p2f3left = $('#f3 .left2').html();

	} else if ($('#f3').html() == $('#p2ucard3').html()) {
		p2f3 = $('#f3').html();
		p2f3bottom = $('#f3 .bottom2').html(); 
		p2f3left = $('#f3 .left2').html();

	} else if ($('#f3').html() == $('#p2ucard4').html()) {
		p2f3 = $('#f3').html();
		p2f3bottom = $('#f3 .bottom2').html(); 
		p2f3left = $('#f3 .left2').html();

	} else if ($('#f3').html() == $('#p2ucard5').html()) {
		p2f3 = $('#f3').html();
		p2f3bottom = $('#f3 .bottom2').html(); 
		p2f3left = $('#f3 .left2').html();
	}



	if (cardtaker == $('#p1ucard1').html()) {
			$('#p1ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p1ucard2').html()){

			$('#p1ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p1ucard3').html()){

			$('#p1ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard4').html()){

			$('#p1ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard5').html()){
			
			$('#p1ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} else if (cardtaker == $('#p2ucard1').html()) {
			$('#p2ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p2ucard2').html()){

			$('#p2ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p2ucard3').html()){

			$('#p2ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard4').html()){

			$('#p2ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard5').html()){

			$('#p2ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} 
if ($('#f3').html() == p1f3) {

		if(p2f2 == '') {
		}else if (parseInt(p1f3left) > parseInt(p2f2right)){
			p1f2 = p2f2
			p1f2left = p2f2left
			p1f2right = p2f2right
			p1f2bottom = p2f2bottom

			$('#f2').removeClass('animated flip')
			$('#f2').addClass('animated flip').css('border','2px solid white')
			$('#blue').html(++bs)
			$('#red').html(--rs)
		} else if (parseInt(p1f3left) < parseInt(p2f2right)){
			p2f3 = p1f3
			p2f3left = p1f3left
			p2f3bottom = p1f3bottom
			$('#blue').html(--bs)
			$('#red').html(++rs)
			$('#f3').removeClass('animated flip')
			$('#f3').addClass('animated flip').css('border','2px solid red')

		}

		if(p2s3 == '') {
		}else if (parseInt(p1f3bottom) > parseInt(p2s3top)){
			p1s3 = p2s3
			p1s3left = p2s3left
			p1s3top = p2s3top
			p1s3bottom = p2s3bottom
			$('#blue').html(++bs)
			$('#red').html(--rs)
			$('#s3').removeClass('animated flip')
			$('#s3').addClass('animated flip').css('border','2px solid white')

		} else if (parseInt(p1f3bottom) < parseInt(p2s3top)){
			p2f3 = p1f3
			p2f3left = p1f3left
			p2f3bottom = p1f3bottom 
			$('#blue').html(--bs)
			$('#red').html(++rs)
			$('#f3').removeClass('animated flip')
			$('#f3').addClass('animated flip').css('border','2px solid red')

		}

	}else if($('#f3').html() == p2f3) {
		if(p1f2 == '') {
		}else if (parseInt(p2f3left) > parseInt(p1f2right)){
			p2f2 = p1f2
			p2f2left = p1f2left
			p2f2right = p1f2right
			p2f2bottom = p1f2bottom
			$('#blue').html(--bs)
			$('#red').html(++rs)
			$('#f2').removeClass('animated flip')
			$('#f2').addClass('animated flip').css('border','2px solid red')

		} else if (parseInt(p2f3left) < parseInt(p1f2right)){
			p1f3 = p2f3
			p1f3left = p2f3left
			p1f3bottom = p2f3bottom
			$('#blue').html(++bs)
			$('#red').html(--rs)
			$('#f3').removeClass('animated flip')
			$('#f3').addClass('animated flip').css('border','2px solid white')

		}

		if(p1s3 == '') {
		}else if (parseInt(p2f3bottom) > parseInt(p1s3top)){
			p2s3 = p1s3
			p2s3left = p1s3left
			p2s3top = p1s3top
			p2s3bottom = p1s3bottom
			$('#blue').html(--bs)
			$('#red').html(++rs)
			$('#s3').removeClass('animated flip')
			$('#s3').addClass('animated flip').css('border','2px solid red')

		} else if (parseInt(p2f3bottom) < parseInt(p1s3top)){
			p1f3 = p2f3
			p1f3left = p2f3left
			p1f3bottom = p2f3bottom 
			$('#blue').html(++bs)
			$('#red').html(--rs)
			$('#f3').removeClass('animated flip')
			$('#f3').addClass('animated flip').css('border','2px solid white')

		}

	}
})

$('#s1').click(()=> { // -- > middle first box in battle field

	// checker of the same card on battle fields
	if (cardtaker == $('#t1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t2').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f1').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f2').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f4').html()) {
		alert('Select a new card')

	}else if (cardtaker == $('#s1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#s2').html()) {
		alert('Select a new card')
	}	else if (cardtaker == $('#s3').html()) {
		alert('Select a new card')
	} else {
		
	$('#s1').html(cardtaker);
	}

	if ($('#s1').html() == $('#p1ucard1').html()) {
		p1s1 = $('#s1').html();
		p1s1right = $('#s1 .right1').html();
		p1s1bottom = $('#s1 .bottom1').html();
		p1s1top = $('#s1 .top1').html();

	} else if ($('#s1').html() == $('#p1ucard2').html()) {
		p1s1 = $('#s1').html();
		p1s1right = $('#s1 .right1').html();
		p1s1bottom = $('#s1 .bottom1').html();
		p1s1top = $('#s1 .top1').html();

	}else if  ($('#s1').html() == $('#p1ucard3').html()) {
		p1s1 = $('#s1').html();
		p1s1right = $('#s1 .right1').html();
		p1s1bottom = $('#s1 .bottom1').html();
		p1s1top = $('#s1 .top1').html();	

	} else if ($('#s1').html() == $('#p1ucard4').html()) {
		p1s1 = $('#s1').html();
		p1s1right = $('#s1 .right1').html();
		p1s1top = $('#s1 .top1').html();	
		p1s1bottom = $('#s1 .bottom1').html();

	} else if ($('#s1').html() == $('#p1ucard5').html()) {
		p1s1 = $('#s1').html();
		p1s1right = $('#s1 .right1').html();
		p1s1top = $('#s1 .top1').html();
		p1s1bottom = $('#s1 .bottom1').html();
	}
	 // identifieer if the card is owner of player 1 
	else if ($('#s1').html() == $('#p2ucard1').html()) {
		p2s1 = $('#s1').html();
		p2s1right = $('#s1 .right2').html();
		p2s1bottom = $('#s1 .bottom2').html();
		p2s1top = $('#s1 .top2').html(); 

	} else if ($('#s1').html() == $('#p2ucard2').html()) {
		p2s1 = $('#s1').html();
		p2s1right = $('#s1 .right2').html();
		p2s1bottom = $('#s1 .bottom2').html(); 
		p2s1top = $('#s1 .top2').html();

	} else if ($('#s1').html() == $('#p2ucard3').html()) {
		p2s1 = $('#s1').html();
		p2s1right = $('#s1 .right2').html();
		p2s1bottom = $('#s1 .bottom2').html(); 
		p2s1top = $('#s1 .top2').html();

	} else if ($('#s1').html() == $('#p2ucard4').html()) {
		p2s1 = $('#s1').html();
		p2s1right = $('#s1 .right2').html();
		p2s1bottom = $('#s1 .bottom2').html(); 
		p2s1top = $('#s1 .top2').html();

	} else if ($('#s1').html() == $('#p2ucard5').html()) {
		p2s1 = $('#s1').html();
		p2s1right = $('#s1 .right2').html();
		p2s1bottom = $('#s1 .bottom2').html(); 
		p2s1top = $('#s1 .top2').html();
	}
	if (cardtaker == $('#p1ucard1').html()) {
			$('#p1ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p1ucard2').html()){

			$('#p1ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p1ucard3').html()){

			$('#p1ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard4').html()){

			$('#p1ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard5').html()){
			
			$('#p1ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} 

		else if (cardtaker == $('#p2ucard1').html()) {
			$('#p2ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p2ucard2').html()){

			$('#p2ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p2ucard3').html()){

			$('#p2ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard4').html()){

			$('#p2ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard5').html()){

			$('#p2ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} 

if ($('#s1').html() == p1s1) {
	if(p2f1 == '') {
	}else if (parseInt(p1s1top) > parseInt(p2f1bottom)){
		p1f1 = p2f1
		p1f1right = p2f1right
		p1f1bottom = p1f1bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#f1').removeClass('animated flip')
		$('#f1').addClass('animated flip').css('border','2px solid white')

	} else if (parseInt(p1s1top) < parseInt(p2f1bottom)){
		p2s1 = p1s1
		p2s1right = p1s1right
		p2s1bottom = p1s1bottom
		p2s1top = p1s1top
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s1').removeClass('animated flip')
		$('#s1').addClass('animated flip').css('border','2px solid red')
	}

	if(p2s2 == '') {
	} else if (parseInt(p1s1right) > parseInt(p2s2left)){
		p1s2 = p2s2
		p1s2top = p1s2top
		p1s2left = p1s2left
		p1s2right = p1s2right
		p1s2bottom = p1s2bottom
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid white')
		$('#blue').html(++bs)
			$('#red').html(--rs)

	} else if (parseInt(p1s1right) < parseInt(p2s2left)){
		p2s1 = p1s1
		p2s1right = p1s1right
		p2s1top = p1s1top
		p2s1bottom = p1s1bottom
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s1').removeClass('animated flip')
		$('#s1').addClass('animated flip').css('border','2px solid white')
	} 

	if(p2t1 == '') {
	} else if (parseInt(p1s1bottom) > parseInt(p2t1top)){
		p1t1 = p2t1
		p1s1right = p2t1right
		p1t1top = p2t1top
		$('#t1').removeClass('animated flip')
		$('#t1').addClass('animated flip').css('border','2px solid white')
		$('#blue').html(++bs)
			$('#red').html(--rs)

	} else if (parseInt(p1s1bottom) < parseInt(p2t1top)){
		p2s1 = p1s1
		p2s1top = p1s1top
		p2s1right = p1s1right
		p2s1bottom = p1s1bottom
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s1').removeClass('animated flip')
		$('#s1').addClass('animated flip').css('border','2px solid white')
	} 



} else if ($('#s1').html() == p2s1) {

		if(p1f1 == '') {
	}else if (parseInt(p2s1top) > parseInt(p1f1bottom)){
		p2f1 = p1f1
		p2f1right = p1f1right
		p2f1bottom = p1f1bottom

		$('#f1').removeClass('animated flip')
		$('#f1').addClass('animated flip').css('border','2px solid red')
		$('#blue').html(--bs)
			$('#red').html(++rs)
	} else if (parseInt(p2s1top) < parseInt(p1f1bottom)){
		p1s1 = p2s1
		p1s1right = p2s1right
		p1s1bottom = p2s1bottom
		p1s1top = p2s1top
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s1').removeClass('animated flip')
		$('#s1').addClass('animated flip').css('border','2px solid white')
	}

	if(p1s2 == '') {
	} else if (parseInt(p2s1right) > parseInt(p1s2left)){
		p2s2 = p1s2
		p2s2top = p1s2top
		p2s2left = p1s2left
		p2s2right = p1s2right
		p2s2bottom = p1s2bottom
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid white')
		$('#blue').html(--bs)
			$('#red').html(++rs)

	} else if (parseInt(p2s1right) < parseInt(p1s2left)){
		p1s1 = p2s1
		p1s1right = p2s1right
		p1s1top = p2s1top
		p1s1bottom = p2s1bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s1').removeClass('animated flip')
		$('#s1').addClass('animated flip').css('border','2px solid white')
	} 

	if(p1t1 == '') {
	} else if (parseInt(p2s1bottom) > parseInt(p1t1top)){
		p2t1 = p1t1
		p2s1right = p1t1right
		p2t1top = p1t1top
		$('#t1').removeClass('animated flip')
		$('#t1').addClass('animated flip').css('border','2px solid red')
		$('#blue').html(--bs)
			$('#red').html(++rs)

	} else if (parseInt(p2s1bottom) < parseInt(p1t1top)){
		p1s1 = p2s1
		p1s1top = p2s1top
		p1s1right = p2s1right
		p1s1bottom = p2s1bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s1').removeClass('animated flip')
		$('#s1').addClass('animated flip').css('border','2px solid white')
	}
}


})
$('#s2').click(()=> {  // -- > middle second box in battle field
	// checker of the same card on battle fields
	if (cardtaker == $('#t1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t2').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f1').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f2').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f4').html()) {
		alert('Select a new card')

	}else if (cardtaker == $('#s1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#s2').html()) {
		alert('Select a new card')
	}	else if (cardtaker == $('#s3').html()) {
		alert('Select a new card')
	} else {
		
	$('#s2').html(cardtaker);
	}

	if ($('#s2').html() == $('#p1ucard1').html()) {
		p1s2 = $('#s2').html();
		p1s2right = $('#s2 .right1').html();
		p1s2bottom = $('#s2 .bottom1').html();
		p1s2left = $('#s2 .left1').html();
		p1s2top = $('#s2 .top1').html();

	} else if ($('#s2').html() == $('#p1ucard2').html()) {
		p1s2 = $('#s2').html();
		p1s2right = $('#s2 .right1').html();
		p1s2bottom = $('#s2 .bottom1').html();
		p1s2left = $('#s2 .left1').html();
		p1s2top = $('#s2 .top1').html();

	}else if  ($('#s2').html() == $('#p1ucard3').html()) {
		p1s2 = $('#s2').html();
		p1s2right = $('#s2 .right1').html();
		p1s2bottom = $('#s2 .bottom1').html();
		p1s2left = $('#s2 .left1').html();
		p1s2top = $('#s2 .top1').html();	

	} else if ($('#s2').html() == $('#p1ucard4').html()) {
		p1s2 = $('#s2').html();
		p1s2right = $('#s2 .right1').html();
		p1s2left = $('#s2 .left1').html();	
		p1s2bottom = $('#s2 .bottom1').html();
		p1s2top = $('#s2 .top1').html();

	} else if ($('#s2').html() == $('#p1ucard5').html()) {
		p1s2 = $('#s2').html();
		p1s2right = $('#s2 .right1').html();
		p1s2left = $('#s2 .left1').html();
		p1s2bottom = $('#s2 .bottom1').html();
	}
	 // identifieer if the card is owner of player 1 
	else if ($('#s2').html() == $('#p2ucard1').html()) {
		p2s2 = $('#s2').html();
		p2s2right = $('#s2 .right2').html();
		p2s2bottom = $('#s2 .bottom2').html();
		p2s2left = $('#s2 .left2').html(); 
		p2s2top = $('#s2 .top2').html();
	} else if ($('#s2').html() == $('#p2ucard2').html()) {
		p2s2 = $('#s2').html();
		p2s2right = $('#s2 .right2').html();
		p2s2bottom = $('#s2 .bottom2').html(); 
		p2s2left = $('#s2 .left2').html();
		p2s2top = $('#s2 .top2').html();

	} else if ($('#s2').html() == $('#p2ucard3').html()) {
		p2s2 = $('#s2').html();
		p2s2right = $('#s2 .right2').html();
		p2s2bottom = $('#s2 .bottom2').html(); 
		p2s2left = $('#s2 .left2').html();
		p2s2top = $('#s2 .top2').html();

	} else if ($('#s2').html() == $('#p2ucard4').html()) {
		p2s2 = $('#s2').html();
		p2s2right = $('#s2 .right2').html();
		p2s2bottom = $('#s2 .bottom2').html(); 
		p2s2left = $('#s2 .left2').html();
		p2s2top = $('#s2 .top2').html();

	} else if ($('#s2').html() == $('#p2ucard5').html()) {
		p2s2 = $('#s2').html();
		p2s2right = $('#s2 .right2').html();
		p2s2bottom = $('#s2 .bottom2').html(); 
		p2s2left = $('#s2 .left2').html();
		p2s2top = $('#s2 .top2').html();
	}

	if (cardtaker == $('#p1ucard1').html()) {
			$('#p1ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p1ucard2').html()){

			$('#p1ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p1ucard3').html()){

			$('#p1ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard4').html()){

			$('#p1ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard5').html()){
			
			$('#p1ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} else if (cardtaker == $('#p2ucard1').html()) {
			$('#p2ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p2ucard2').html()){

			$('#p2ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p2ucard3').html()){

			$('#p2ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard4').html()){

			$('#p2ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard5').html()){

			$('#p2ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} 
if ($('#s2').html() == p1s2) {
	if(p2f2 == ''){

	}else if (parseInt(p1s2top) > parseInt(p2f2bottom)){
		p1f2 = p2f2
		p1f2left = p2f2left
		p1f2right = p2f2right
		p1f2bottom = p2f2bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#f2').removeClass('animated flip')
		$('#f2').addClass('animated flip').css('border','2px solid white')

	} else if (parseInt(p1s2top) < parseInt(p2f2bottom)) {
	
		p2s2 = p1s2
		p2s2left = p1s2left
		p2s2top = p1s2top
		p2s2right = p1s2right
		p2s2bottom =p1s2bottom
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid red')
	}

	if(p2s3 == ''){
		}if(parseInt(p1s2right) > parseInt(p1s3left)) {
			p1s3 = p2s3
			p1s3top = p2s3top
			p1s3bottom = p2s3bottom
			p1s3left = p2s3left
			$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s3').removeClass('animated flip')
		$('#s3').addClass('animated flip').css('border','2px solid white')

	} else if (parseInt(p1s2left) < parseInt(p2s1right)) {
		p2s2 = p1s2
		p2s2left = p1s2left
		p2s2top = p1s2top
		p2s2right = p1s2right
		p2s2bottom =p1s2bottom
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid red')
	} if(p2s1 == ''){
	} else if (parseInt(p1s2left) > parseInt(p2s1right)){
		p1s1 = p2s1
		p1s1right = p2s1right
		p1s1top = p2s1top
		p1s1bottom = p2s1bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s1').removeClass('animated flip')
		$('#s1').addClass('animated flip').css('border','2px solid white')

	}  else if (parseInt(p1s2left) < parseInt(p2s1right)) {
		p2s2 = p1s2
		p2s2left = p1s2left
		p2s2top = p1s2top
		p2s2right = p1s2right
		p2s2bottom =p1s2bottom
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid red')
	}
	
	 if(p1s2 == ''){
	} else if (parseInt(p1s2bottom) > parseInt(p2t2top)){
		p1t2 = p2t2
		p1t2right = p2s2right
		p1t2top = p2t2top
		p1t2right = p2s1right
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#t2').removeClass('animated flip')
		$('#t2').addClass('animated flip').css('border','2px solid white')

	}  else if (parseInt(p1s2left) < parseInt(p2t2right)) {
		p2s2 = p1s2
		p2s2left = p1s2left
		p2s2top = p1s2top
		p2s2right = p1s2right
		p2s2bottom =p1s2bottom
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid red')
	}

} else if ($('#s2').html() == p2s2){

	if(p1f2 == ''){

	}else if (parseInt(p2s2top) > parseInt(p1f2bottom)){

		p2f2 = p1f2
		p2f2left = p1f2left
		p2f2right = p1f2right
		p2f2bottom = p1f2bottom
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#f2').removeClass('animated flip')
		$('#f2').addClass('animated flip').css('border','2px solid red')

	} else if (parseInt(p2s2top) < parseInt(p1f2bottom)) {
		p1s2 = p2s2
		p1s2left = p2s2left
		p1s2top = p2s2top
		p1s2right = p2s2right
		p1s2bottom =p2s2bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid white')
	} else {

	}



	if(p1s3 == ''){
		}if(parseInt(p2s2right) > parseInt(p1s3left)) {
			p2s3 = p1s3
			p2s3top = p1s3top
			p2s3bottom = p1s3bottom
			p2s3left = p1s3left
			$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s3').removeClass('animated flip')
		$('#s3').addClass('animated flip').css('border','2px solid red')

	} else if (parseInt(p1s2left) < parseInt(p1s1right)) {
		p2s2 = p1s2
		p2s2left = p1s2left
		p2s2top = p1s2top
		p2s2right = p1s2right
		p2s2bottom =p1s2bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid white')
	} 

	if(p1s1 == ''){
	} else if (parseInt(p2s2left) > parseInt(p1s1right)){

		p2s1 = p1s1
		p2s1right = p1s1right
		p2s1top = p1s1top
		p2s1bottom = p1s1bottom
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s1').removeClass('animated flip')
		$('#s1').addClass('animated flip').css('border','2px solid red')

	}  else if (parseInt(p2s2left) < parseInt(p1s1right)) {
		p1s2 = p2s2
		p1s2left = p2s2left
		p1s2top = p2s2top
		p1s2right = p2s2right
		p1s2bottom =p2s2bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid white')
	}
	
	 if(p1t2 == ''){
	} else if (parseInt(p2s2bottom) > parseInt(p1t2top)){
			
		p2t2 = p1t2
		p2t2left = p1s2left
		p2t2top = p1t2top
		p2t2right = p1s1right
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#t2').removeClass('animated flip')
		$('#t2').addClass('animated flip').css('border','2px solid red')

	}  else if (parseInt(p2s2left) < parseInt(p1t2right)) {
		p1s2 = p2s2
		p1s2left = p2s2left
		p1s2top = p2s2top
		p1s2right = p2s2right
		p1s2bottom =p2s2bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid white')
	}
}


})
$('#s3').click(()=> { // -- > middle third box in battle field
	// checker of the same card on battle fields
	if (cardtaker == $('#t1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t2').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f1').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f2').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f4').html()) {
		alert('Select a new card')

	}else if (cardtaker == $('#s1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#s2').html()) {
		alert('Select a new card')
	}	else if (cardtaker == $('#s3').html()) {
		alert('Select a new card')
	} else {
		
	$('#s3').html(cardtaker);
	}

	if ($('#s3').html() == $('#p1ucard1').html()) {
		p1s3 = $('#s3').html();
		p1s3bottom = $('#s3 .bottom1').html();
		p1s3left = $('#s3 .left1').html();
		p1s3top = $('#s3 .top1').html();

	} else if ($('#s3').html() == $('#p1ucard2').html()) {
		p1s3 = $('#s3').html();
		p1s3bottom = $('#s3 .bottom1').html();
		p1s3left = $('#s3 .left1').html();
		p1s3top = $('#s3 .top1').html();

	}else if  ($('#s3').html() == $('#p1ucard3').html()) {
		p1s3 = $('#s3').html();
		p1s3bottom = $('#s3 .bottom1').html();
		p1s3left = $('#s3 .left1').html();
		p1s3top = $('#s3 .top1').html();	

	} else if ($('#s3').html() == $('#p1ucard4').html()) {
		p1s3 = $('#s3').html();
		p1s3left = $('#s3 .left1').html();	
		p1s3bottom = $('#s3 .bottom1').html()
		p1s3top = $('#s3 .top1').html();;

	} else if ($('#s3').html() == $('#p1ucard5').html()) {
		p1s3 = $('#s3').html();
		p1s3left = $('#s3 .left1').html();
		p1s3bottom = $('#s3 .bottom1').html();
		p1s3top = $('#s3 .top1').html();

	}
	 // identifieer if the card is owner of player 1 
	else if ($('#s3').html() == $('#p2ucard1').html()) {
		p2s3 = $('#s3').html();
		p2s3bottom = $('#s3 .bottom2').html();
		p2s3left = $('#s3 .left2').html(); 
		p2s3top = $('#s3 .top2').html();

	} else if ($('#s3').html() == $('#p2ucard2').html()) {
		p2s3 = $('#s3').html();
		p2s3bottom = $('#s3 .bottom2').html(); 
		p2s3left = $('#s3 .left2').html();
		p2s3top = $('#s3 .top2').html();	

	} else if ($('#s3').html() == $('#p2ucard3').html()) {
		p2s3 = $('#s3').html();
		p2s3bottom = $('#s3 .bottom2').html(); 
		p2s3left = $('#s3 .left2').html();
		p2s3top = $('#s3 .top2').html();
			
	} else if ($('#s3').html() == $('#p2ucard4').html()) {
		p2s3 = $('#s3').html();
		p2s3bottom = $('#s3 .bottom2').html(); 
		p2s3left = $('#s3 .left2').html();
		p2s3top = $('#s3 .top2').html();
			
	} else if ($('#s3').html() == $('#p2ucard5').html()) {
		p2s3 = $('#s3').html();
		p2s3bottom = $('#s3 .bottom2').html(); 
		p2s3left = $('#s3 .left2').html();
		p2s3top = $('#s3 .top2').html();	
	}


	if (cardtaker == $('#p1ucard1').html()) {
			$('#p1ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p1ucard2').html()){

			$('#p1ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p1ucard3').html()){

			$('#p1ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard4').html()){

			$('#p1ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard5').html()){
			
			$('#p1ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} else if (cardtaker == $('#p2ucard1').html()) {
			$('#p2ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p2ucard2').html()){

			$('#p2ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p2ucard3').html()){

			$('#p2ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard4').html()){

			$('#p2ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard5').html()){

			$('#p2ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} 
if($('#s3').html() == p1s3) {
	if (p2f3 == '') {

	} else if(parseInt(p1s3top) > parseInt(p2f3bottom)) {
		p1f3 = p2f3
		p1f3bottom = p2f3bottom
		p1f3left = p2f3left
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#f3').removeClass('animated flip')
		$('#f3').addClass('animated flip').css('border','2px solid white')
	} else if (parseInt(p1s3top) < parseInt(p2f3bottom)) {
		p2s3 = p1s3
		p2s3top = p1s3top
		p2s3left = p1s3left
		p2s3bottom = p1s3bottom
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s3').removeClass('animated flip')
		$('#s3').addClass('animated flip').css('border','2px solid red')
	}
	if (p2s2 == '' ) {

	}else if  (parseInt(p1s3left) > parseInt(p2s2right)) {
		p1s2 = p2s2
		p1s2left = p2s2left
		p1s2right = p2s2right
		p1s2top = p2s2top
		p1s2bottom = p2s2bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid white')

	} else if (parseInt(p1s3left) < parseInt(p2s2right)) {
		p2s3 = p1s3
		p2s3left =p1s3left
		p2s3top = p1s3top
		p2s3bottom = p1s3bottom
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s3').removeClass('animated flip')
		$('#s3').addClass('animated flip').css('border','2px solid red')
	}

	if(p2t3 = '') {

	} else if (parseInt(p1s3bottom)> parseInt(p2t3top)) {
		p1t3 = p2t3
		p1t3top =p2t3top
		p1t3left = p2t3left
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#t3').removeClass('animated flip')
		$('#t3').addClass('animated flip').css('border','2px solid white')


	} else if (parseInt(p1s3bottom) < parseInt(p2t3top)) {
		p2s3 = p1s3
		p2s3left =p1s3left
		p2s3top = p1s3top
		p2s3bottom = p1s3bottom
		$('#s3').removeClass('animated flip')
		$('#s3').addClass('animated flip').css('border','2px solid red')
		$('#blue').html(--bs)
			$('#red').html(++rs)
	}




} else if ($('#s3').html() == p2s3) {
	if (p1f3 == '') {

	} else if(parseInt(p2s3top) > parseInt(p1f3bottom)) {
		p2f3 = p1f3
		p2f3bottom = p1f3bottom
		p2f3left = p1f3left
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#f3').removeClass('animated flip')
		$('#f3').addClass('animated flip').css('border','2px solid red')
			
	} else if (parseInt(p2s3top) < parseInt(p1f3bottom)) {
		p1s3 = p2s3
		p1s3top = p2s3top
		p1s3left = p2s3left
		p1s3bottom = p2s3bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s3').removeClass('animated flip')
		$('#s3').addClass('animated flip').css('border','2px solid white')
	}
	if (p1s2 == '' ) {

	}else if  (parseInt(p2s3left) > parseInt(p1s2right)) {
		p2s2  = p1s2 
		p2s2left = p1s2left
		p2s2right  = p1s2right
		p2s2top  = p1s2top
		p2s2bottom = p1s2bottom
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid red')

	} else if (parseInt(p2s3left) < parseInt(p1s2right)) {
		p1s3 = p2s3
		p1s3left =p2s3left
		p1s3top = p2s3top
		p1s3bottom = p2s3bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s3').removeClass('animated flip')
		$('#s3').addClass('animated flip').css('border','2px solid white')
	}

	if(p1t3 = '') {

	} else if (parseInt(p2s3bottom)> parseInt(p1t3top)) {
		p2t3 = p1t3
		p2t3top =p1t3top
		p2t3left = p1t3left
		$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#t3').removeClass('animated flip')
		$('#t3').addClass('animated flip').css('border','2px solid red')


	} else if (parseInt(p2s3bottom) < parseInt(p1t3top)) {
		p1s3 = p2s3
		p1s3left = p2s3left
		p1s3top = p2s3top
		p1s3bottom = p2s3bottom
		$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s3').removeClass('animated flip')
		$('#s3').addClass('animated flip').css('border','2px solid white')
	}

}

})
$('#t1').click(()=> { // -- > bottom first box in battle field
	if (cardtaker == $('#t1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t2').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f1').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f2').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f4').html()) {
		alert('Select a new card')

	}else if (cardtaker == $('#s1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#s2').html()) {
		alert('Select a new card')
	}	else if (cardtaker == $('#s3').html()) {
		alert('Select a new card')
	} else {
		
	$('#t1').html(cardtaker);
	}

	if ($('#t1').html() == $('#p1ucard1').html()) {
		p1t1 = $('#t1').html();
		p1t1right = $('#t1 .right1').html();
		p1t1top = $('#t1 .top1').html();

	} else if ($('#t1').html() == $('#p1ucard2').html()) {
		p1t1 = $('#t1').html();
		p1t1right = $('#t1 .right1').html();
		p1t1top = $('#t1 .top1').html();

	}else if  ($('#t1').html() == $('#p1ucard3').html()) {
		p1t1 = $('#t1').html();
		p1t1right = $('#t1 .right1').html();
		p1t1top = $('#t1 .top1').html();	

	} else if ($('#t1').html() == $('#p1ucard4').html()) {
		p1t1 = $('#t1').html();
		p1t1right = $('#t1 .right1').html();
		p1t1top = $('#t1 .top1').html();	

	} else if ($('#t1').html() == $('#p1ucard5').html()) {
		p1t1 = $('#t1').html();
		p1t1right = $('#t1 .right1').html();
		p1t1top = $('#t1 .top1').html();
	}
	 // identifieer if the card is owner of player 1 
	else if ($('#t1').html() == $('#p2ucard1').html()) {
		p2t1 = $('#t1').html();
		p2t1right = $('#t1 .right2').html();
		p2t1top = $('#t1 .top2').html(); 

	} else if ($('#t1').html() == $('#p2ucard2').html()) {
		p2t1 = $('#t1').html();
		p2t1right = $('#t1 .right2').html(); 
		p2t1top = $('#t1 .top2').html();

	} else if ($('#t1').html() == $('#p2ucard3').html()) {
		p2t1 = $('#t1').html();
		p2t1right = $('#t1 .right2').html(); 
		p2t1top = $('#t1 .top2').html();

	} else if ($('#t1').html() == $('#p2ucard4').html()) {
		p2t1 = $('#t1').html();
		p2t1right = $('#t1 .right2').html(); 
		p2t1top = $('#t1 .top2').html();

	} else if ($('#t1').html() == $('#p2ucard5').html()) {
		p2t1 = $('#t1').html();
		p2t1right = $('#t1 .right2').html(); 
		p2t1top = $('#t1 .top2').html();
	}




	if (cardtaker == $('#p1ucard1').html()) {
			$('#p1ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p1ucard2').html()){

			$('#p1ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p1ucard3').html()){

			$('#p1ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard4').html()){

			$('#p1ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard5').html()){
			
			$('#p1ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} else if (cardtaker == $('#p2ucard1').html()) {
			$('#p2ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p2ucard2').html()){

			$('#p2ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p2ucard3').html()){

			$('#p2ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard4').html()){

			$('#p2ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard5').html()){

			$('#p2ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} 
		if($('#t1').html() == p1t1) {
		if(p2s1 == '') {

		}else if (parseInt(p1t1top) > parseInt(p2s1bottom)){
			p1s1bottom =p2s1bottom
			p1s1 = p2s1
			p1s1right = p2s1right
			p1s1top = p2s1top
			p1s1bottom = p2s1bottom
			$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s1').removeClass('animated flip')
		$('#s1').addClass('animated flip').css('border','2px solid white')

		} else if (parseInt(p1t1top) < parseInt(p2s1bottom)) {
			p2t1 = p1t1
			p2t1top =p1t1top
			p2t1right = p1t1right
			$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#t1').removeClass('animated flip')
		$('#t1').addClass('animated flip').css('border','2px solid red')
		}

		if(p2t2 == '') {

		}else if (parseInt(p1t1right) > parseInt(p2t2left)) {
			p1t2 = p2t2
			p1t2top = p2t2top
			p1t2left =p2t2left
			p1t2right= p2t2right
			$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#t2').removeClass('animated flip')
		$('#t2').addClass('animated flip').css('border','2px solid white')	
		} else if (parseInt(p1t1right) < parseInt(p2t2left)) {
			p2t1 = p1t1
			p2t1top =p1t1top
			p2t1right = p1t1right
			$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#t1').removeClass('animated flip')
		$('#t1').addClass('animated flip').css('border','2px solid red')
		}
	}else if ($('#t1').html() == p2t1){
		if(p1s1 == '') {

		}else if (parseInt(p2t1top) > parseInt(p1s1bottom)){
			p2s1bottom =p1s1bottom
			p2s1 = p1s1
			p2s1right = p1s1right
			p2s1top = p1s1top
			p2s1bottom = p1s1bottom
			$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s1').removeClass('animated flip')
		$('#s1').addClass('animated flip').css('border','2px solid red')

		} else if (parseInt(p2t1top) < parseInt(p1s1bottom)) {
			p1t1 = p2t1
			p1t1top =p2t1top
			p1t1right = p2t1right
			$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#t1').removeClass('animated flip')
		$('#t1').addClass('animated flip').css('border','2px solid white')
		}

		if(p1t2 == '') {

		}else if (parseInt(p2t1right) > parseInt(p1t2left)) {
			p2t2 = p1t2
			p2t2top = p1t2top
			p2t2left =p1t2left
			p2t2right= p1t2right
			$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#t2').removeClass('animated flip')
		$('#t2').addClass('animated flip').css('border','2px solid red')	
		} else if (parseInt(p2t1right) < parseInt(p1t2left)) {
			p1t1 = p2t1
			p1t1top =p2t1top
			p1t1right = p2t1right
			$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#t1').removeClass('animated flip')
		$('#t1').addClass('animated flip').css('border','2px solid white')
		}
	}

})
$('#t2').click(()=> { // -- > middle second box in battle field
	// checker of the same card on battle fields
	if (cardtaker == $('#t1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t2').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f1').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f2').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f4').html()) {
		alert('Select a new card')

	}else if (cardtaker == $('#s1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#s2').html()) {
		alert('Select a new card')
	}	else if (cardtaker == $('#s3').html()) {
		alert('Select a new card')
	} else {

	$('#t2').html(cardtaker);
	}


	if ($('#t2').html() == $('#p1ucard1').html()) {
		p1t2 = $('#t2').html();
		p1t2right = $('#t2 .right1').html();
		p1t2top = $('#t2 .top1').html();
		p1t2left = $('#t2 .left1').html();

	} else if ($('#t2').html() == $('#p1ucard2').html()) {
		p1t2 = $('#t2').html();
		p1t2right = $('#t2 .right1').html();
		p1t2top = $('#t2 .top1').html();
		p1t2left = $('#t2 .left1').html();

	}else if  ($('#t2').html() == $('#p1ucard3').html()) {
		p1t2 = $('#t2').html();
		p1t2right = $('#t2 .right1').html();
		p1t2top = $('#t2 .top1').html();
		p1t2left = $('#t2 .left1').html();	

	} else if ($('#t2').html() == $('#p1ucard4').html()) {
		p1t2 = $('#t2').html();
		p1t2right = $('#t2 .right1').html();
		p1t2left = $('#t2 .left1').html();	
		p1t2top = $('#t2 .top1').html();

	} else if ($('#t2').html() == $('#p1ucard5').html()) {
		p1t2 = $('#t2').html();
		p1t2right = $('#t2 .right1').html();
		p1t2left = $('#t2 .left1').html();
		p1t2top = $('#t2 .top1').html();
	}
	 // identifieer if the card is owner of player 1 
	else if ($('#t2').html() == $('#p2ucard1').html()) {
		p2t2 = $('#t2').html();
		p2t2right = $('#t2 .right2').html();
		p2t2top = $('#t2 .top2').html();
		p2t2left = $('#t2 .left2').html(); 

	} else if ($('#t2').html() == $('#p2ucard2').html()) {
		p2t2 = $('#t2').html();
		p2t2right = $('#t2 .right2').html();
		p2t2top = $('#t2 .top2').html(); 
		p2t2left = $('#t2 .left2').html();

	} else if ($('#t2').html() == $('#p2ucard3').html()) {
		p2t2 = $('#t2').html();
		p2t2right = $('#t2 .right2').html();
		p2t2top = $('#t2 .top2').html(); 
		p2t2left = $('#t2 .left2').html();

	} else if ($('#t2').html() == $('#p2ucard4').html()) {
		p2t2 = $('#t2').html();
		p2t2right = $('#t2 .right2').html();
		p2t2top = $('#t2 .top2').html(); 
		p2t2left = $('#t2 .left2').html();

	} else if ($('#t2').html() == $('#p2ucard5').html()) {
		p2t2 = $('#t2').html();
		p2t2right = $('#t2 .right2').html();
		p2t2top = $('#t2 .top2').html(); 
		p2t2left = $('#t2 .left2').html();
	}



	if (cardtaker == $('#p1ucard1').html()) {
			$('#p1ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p1ucard2').html()){

			$('#p1ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p1ucard3').html()){

			$('#p1ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard4').html()){

			$('#p1ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard5').html()){
			
			$('#p1ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker == $('#p2ucard1').html()) {
			$('#p2ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p2ucard2').html()){

			$('#p2ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p2ucard3').html()){

			$('#p2ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard4').html()){

			$('#p2ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard5').html()){

			$('#p2ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} 

if($('#t2').html() == p1t2) {
	if(p2s2 == ''){

		}else if(parseInt(p1t2top) > parseInt(p2s2bottom)){

			p1s2 = p2s2
			p1s2top = p2s2top
			p1s2right = p2s2right
			p1s2left = p2s2left
			p1s2bottom = p2s2bottom
			$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid white')
		} else if(parseInt(p1t2top) < parseInt(p2s2bottom)) {
			p2t2 = p1t2
			p2t2top = p1t2top
			p2t2right = p1t2right
			p2t2left = p1t2left
			$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#t2').removeClass('animated flip')
		$('#t2').addClass('animated flip').css('border','2px solid red')
		}

	if(p2t1 == ''){

		}else if (parseInt(p1t2left) > parseInt(p2t1right)) {
			p1t1 = p2t1
			p1t1right = p2t1right
			p1t1top = p2t1top
			$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#t1').removeClass('animated flip')
		$('#t1').addClass('animated flip').css('border','2px solid white')

		} else if(parseInt(p1t2left) < parseInt(p2t1right)) {
			p2t2 = p1t2
			p2t2top = p1t2top
			p2t2right = p1t2right
			p2t2left = p1t2left
			$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#t2').removeClass('animated flip')
		$('#t2').addClass('animated flip').css('border','2px solid red')
		}

		if(p2t3 == ''){
		} else if (parseInt(p1t2right) > parseInt(p2t3left)) {
			p1t3 = p2t3
			p1t3top = p2t3top
			p1t3left = p1t3left
			$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#t3').removeClass('animated flip')
		$('#t3').addClass('animated flip').css('border','2px solid white')
		} else if(parseInt(p1t2right) < parseInt(p2t3left)) {
			p2t2 = p1t2
			p2t2top = p1t2top
			p2t2right = p1t2right
			p2t2left = p1t2left
			$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#t2').removeClass('animated flip')
		$('#t2').addClass('animated flip').css('border','2px solid red')
		}
} else if ($('#t2').html() == p2t2){
	if(p1s2 == ''){

		}else if(parseInt(p2t2top) > parseInt(p1s2bottom)){

			p2s2 = p1s2
			p2s2top = p1s2top
			p2s2right = p1s2right
			p2s2left = p1s2left
			p2s2bottom = p1s2bottom
			$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#s2').removeClass('animated flip')
		$('#s2').addClass('animated flip').css('border','2px solid red')

		} else if(parseInt(p2t2top) < parseInt(p1s2bottom)) {

			p1t2 = p2t2
			p1t2top = p2t2top
			p1t2right = p2t2right
			p1t2left = p2t2left
			$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#t2').removeClass('animated flip')
		$('#t2').addClass('animated flip').css('border','2px solid white')
		}

		if(p1t1 == ''){

		}else if (parseInt(p2t2left) > parseInt(p1t1right)) {
			p2t1 = p1t1
			p2t1right = p1t1right
			p2t1top = p1t1top
			$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#t1').removeClass('animated flip')
		$('#t1').addClass('animated flip').css('border','2px solid red')

		} else if(parseInt(p2t2left) < parseInt(p1t1right)) {
			p1t2 = p2t2
			p1t2top = p2t2top
			p1t2right = p2t2right
			p1t2left = p2t2left
			$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#t2').removeClass('animated flip')
		$('#t2').addClass('animated flip').css('border','2px solid white')
		}

		if(p1t3 == ''){
		} else if (parseInt(p2t2right) > parseInt(p1t3left)) {
			p2t3 = p1t3
			p2t3top = p1t3top
			p2t3left = p1t3left
			$('#blue').html(--bs)
			$('#red').html(++rs)
		$('#t3').removeClass('animated flip')
		$('#t3').addClass('animated flip').css('border','2px solid red')
		} else if(parseInt(p2t2right) < parseInt(p1t3left)) {
			p1t2 = p2t2
			p1t2top = p2t2top
			p1t2right = p2t2right
			p1t2left = p2t2left
			$('#blue').html(++bs)
			$('#red').html(--rs)
		$('#t2').removeClass('animated flip')
		$('#t2').addClass('animated flip').css('border','2px solid white')
		}

	}
})
$('#t3').click(()=> {  // -- > bottom third box in battle field
	// checker of the same card on battle fields
	if (cardtaker == $('#t1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t2').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#t3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f1').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f2').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f3').html()) {
		alert('Select a new card')
	}
	else if (cardtaker == $('#f4').html()) {
		alert('Select a new card')

	}else if (cardtaker == $('#s1').html()) {
		alert('Select a new card')
	} else if (cardtaker == $('#s2').html()) {
		alert('Select a new card')
	}	else if (cardtaker == $('#s3').html()) {
		alert('Select a new card')
	} else {
		
	$('#t3').html(cardtaker);
	}

	if ($('#t3').html() == $('#p1ucard1').html()) {
		p1t3 = $('#t3').html();
		p1t3left = $('#t3 .left1').html();
		p1t3top = $('#t3 .top1').html();

	} else if ($('#t3').html() == $('#p1ucard2').html()) {
		p1t3 = $('#t3').html();
		p1t3left = $('#t3 .left1').html();
		p1t3top = $('#t3 .top1').html();

	}else if  ($('#t3').html() == $('#p1ucard3').html()) {
		p1t3 = $('#t3').html();
		p1t3left = $('#t3 .left1').html();
		p1t3top = $('#t3 .top1').html();	

	} else if ($('#t3').html() == $('#p1ucard4').html()) {
		p1t3 = $('#t3').html();
		p1t3left = $('#t3 .left1').html();			p1t3top = $('#t3 .top1').html();;

	} else if ($('#t3').html() == $('#p1ucard5').html()) {
		p1t3 = $('#t3').html();
		p1t3left = $('#t3 .left1').html();
		p1t3top = $('#t3 .top1').html();

	}
	 // identifieer if the card is owner of player 1 
	else if ($('#t3').html() == $('#p2ucard1').html()) {
		p2t3 = $('#t3').html();
		p2t3left = $('#t3 .left2').html(); 
		p2t3top = $('#t3 .top2').html();

	} else if ($('#t3').html() == $('#p2ucard2').html()) {
		p2t3 = $('#t3').html(); 
		p2t3left = $('#t3 .left2').html();
		p2t3top = $('#t3 .top2').html();	

	} else if ($('#t3').html() == $('#p2ucard3').html()) {
		p2t3 = $('#t3').html(); 
		p2t3left = $('#t3 .left2').html();
		p2t3top = $('#t3 .top2').html();
			
	} else if ($('#t3').html() == $('#p2ucard4').html()) {
		p2t3 = $('#t3').html(); 
		p2t3left = $('#t3 .left2').html();
		p2t3top = $('#t3 .top2').html();
			
	} else if ($('#t3').html() == $('#p2ucard5').html()) {
		p2t3 = $('#t3').html(); 
		p2t3left = $('#t3 .left2').html();
		p2t3top = $('#t3 .top2').html();	
	}




	if (cardtaker == $('#p1ucard1').html()) {
			$('#p1ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p1ucard2').html()){

			$('#p1ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p1ucard3').html()){

			$('#p1ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard4').html()){

			$('#p1ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p1ucard5').html()){
			
			$('#p1ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} else if (cardtaker == $('#p2ucard1').html()) {
			$('#p2ucard1') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		} else if (cardtaker ==  $('#p2ucard2').html()){

			$('#p2ucard2') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');

		} else if (cardtaker ==  $('#p2ucard3').html()){

			$('#p2ucard3') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard4').html()){

			$('#p2ucard4') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		}else if (cardtaker ==  $('#p2ucard5').html()){

			$('#p2ucard5') .css('opacity','0.1').css('transition','opacity 1s').css('transform' ,'scale(1,1)').css('transition','transform 1s');
		
		} 
if($('#t3').html() == p1t3) {

	 if (p2t2 == ''){

	 }else if (parseInt(p1t3left) > parseInt(p2t2right)){
	 	p1t2 = p2t2
	 	p1t2left = p2t2left
	 	p1t2right = p2t2right
	 	p1t2top = p2t2top
	 	$('#blue').html(++bs)
			$('#red').html(--rs)

	 $('#t2').removeClass('animated flip')
		$('#t2').addClass('animated flip').css('border','2px solid white')	
	 } else if(parseInt(p1t3left) < parseInt(p2t2right)) {
	 	p2t3top = p1t3top
	 	p2t3left = p1t3left
	 	p2t3 = p1t3 
	 	$('#blue').html(--bs)
			$('#red').html(++rs)
	 	$('#t3').removeClass('animated flip')
		$('#t3').addClass('animated flip').css('border','2px solid red')
	 }

	 if(p2s3 == ''){

	 }else if (parseInt(p1t3top) > parseInt(p2s3bottom)) {
	 	p1s3bottom = p2s3bottom
	 	p1s3top = p2s3top
	 	p1s3left = p2s3left
	 	p1s3 = p2s3
	 	$('#blue').html(++bs)
			$('#red').html(--rs)
	 	$('#s3').removeClass('animated flip')
		$('#s3').addClass('animated flip').css('border','2px solid white')


	 } else if(parseInt(p1t3top) < parseInt(p2s3bottom)) {
	 	p2t3top = p1t3top
	 	p2t3left = p1t3left
	 	p2t3 = p1t3 
	 	$('#blue').html(--bs)
			$('#red').html(++rs)
	 	$('#t3').removeClass('animated flip')
		$('#t3').addClass('animated flip').css('border','2px solid red')
	 }


}else if ($('#t3').html() == p2t3) {
	 if (p1t2 == ''){

	 }else if (parseInt(p2t3left) > parseInt(p1t2right)){

	 	p2t2 = p1t2
	 	p2t2left = p1t2left
	 	p2t2right = p1t2right
	 	p2t2top = p1t2top
	 	$('#blue').html(--bs)
		$('#red').html(++rs)
	 $('#t2').removeClass('animated flip')
		$('#t2').addClass('animated flip').css('border','2px solid red')

	 } else if(parseInt(p2t3left) < parseInt(p1t2right)) {
	 	p1t3top = p2t3top
	 	p1t3left = p2t3left
	 	p1t3 = p2t3 
	 	$('#blue').html(++bs)
			$('#red').html(--rs)
	 	$('#t3').removeClass('animated flip')
		$('#t3').addClass('animated flip').css('border','2px solid white')
	 }

	 if(p1s3 == ''){

	 }else if (parseInt(p2t3top) > parseInt(p1s3bottom)) {
	 	p2s3bottom = p1s3bottom
	 	p2s3top = p1s3top
	 	p2s3left = p1s3left
	 	p2s3 = p1s3
	 	$('#blue').html(--bs)
			$('#red').html(++rs)
	 	$('#s3').removeClass('animated flip')
		$('#s3').addClass('animated flip').css('border','2px solid white')


	 } else if(parseInt(p2t3top) < parseInt(p1s3bottom)) {
	 	p1t3top = p2t3top
	 	p1t3left = p2t3left
	 	p1t3 = p2t3 
	 	$('#blue').html(++bs)
			$('#red').html(--rs)
	 	$('#t3').removeClass('animated flip')
		$('#t3').addClass('animated flip').css('border','2px solid red')
	 }
}


})

$('#start').click(()=> {
	$('.player2card').css('opacity','0');
	$('#p1turn').show();
$('#p2turn').show();
})

$('#p1turn').hide();
$('#p2turn').hide();

$('#p1turn').click(()=>{

	$('#f1').removeClass('animated flip');
	$('#f2').removeClass('animated flip');
	$('#f3').removeClass('animated flip');
	$('#s1').removeClass('animated flip');
	$('#s2').removeClass('animated flip');
	$('#s3').removeClass('animated flip');
	$('#t1').removeClass('animated flip');
	$('#t2').removeClass('animated flip');
	$('#t3').removeClass('animated flip');

	$('.player1card').css('opacity','0');

	$('.player2card').css('opacity','1').css('transition','opacity 3s')


})

$('#p2turn').click(()=>{
	$('#f1').removeClass('animated flip');
	$('#f2').removeClass('animated flip');
	$('#f3').removeClass('animated flip');
	$('#s1').removeClass('animated flip');
	$('#s2').removeClass('animated flip');
	$('#s3').removeClass('animated flip');
	$('#t1').removeClass('animated flip');
	$('#t2').removeClass('animated flip');
	$('#t3').removeClass('animated flip');
	$('.player2card').css('opacity','0');
	$('.player1card').css('opacity','1').css('transition','opacity 3s')
})


