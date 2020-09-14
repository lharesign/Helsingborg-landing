var eventTitles = ["Utställning: Josef Franks flora", "Utställning: Passion för pelargon", "Internationella suicidpreventionsdagen – 10 september", "Barnvagnsvisning i Från gryning till skymning – nordisk konst kring sekelskiftet 1900", "Soppteater", "DigiDax", "INSTÄLLT – Måndagscanasta", "Rita Digitalt", "Konsten att måla på riktigt", "Sagoyoga", "Må bra aktivitet för dig som anhörig", "Sagoyoga"];
var eventDates = ["4-20", "7-20", "Idag", "Idag", "Idag", "Idag", "14", "14", "14", "15", "15", "15"];
var eventTimeOrMonth = ["sep", "sep", "08:00", "10:00", "12:15", "14:00", "sep", "sep", "sep", "sep", "sep", "sep"]

//document.getElementById("event-page-number-1").addEventListener("click", eventPage1);
document.getElementById("event-page-number-2").addEventListener("click", eventPage2);
//document.getElementById("event-page-number-3").addEventListener("click", eventPage3);
//document.getElementById("event-page-number-4").addEventListener("click", eventPage4);

var eventTitleInfo = document.getElementsByClassName("event-description");
var eventDateInfo = document.getElementsByClassName("event-date");
var eventTimeInfo = document.getElementsByClassName("month-or-time");

function eventPage1() {
    
    var i = 0;
 

    for (i = 0; i < eventTitleInfo.length; i++) {
        eventTitleInfo[i] = eventTitles[i];
        eventDateInfo[i] = eventDates[i];
        eventTimeInfo[i] = eventTimeOrMonth[i];
    }
}

function eventPage2() {
    var i = 6;

    for (i = 6; i < (eventTitleInfo.length + 6); i++) {
        eventTitleInfo[i-6].innerHTML = "<i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i>" + eventTitles[i];
        eventDateInfo[i-6].innerHTML = eventDates[i];
        eventTimeInfo[i-6].innerHTML = eventTimeOrMonth[i];
    }
}