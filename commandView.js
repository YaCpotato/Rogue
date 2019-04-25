$(document).ready(function(){
    var com_elem = document.getElementById("box_1");
            var com = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    	    com.setAttribute("x", 0);
            com.setAttribute("y", 800);
            com.setAttribute("rx", 50);
    	    com.setAttribute("stroke", "white");
    	    com.setAttribute("stroke-width", 8);
    	    com.setAttribute("width",1000);
            com.setAttribute("height",200);
            com.setAttribute("fill", "black");
            com_elem.appendChild(com);
            console.log('commandView.js')
});