$(document).ready(function(){
    var com_elem = document.getElementById("blackBox");
            var com = document.createElementNS("http://www.w3.org/2000/blackBox", "rect");
    	    com.setAttribute("x", 0);
    	    com.setAttribute("y", 850);
    	    com.setAttribute("stroke", "white");
    	    com.setAttribute("stroke-width", 5);
    	    com.setAttribute("width",1000);
            com.setAttribute("height",150);
            com.setAttribute("fill", "black");
            com_elem.appendChild(com);
              
});