//UPDATED APRIL 23, 2022


iimDisplay("Sit back and relax â˜º ");

// ADD 0(zero) if 1 digit month
var year_month = "2023-09";

var macro = "CODE: ";
	macro += "VERSION BUILD=8970419 RECORDER=FX\n";
	macro += "TAB T=1\n";
	macro += "URL GOTO=https://www.gidapp.com/lottery/philippines/pcso/suertres/month/"+year_month+"\n";
	//macro += "SET !EXTRACT_TEST_POPUP NO\n";
	macro += "SET !EXTRACT NULL\n";
    //macro += "WAIT SECONDS = 3";
iimPlay(macro);


var resultClass = window.document.getElementsByClassName("result");
var swer_result = window.document.getElementsByTagName("span");
var swer_result_date = window.document.getElementsByTagName("time");
var loop = resultClass =  swer_result.length;
var date,res,x = 1;
var date_index = 1;
var res_index = 1;
var stringResults = "";

while(res_index < loop){

	date =  swer_result_date[date_index];

	iimSet("date", date.getAttribute("datetime"));	

	
	if(date.getAttribute("datetime").slice(0,date.getAttribute("datetime").length - 3) == year_month){
		stringResults += date.getAttribute("datetime")+"\n";  

		for(var i=0; i<3; i++){
	        res = swer_result[res_index].textContent;
			stringResults += res +" ";
            if(i<=3){
	    	    iimSet("res"+i, res);
            }
			res_index++;
			x++;
		}
		iimPlay("Auto-lotto/open");
		stringResults += "\n";
		date_index=date_index+2;
	}else{
		iimDisplay("Broken!");
		break;
	}
}
stringResults;



