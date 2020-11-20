function dateDiff_old(dIN) {
  var d1 = new Date(dIN);
  var d2 = new Date();
  var timeDiff = d1.getTime() - d2.getTime();
  var DaysDiff = timeDiff / (1000 * 3600 * 24);
  if (Math.round(DaysDiff) > 0) {
      return "(Noch " + Math.ceil(DaysDiff) + " Tage)";
  }
  else if (Math.ceil(DaysDiff) == 0) {
    return "(Heute!)";
  }
  else {
      return "(Seit " + Math.ceil(DaysDiff) + " Tag(en) überfällig)";
  }
}


function dateDiff(dIN)
{
  var d1 = new Date(dIN);
  var d2 = new Date();
  var timeDiff = d1.getTime() - d2.getTime();
  var DaysDiff = timeDiff / (1000 * 3600 * 24);
  if (DaysDiff > 0) {
        return "(Noch " + Math.ceil(DaysDiff) + " Tag(e).)";
  }
  else (DaysDiff < 0) 
  {
    if (DaysDiff <= -1) 
    { 
      return "(Seit " + Math.ceil(DaysDiff) + " Tag(en) abgelaufen.)";
    }
    else 
    {
    return "(HEUTE)"; 
    }
  }
 
}



function gesamteTage() {
  var startDate = new Date("08/30/2017"); 
  var endDate = new Date("06/26/2021"); 
  var dauer =  endDate.getTime() - startDate.getTime(); 
  var dauerdiff = dauer / ( 1000 * 3600 * 24 ); 
  return dauerdiff; 
} 

function restTage() { 
  var endDate = new Date("06/26/2021");
  var nowDate = new Date();  
  var dauer = endDate.getTime() - nowDate.getTime(); 
  var dauerdiff = dauer / ( 1000 * 3600 * 24 ); 
  return Math.round(dauerdiff);
}

function prozent(gTage, rTage) { 
var geschafft = gTage - rTage; 
return Math.round((100/gTage)*geschafft);
$("#pBar").css("width", Math.round((100/gTage)*geschafft) + "%");  


}

