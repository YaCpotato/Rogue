var collision = function(){
    var Collider = [10][8];
    for(var i=0;i<Collider.length;i++){
        for(var j=0;j<Collider.length;j++){
            if(i==1 && (1<=j && j<=6)){
                Collider[i][j]=false
            }
            if(j==1 && (1<=i && i<=8)){
                Collider[i][j]=false
            }
            if(i==8 && (1<=j && j<=6)){
                Collider[i][j]=false
            }
            if(j==6 && (1<=i && i<=3)){
                Collider[i][j]=false
            }
            if(j==6 && (6<=i && i<=8)){
                Collider[i][j]=false
            }
            Collider[i][j] = true;
        }
    }
}

var collision = function(x,y,Collider){//移動先x,yと衝突判定のある座標配列
    var canGo = false;
    for(var i=0;i<Collider.length;i++){
        for(var j=0;j<Collider.length;j++){
            if(Collider[x][y]){
                this.canGo = true;
            }else{
                this.canGo = false;
            }
        }
    }
    return canGo;
}