// alert("hello")
function currentTime() {

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh === 0) {
        hh = 12;

    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;


    let time = hh + ":" + mm + ":" + ss + " " + session;
    

    if (hh < 04 && session === "PM") {
        let a = document.getElementById("wakeUp");
        a.innerText = "LET'S HAVE SOME LUNCH !!";
        a.style.textAlign = "center";
        let b = document.getElementById("img2");
        b.style.backgroundImage = "url('Images/after.png')";
        let c = document.getElementById("getup");
        c.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP"
    }
    else if (hh < 8 && hh >= 4 && session === "PM") {
        let a = document.getElementById("wakeUp");
        a.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        a.style.textAlign = "center";
        let b = document.getElementById("img2");
        b.style.backgroundImage = "url('Images/Evening.png')";
        let c = document.getElementById("getup");
        c.innerText = "GOOD Evening!!";
    }
    else if (hh < 11 && hh >= 8 && session === "PM") {
        let a = document.getElementById("wakeUp");
        a.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        a.style.textAlign = "center";
        let b = document.getElementById("img2");
        b.style.backgroundImage = "url('Images/Night.png')";
        let c = document.getElementById("getup");
        c.innerText = "GOOD NIGHT!!";
    }
    else if (hh > 1 && hh >= 7 && hh < 12 && session === "AM") {
        let a = document.getElementById("wakeUp");
        a.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        a.style.textAlign = "center";
        let b = document.getElementById("img2");
        b.style.backgroundImage = "url('Images/Morning.png')";
        let c = document.getElementById("getup");
        c.innerText = "GOOD MORNING!! WAKE UP !!";
    }
    document.getElementById("hh").innerText = hh;
    document.getElementById("mm").innerText = mm;
    document.getElementById("ss").innerText = ss;
    document.getElementById("interval").innerText = session;
    let t = setTimeout(function () { currentTime() }, 1000);
}
// 
function myFunction() {
    let w = document.getElementById("list").value;
    document.getElementById("wakeupTime").innerHTML = w;
    let x = document.getElementById("list2").value;
    document.getElementById("lunchTime").innerHTML = x;
    let y = document.getElementById("list3").value;
    document.getElementById("NapTime").innerText = y;
    let z = document.getElementById("list4").value;
    document.getElementById("NightTime").innerText = z;


    if (
		w == "0" && x == "0" && y == "0" && z == "0") {
		alert("⚠ Please set the time ⏳ before getting started !! 🙇‍♀️");
    }

  }

currentTime();
