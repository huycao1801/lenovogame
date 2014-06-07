
$(document).ready(function() {

	$('.btnPlay').click(function (e) {
		$('.bg-button-play').hide();
	});

	var answers = ['#a','#b','#c'];

	function listenEvent (item) {
        	$(answers[item]).click(function() {
        		for (var i = 0; i < answers.length; i++) {
        			$(answers[i] + ' span').removeClass("radiochecked");
        			$(answers[i] + ' span').addClass("radio");
        		}
        		$(answers[item] + ' span').addClass("radiochecked");
        	});
        }

	for( var i = 0; i < answers.length; i++) {
        	listenEvent(i);
    }

    //TODO
    /*
    13 - 38 : a8-50hd
    39 - 64,116 - 141,193 - 218,245 - 270, 349 14 : chuot
    65 - 90,271 - 296 : power
    91 - 115,219 - 244,297 - 322: lan sau
    141 - 166: trog
    167 - 192, 323 - 348: ly


    */

    var flag = false;
    $('#btnQuay').click(function(event) {
        if(flag) return;
        var deg = 1500 + Math.round(Math.random() * 1500);
        var r=deg;
        var realdeg = r%360;
        var css = '-webkit-transform: rotate(' + deg + 'deg);';
                $("#wheel").css("transform","rotate("+r+"deg)");
                $("#wheel").css("-moz-transform","rotate("+r+"deg)");
                $("#wheel").css("-webkit-transform","rotate("+r+"deg)");
                $("#wheel").css("-o-transform","rotate("+r+"deg)");

        setTimeout(function(){
            if((realdeg >= 39 && realdeg <= 64) ||  (realdeg >= 116 && realdeg <= 141) ||
                (realdeg >= 193 && realdeg <= 218) || (realdeg >= 245 && realdeg <= 270) ) {
                $("#phanthuong").attr('src','img/chuotwirless.png');
            }else if ((realdeg >= 91 && realdeg <= 115) ||  (realdeg >= 219 && realdeg <= 244) ||
                (realdeg >= 297 && realdeg <= 322)) {
                $("#phanthuong").attr('src','img/chucmaymanlansau.png');
            }else if ((realdeg >= 167 && realdeg <= 192) ||  (realdeg >= 323 && realdeg <= 348)) {
                $("#phanthuong").attr('src','img/trungly.png');
            }else if ((realdeg >= 65 && realdeg <= 90) ||  (realdeg >= 271 && realdeg <= 296)) {
                $("#phanthuong").attr('src','img/trungpowerbank.png');
            }else if ((realdeg >= 13 && realdeg <= 38)) {
                $("#phanthuong").attr('src','img/trungtablet.png');
            }else if ((realdeg >= 141 && realdeg <= 166)) {
                $("#phanthuong").attr('src','img/chucmaymanlansau.png');
            }else {
                $("#phanthuong").attr('src','img/chuotwirless.png');
            }
        }, 3000);
        flag= true;
    });



});