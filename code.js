function myFunction() {

    if(document.getElementById("visitwall-pagename").value == ""){
        document.getElementById("visitwall-pagename-erempty").style.display = "inline"
        document.getElementById("visitwall-pagename-erinvalid").style.display = "none"
    }

    else if(document.getElementById("visitwall-pagename").value != "Bambi's Owned Wall"){
        document.getElementById("visitwall-pagename-erinvalid").style.display = "inline"
        document.getElementById("visitwall-pagename-erempty").style.display = "none"
    }

    else if(document.getElementById("visitwall-pagename").value == "Bambi's Owned Wall"){
        document.getElementById("visitwall-pagename-erinvalid").style.display = "none"
        document.getElementById("visitwall-pagename-erempty").style.display = "none"

        document.getElementById("visitwall-pagename").value = ""
        
        window.open("wall.html", "_blank");

    }
}