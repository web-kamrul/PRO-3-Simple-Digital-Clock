function displayTime() {
    var d = new Date();
    var hour = d.getHours()
    var min = d.getMinutes()
    var sec = d.getSeconds()
    
    // AM or PM conditions
    var amORpm = "AM"
    if (hour >=12 )
    {
        amORpm = "PM"
    }
    if (hour > 12 ) {
        hour = hour -12
    }
    
    // 0 will apear with this coditions
    if (hour < 10) {
        hour = "0" + hour
    }
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    document.getElementById('clock').innerHTML = hour+":" + min + ":" + sec;
}
    //set time
    setInterval (displayTime, 1000);