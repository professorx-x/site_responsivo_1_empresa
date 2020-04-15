var altu = window.innerHeight;
var largu = window.innerWidth - ((window.innerWidth * 1) / 100 );
var para_slide = 0;	

$(document).ready(function()
{
	$('#ima_sli_1').css({"height": altu + "px", "width": largu + "px"}, 100);
	$('#ima_sli_2').css({"height": altu + "px", "width": largu + "px"}, 100);
	$('#ima_sli_3').css({"height": altu + "px", "width": largu + "px"}, 100);

	if(window.innerWidth > altu)
	{
		$("#corre_ima").css({"marginTop": "-" + altu + "px"})
		document.getElementById('ima_back').style.height = altu + 'px';	
		document.getElementById('ima_sli_1').style.height = altu + 'px';	
		document.getElementById('ima_sli_2').style.height = altu + 'px';	
		document.getElementById('ima_sli_3').style.height = altu + 'px';
	}
	else
	{
		$("#corre_ima").css({"marginTop": "-" + (altu -(altu / 3)) + "px"})
		document.getElementById('ima_back').style.height = (altu - (altu / 3)) + 'px';	
		document.getElementById('ima_sli_1').style.height = (altu - (altu / 3)) + 'px';	
		document.getElementById('ima_sli_2').style.height = (altu -( altu / 3)) + 'px';	
		document.getElementById('ima_sli_3').style.height = (altu - (altu / 3)) + 'px';
	}

	$(document).scroll(function()
	{
		var altu = $('#quem_somos').offset().top - 300;
		
		if($(document).scrollTop() > altu)
		{	
			$('header').css({'backgroundColor': 'rgba(0, 0, 0, 0.8)'}, 100);
		}
		else
		{
			$('header').css({'backgroundColor': 'rgba(0, 0, 0, 0)'}, 100);
		}
	})

	var videos = document.getElementById('videos').offsetWidth;
	var num_videos = document.getElementById('num_videos').value;
	var largura = Math.round(videos / num_videos);
	var altura = Math.round(largura / 2);
		
	if(num_videos == 1)
	{
		$('#frame1').css({'height': altura + 'px'}, 100);
	}
	else if(num_videos == 2)
	{
		for(var i = 1; i <= num_videos; i++)
		{
			$('#frame' + i).css({'marginLeft': '5%', 'width': '42.5%', 'height': altura + 'px'}, 100);
		}	
	}	
	else if(num_videos >= 3)
	{
		for(var i = 1; i <= num_videos; i++)
		{
			$('#frame' + i).css({'marginLeft': '5%', 'width': '26.6%', 'height': altura + 'px'}, 100);
		}	
	}	

	/*
	$("#cober_dark").mouseover(function()
	{
		//para_slide = 1;		
		alert(para_slide);
	});

	
	$("#cober_dark").mouseout(function()
	{
		//para_slide = 0;		
		alert(para_slide);
	});
	*/
})

var largura2 = window.innerWidth;
//var num_slide2 = 0;
//var slide_defini = "";
//var num_repete = 1;

function repetir_larg()
{
	if(largura2 != window.innerWidth)
	{
		largu = window.innerWidth - ((window.innerWidth * 1) / 100 );
		$("#corre_ima").css({"marginLeft": "-0px"}, 100);
		altu = window.innerHeight;
		var terco = window.innerHeight;
		
		if(window.innerWidth > altu)
		{
			$("#corre_ima").css({"marginTop": "-" + altu + "px"})
			document.getElementById('ima_back').style.height = altu + 'px';	
			$('#ima_sli_1').css({"height": altu + "px", "width": largu + "px"}, 100);
			$('#ima_sli_2').css({"height": altu + "px", "width": largu + "px"}, 100);
			$('#ima_sli_3').css({"height": altu + "px", "width": largu + "px"}, 100);
		}
		else
		{
			terco = altu - (altu / 3);
			//$("#corre_ima").css({"marginTop": "-" +  terco + "px"})
			document.getElementById('ima_back').style.height = terco + 'px';	
			
			$('#ima_sli_1').css({"height": terco + "px", "width": largu + "px"}, 100);
			$('#ima_sli_2').css({"height": terco + "px", "width": largu + "px"}, 100);
			$('#ima_sli_3').css({"height": terco + "px", "width": largu + "px"}, 100);
		}
		
		//alert(terco);

		largura2 = window.innerWidth;
	}
}

setInterval(repetir_larg, 1000);


// CARROSSEL

/*
function altura()
{
	if(altu != window.innerHeight)
	{
		altu = window.innerHeight;
		largu = window.innerWidth;
		$('#ima_sli_1').css({"height": altu + "px", "width": largu + "px"}, 100);
		$('#ima_sli_2').css({"height": altu + "px", "width": largu + "px"}, 100);
		$('#ima_sli_3').css({"height": altu + "px", "width": largu + "px"}, 100);
	}
}
	
setInterval(altura, 500);
*/


var para_slide = null;
var posi1 = 0;
var posi2 = 0;
var posi3 = 0;


function carrosel()
{
	$("#corre_ima").css({"marginLeft": "-" + largu + "px"}, 100);

	
	posi1 = 0;
	posi2 = window.innerWidth - ((window.innerWidth * 1) / 100);
	posi3 = (window.innerWidth - ((window.innerWidth * 1) / 100)) * 2;
	
	/*
	posi1 = 0;
	posi2 = window.innerWidth;
	posi3 = window.innerWidth * 2;
	*/

	if(largu == posi1)
	{
		largu = posi2;
	}
	else if(largu == posi2)
	{
		largu = posi3;
	}
	else if(largu == posi3)
	{
		largu = posi1;
	}

	
}

para_slide = setInterval(carrosel, 5000);


$(document).ready(function()
{
	para_slide;

	$("#cober_dark").mouseover(function()
	{
		clearInterval(para_slide);
	});

	$("#cober_dark").mouseout(function()
	{
		para_slide = setInterval(carrosel, 5000);
		para_slide;
	});
})





/**/


function muda_slide(num)
{
	if(num == 1)
	{
		largu = posi1;
		$("#corre_ima").css({"marginLeft": "-" + largu + "px"}, 100);
	}
	else if(num == 2)
	{
		largu = posi2;
		$("#corre_ima").css({"marginLeft": "-" + largu + "px"}, 100);
	}
	else if(num == 3)
	{
		largu = posi3;
		$("#corre_ima").css({"marginLeft": "-" + largu + "px"}, 100);
	}
}


function home()
{
	var altu = $('#ima_back').offset().top;
	$('body, html').animate({scrollTop: altu}, 800);
	//$('body, html').css({"scrollTop": altu}, 800);
}

function quem_somos()
{
	var altu = $("#quem_somos").offset().top - 90;
	$('body, html').animate({scrollTop: altu}, 800);
}

function servicos()
{
	var altu = $("#servico").offset().top - 90;
	$('body, html').animate({scrollTop: altu}, 800);	
}

function videos()
{
	var altu = $("#videos").offset().top - 90;
	$('body, html').animate({scrollTop: altu}, 800);	
}

function contatos()
{
	var altu = $("#contato").offset().top - 90;
	$('body, html').animate({scrollTop: altu}, 800);
}


var bot = 0;

function bot_menu()
{
	if(bot == 0)
	{
		$('#bot_menu').css({'transform': 'rotate(90deg)'}, 100);
		$('#sub_link_head').css({'display': 'block'}, 100);	

		setTimeout(function()
		{
			$('#sub_link_head').css({'opacity': '1', 'top': '100px'}, 100);		
		}, 500)

		bot = 1;
	}
	else if(bot == 1)
	{
		$('#sub_link_head').css({'opacity': '0', 'top': '50px'}, 100);	

		setTimeout(function()
		{
			$('#sub_link_head').css({'display': 'none'}, 100);		
			$('#bot_menu').css({'transform': 'rotate(0deg)'}, 100);
		}, 500)

		bot = 0;
	}	
}


function fechar()
{
	//alert("oi");
	if(bot == 1)
	{
		$('#sub_link_head').css({'opacity': '0', 'top': '50px'}, 100);	

		setTimeout(function()
		{
			$('#sub_link_head').css({'display': 'none'}, 100);		
			$('#bot_menu').css({'transform': 'rotate(0deg)'}, 100);
		}, 500)

		bot = 0;
	}
}

function verfi_larg()
{
	if(window.innerWidth > 800)
	{
		$('#sub_link_head').css({'opacity': '0', 'top': '50px'}, 100);	

		setTimeout(function()
		{
			$('#sub_link_head').css({'display': 'none'}, 100);		
			$('#bot_menu').css({'transform': 'rotate(0deg)'}, 100);
		}, 500)

		bot = 0;
	}
}

setInterval(verfi_larg, 1000);


var largura = window.innerWidth;

function larg_videos()
{
	if(largura != window.innerWidth)
	{
		var videos = document.getElementById('videos').offsetWidth;
		var num_videos = document.getElementById('num_videos').value;
		var largura2 = Math.round(videos / num_videos);
		var altura = Math.round(largura2 / 2);
		
		if(num_videos == 1)
		{
			$('#frame1').css({'height': altura + 'px'}, 100);
		}
		else
		{
			for(var i = 1; i <= num_videos; i++)
			{
				$('#frame' + i).css({'height': altura + 'px'}, 100);
			}	
		}	
		
		largura = window.innerWidth;
		//alert(altura);
	}
}	

setInterval(larg_videos, 1000);

/**/
