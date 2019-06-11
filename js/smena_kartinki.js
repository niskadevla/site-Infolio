'use strict';
//	заменить src изображениея
	/*$(".changeImg").attr("src","img/download2.svg")*/


	// заменить src по клику один раз
//	$(".changeImg").bind("click", function(){

//	$(".changeImg").attr("src","img/download2.svg")
//		});


// заменить img по клику
//$("img").bind("click" function(){
//var src = ($(this ).attr("src") === "img/download1.svg")
//		? "img/download2.svg" : "img/download1.svg";
//		$(this).attr("src", src);
//});




// // заменить src по клику один раз
// 	$(".changeImg").hover( function(){
//
//         $(".changeImg").attr("src","img/download2.svg");
//
// 	});
// 	$(".changeImg").hover( function(){
//
//    $(".changeImg").attr("src","img/download1.svg");
//
// 	});





// заменить src по наведению мыши
   //Твердый книжный
	 $(document).ready(function () {


	$(".changeImg1").mouseenter( function(){

       // $(".changeImg1").attr("src","img/download2.svg");
			 $(".changeImg1").attr("src","img/Diser1_1.jpg");
			 $(".changeImg1").attr("style","max-width:30rem;")

	});
	$(".changeImg1").mouseleave( function(){

	    // $(".changeImg1").attr("src","img/download1.svg");
			$(".changeImg1").attr("src","price/knizhnyy-pereplet.png");
			$(".changeImg1").attr("style","max-height: 18rem;");
	});

	// Под нитку
	$(".changeImg2").mouseenter( function(){

       // $(".changeImg1").attr("src","img/download2.svg");
			 $(".changeImg2").attr("src","img/download2.svg");
			 $(".changeImg2").attr("style","max-width:30rem;");

	});
	$(".changeImg2").mouseleave( function(){

	    // $(".changeImg1").attr("src","img/download1.svg");
			$(".changeImg2").attr("src","price/pereplet-pod-nitku.png");
			$(".changeImg2").attr("style","max-height: 9rem;");
	});
//Мягкий
$(".changeImg3").mouseenter( function(){

		 // $(".changeImg1").attr("src","img/download2.svg");
		 $(".changeImg3").attr("src","img/Myagkiy1.jpg");
		 $(".changeImg3").attr("style","max-width:30rem;");

});
$(".changeImg3").mouseleave( function(){

		// $(".changeImg1").attr("src","img/download1.svg");
		$(".changeImg3").attr("src","price/myagkiy-pereplet.png");
		$(".changeImg3").attr("style","max-height: 15rem;");
});
});
