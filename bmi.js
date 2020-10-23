function calc(){
        var h = $("#height").val();
        h=h/100;
        var w = $("#weight").val();
        bmi=w/(h*h);
        bmi=bmi.toFixed(2);
        document.getElementById("rslt").innerHTML = "BMI : <b>" + bmi + "</b>";
        if(bmi<18.5){
        	document.getElementById("suggestn").innerHTML = "You gotta eat something, <br>Dying on an empty stomach isn't good. <img src='https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__20-512.png' style='width:80px; height:80px;'>";


        }
        else if(bmi>18.5 && bmi<25){
        	document.getElementById("suggestn").innerHTML = "Congrats, You are fine, just maintain it. <img src='https://cdn0.iconfinder.com/data/icons/emoji-3-5/64/thumbup_good_emoticon-512.png' style='width:60px; height:60px;'>";

        }
        else if(bmi>25 && bmi<30){
        	document.getElementById("suggestn").innerHTML = "You should consider dieting, its gonna help. <img src='https://www.flaticon.com/svg/static/icons/svg/168/168522.svg' style='width:80px; height:80px;'> ";

        }
        else if(bmi>30 && bmi<35){
        	document.getElementById("suggestn").innerHTML = "You should go out, exercise a lot and believe me, You'll be better. ";

        }
        else if(bmi>35){
        	document.getElementById("suggestn").innerHTML = "Hey, Have some mercy on food<br> and Call a doctor, <br>You really need it. <img src='https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__24-512.png' style='width:80px; height:80px;'>";

        }
        else{
        	document.getElementById("suggestn").innerHTML = "Wait a sec. What the hell? <img src='https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__9-512.png' style='width:60px; height:60px;'>";
        }
};

