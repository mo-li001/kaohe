window.onload = function(lunbo){
    function $(param){
        if(arguments[1] == true){
            return document.querySelectorAll(param);
        }else{
            return document.querySelector(param);
        }
    }
    var $banner_left = $(".banner_left");
    var $banner_left_box1 = $(".banner_left_box1 ul li",true);
    var $banner_left_box2 = $(".banner_left_box2 ul");
    var $banner_left_box3 = $(".banner_left_box3");
    var $length = $banner_left_box1.length;
    
    var str = "";
    for(var i =0;i<$length;i++){
        if(i==0){
            str +="<li class='on'>"+(i+1)+"</li>";
        }else{
            str += "<li>"+(i+1)+"</li>";
        }
    }
    $banner_left_box2.innerHTML = str;
    
    var current = 0;
    
    var timer;
    timer = setInterval(go,1000);
    function go(){
        for(var j =0;j<$length;j++){
            $banner_left_box1[j].style.display = "none";
            $banner_left_box2.children[j].className = "";
        }
        if($length == current){
            current = 0;
        }
        $banner_left_box1[current].style.display = "block";
        $banner_left_box2.children[current].className = "on";
        current++;
    }
    
    for(var k=0;k<$length;k++){
        $banner_left_box1[k].onmouseover = function(){
            clearInterval(timer);
        }
        $banner_left_box1[k].onmouseout = function(){
            timer = setInterval(go,1000);
        }
    }
    for(var p=0;p<$banner_left_box3.children.length;p++){
        $banner_left_box3.children[p].onmouseover = function(){
            clearInterval(timer);
        };
        $banner_left_box3.children[p].onmouseout = function(){
            timer = setInterval(go,1000);
        }
    }
    
    for(var u =0;u<$length;u++){
        $banner_left_box2.children[u].index  = u;
        $banner_left_box2.children[u].onmouseover = function(){
            clearInterval(timer);
            for(var j=0;j<$length;j++){
                $banner_left_box1[j].style.display = "none";
                $banner_left_box2.children[j].className = "";
            }
            this.className = "on";
            $banner_left_box1[this.index].style.display = "block";
            current = this.index +1;
        }
        $banner_left_box2.children[u].onmouseout = function(){
            timer = setInterval(go,1000);
        }
    }
    
    $banner_left_box3.children[0].onclick = function(){
        back();
    }
    $banner_left_box3.children[1].onclick = function(){
        go();
    }
    function back(){
        for(var j =0;j<$length;j++){
            $banner_left_box1[j].style.display = "none";
            $banner_left_box2.children[j].className = "";
        }
        if(current == 0){
            current = $length;
        }
        $banner_left_box1[current-1].style.display = "block";
        $banner_left_box2.children[current-1].className = "on";
        current--;
    }
}