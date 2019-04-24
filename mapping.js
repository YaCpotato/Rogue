var app=new Vue({
    el:'#app',
    data:{
      x:100,
      y:100,
      width:100,
      height:100,
    },
    created:function(){
      this.createMass()
      this.updateSVG()
    },
    methods:{
      Up:function(event){
        this.y=this.y-100;
        this.updateSVG()
        console.log('Up');
      },
      Down:function(event){
        this.y=this.y+100;
        this.updateSVG();
        console.log('Down');
      },
      Right:function(event){
        this.x=this.x+100;
        this.updateSVG()
        console.log('Up');
      },
      Left:function(event){
        this.x=this.x-100;
        this.updateSVG()
        console.log('Left');
      },
      createMass:function(){
        for(var i=0;i<8;i++){
          for(var j=0;j<8;j++){
            var svg_elem = document.getElementById("box_1");
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    	      svg.setAttribute("x", i*100);
    	      svg.setAttribute("y", j*100);
    	      svg.setAttribute("stroke", "black");
    	      svg.setAttribute("stroke-width", 5);
    	      svg.setAttribute("width",100);
          	svg.setAttribute("height",100);
          	svg.setAttribute("fill", "yellow");
          	svg_elem.appendChild(svg);
          }
        }
      },
      updateSVG:function(){
        $('#yuusya').remove();
      var svg_elem = document.getElementById("box_1");
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    	svg.setAttribute("x", this.x);
    	svg.setAttribute("y", this.y);
    	svg.setAttribute("stroke", "white");
    	svg.setAttribute("stroke-width", 5);
    	svg.setAttribute("width", this.width);
    	svg.setAttribute("height", this.height);
        svg.setAttribute("fill", "red");
        svg.setAttribute("id","yuusya");
    	svg_elem.appendChild(svg);
      }
    }
  })