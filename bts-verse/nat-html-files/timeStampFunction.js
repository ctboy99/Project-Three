function timeStamp() {
    months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
    var today = new Date(document.lastModified); 
    today.setTime((today.getTime()+(5000*60*60)) ) 
    with (today) { 
        let printThis = ("Refreshed "+getDate()+' '+months[getMonth()]+', '+(getYear()+1900)+' | '+(getHours()-5)+':'+getMinutes()+" EST") 
    }
    alert(printThis);
}