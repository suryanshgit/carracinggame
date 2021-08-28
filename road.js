//show menu bar and road 
/*once clicked on menubar hide it and show dividers and enemy cars and red car. Make dividers move and 
enemy car move and let our red car move. Once our red car collides with enemy car then everything will be 
hidden but menu bar will be displayed*/


    var reqIdDivider;
    var reqIdEnemy;
    var start=true;
   

    //show tree function
    function showTrees(onlyOnce){ 
        if(onlyOnce){
        for(let i=0;i<3;i++){
        let div=document.createElement("div");
        div.setAttribute("class","treeDiv");
        document.querySelector(".container").appendChild(div);
        let img=document.createElement("img");
        img.setAttribute("class","tree");
        img.setAttribute("width","90px");
        img.setAttribute("height","70px");
        img.setAttribute("src","Images/tree6.jpg")
        div.appendChild(img);
        let left=Math.floor(Math.random()*300);
        let top=(240*i)+100;
       
        console.log(`Value of tree ${i+1} is top ${top}`);
        div.style.position="absolute";
        div.style.left=left+"px";
        div.style.top=top+"px";
        div.style.backgroundColor="green";
        div.style.width="90px";
        div.style.height="70px";
        //adding trees on the other side of the race course
        let div1=document.createElement("div");
        div1.setAttribute("class","treeDiv1");
        document.querySelector(".container").appendChild(div1);
        let img1=document.createElement("img");
        img1.setAttribute("class","tree1");
        img1.setAttribute("width","90px");
        img1.setAttribute("height","70px");
        img1.setAttribute("src","Images/tree6.jpg")
        div1.appendChild(img1);
        let left1=825+Math.floor(Math.random()*450);
        let top1=(260*i);
       
        console.log(`Value of tree ${i+1} is top ${top1}`);
        div1.style.position="absolute";
        div1.style.left=left1+"px";
        div1.style.top=top1+"px";
        div1.style.backgroundColor="green";
        div1.style.width="90px";
        div1.style.height="70px";
        }//for
    }//if

    }//showTrees

    //show divider function
    function showDivider(onlyOnce){
        console.log("calling the createDivider class");
        var road=document.querySelector(".road");
        var divider;
        if(onlyOnce){
        for(let i=0;i<7;i++){
           
            divider=document.createElement("div");
            divider.setAttribute("class","divider");
            road.appendChild(divider);
            let y= ((80*i)+(40*i)) ;
            divider.style.marginTop=y+"px"; 
        }
        }//if
    else{
        console.log("calling the createDivider class for second time");
        divider=document.querySelectorAll(".divider");
        console.log(divider);
        divider.forEach((item,index)=>{
            item.setAttribute("style","visibility:visible");
            let y= ((80*index)+(40*index)) ;
            item.style.marginTop=y+"px"; 
        });
    }//else
    }//showDivider
    //returning random color
    function randomColor(){
        function c(){
            let a=Math.floor(Math.random()*256).toString(16);
            return ("0"+a).substr(-2);
        }
        return "#"+c()+c()+c();
    }
    //we will write random color function with rgb
    function randomColor1(){
        function c(){
            return Math.floor(Math.random()*256);
        }
        let a=new Array();
        for(let i=0;i<3;i++)
        a.push(c());
        return a;
    }
    //showing the enemycars
    function showEnemyCars(onlyOnce){
        if(onlyOnce){
        for(let i=0;i<3;i++){
            var enemy=document.createElement("div");
            enemy.setAttribute("class","enemy");
            let a=randomColor1();
            enemy.style.backgroundColor="rgb("+a[0]+","+a[1]+","+a[2]+")";
            document.querySelector(".road").appendChild(enemy);
            // enemy.innerText=(i+1);
            enemy.style.display="flex";
            enemy.style.alignItems="center";
            enemy.style.justifyContent="center"; 
            let numPlate=document.createElement("div");
            // document.querySelector(".road").insertBefore(numPlate,document.querySelector(".road").childNodes[7+i]);
            numPlate.innerText=(i+1);
            numPlate.setAttribute("class","numPlate");
            enemy.appendChild(numPlate);
            //numPlate.setAttribute("style","z-index:2;"); 
            var img=document.createElement("img");
            img.setAttribute("src","Images/car2.png");
            enemy.appendChild(img);
            var enemyLeft=Math.floor(Math.random()*300);
            // let enemyTop=(70*i)+(110*i);
            let enemyTop=-300*i;
            enemy.style.left=enemyLeft+"px";
            enemy.style.top=enemyTop+"px";
            }
        }//if
        else{
            var enemyCar=document.querySelectorAll(".enemy");
            enemyCar.forEach((item,i)=>{
                item.setAttribute("style","visibility:visible");  
                let b=randomColor1();
                item.style.backgroundColor="rgb("+b[0]+","+b[1]+","+b[2]+")";
                let enemyLeft=Math.floor(Math.random()*300);
                let enemyTop=-400*i;
                item.style.left=enemyLeft+"px";
                item.style.top=enemyTop+"px";
            })
        }
    }//showEnemyCars
    const speed=5;
    //moving the dividers
    function moveDivider(){
       
        var divider1=document.querySelectorAll(".divider");
        divider1.forEach((item,index)=>{
        
        var a=item.style.marginTop;
        a=parseInt(a.substring(0,a.length-2));
        if((a+speed)>600){
            a=0;
        }
        item.style.marginTop=(a+speed)+"px";  
    });
    
    reqIdDivider=requestAnimationFrame(moveDivider);
   
    }
//move the redCar
function moveRedCar(){
    //Arrow key event arrow up , down ,left,right
    document.addEventListener("keyup",moveCar);
}
 //function to move a car 
 function moveCar(e){
    var disp=100;
    var displeft=100;
    var dispright=100;
    let top,left;
    let car=document.querySelector(".car");
    carStyle=window.getComputedStyle(car);

if(e.key=="ArrowUp")
{    
    top=carStyle.getPropertyValue("top");
    top=parseInt(top.substring(0,top.length-2));
    if((top-disp)>=0)
    car.style.top=(top-disp)+"px";
}

else if(e.key=="ArrowDown")
{   
    top=carStyle.getPropertyValue("top");
    top=parseInt(top.substring(0,top.length-2));
    if((top+disp)<602)
        car.style.top=(top+disp)+"px";
}
else if(e.key=="ArrowLeft")
{    
    left =carStyle.getPropertyValue("left");
    left=parseInt(left.substring(0,left.length-2));
    if((left-displeft)>=470)
        car.style.left=(left-displeft)+"px";
}
else if(e.key=="ArrowRight")
{    
    left =carStyle.getPropertyValue("left");
    left=parseInt(left.substring(0,left.length-2));
    if((left+dispright)<=800)
        car.style.left=(left+dispright)+"px";
    
}

};//moveCar
    //move the enemyCars
    function moveEnemyCars(){
       
         let enemy=document.querySelectorAll(".enemy");
        
        enemy.forEach((item,index)=>{
            let top=item.style.top;
            top=parseInt(top.substring(0,top.length-2));
        if((top+5)>600){
            top=-450;
            let enemyLeft=Math.floor(Math.random()*300);
            item.style.left=enemyLeft+"px";
        }
        item.style.top=(top+5)+"px"; 
    });
    if(scoreFlag)
    score++;
    document.querySelector(".score").innerText=`Score is ${score}`;

    reqIdEnemy=requestAnimationFrame(moveEnemyCars);
    collision();
   
    }//moveEnemyCars

    

    //check if car collides with enemy car
function collision(){
    let car1=document.querySelector(".car");
    let enemy1=document.querySelectorAll(".enemy");
    enemy1.forEach((item,index)=>{
        let carLeft=car1.getBoundingClientRect().left;
        let carRight=car1.getBoundingClientRect().right;
        let carTop=car1.getBoundingClientRect().top;
        let enemyTop=item.getBoundingClientRect().top;
        let enemyLeft=item.getBoundingClientRect().left;
        let enemyRight=item.getBoundingClientRect().right;
       

       
        if((enemyTop<carTop &&carTop<(enemyTop+90)||(enemyTop<(carTop+90) &&carTop<(enemyTop+90)))&&((carLeft<enemyLeft&& enemyLeft<carRight)||(carLeft<enemyRight &&enemyRight<carRight)))
        {
            console.log(`value of carLeft is ${carLeft} and carRight is ${carRight} amd ememyLeft is ${enemyLeft} and enemyRight is ${enemyRight} and 
            carTop is ${carTop} and enemyTop is ${enemyTop}`)
            console.log("Collission occured");
            document.querySelector(".msg").setAttribute("style","z-index:2");
            document.removeEventListener("keyup",moveCar);
            cancelAnimationFrame(reqIdDivider);
            cancelAnimationFrame(reqIdEnemy);
            
            scoreFlag=false;
            start=false;
           
            console.log(`value of statrt is ${start}`);
            let msg=document.querySelector(".msg");
            document.querySelector(".score").innerText=`Your Score is ${score}`;
            // msg.style.fontSize="5px";
            msg.style.display="flex";
            msg.style.alignItems="center";
            msg.style.justifyContent="center";
            msg.innerHTML=`<pre><p>You scored ${score}</p> Press again to restart the game<pre>`;
            msg.setAttribute("style","visibility:visible;z-index:2;")
        
        }
    })
    
    }//collission

    var score=0;
    
    var scoreFlag=true;
    var msg=document.createElement("div");
    msg.setAttribute("class","msg");
    
    document.querySelector(".container").appendChild(msg);
    document.querySelector(".score").innerText="Score";
    msg.innerText="Please click to start";
    var onlyOnce=true;
    //add event listener to the menu bar
    msg.addEventListener("click",()=>{
        score=0;
        scoreFlag=true;
        msg.setAttribute("style","visibility:hidden");
        document.querySelector(".car").setAttribute("style","visibility:visible")
        
        
        showDivider(onlyOnce);
        showEnemyCars(onlyOnce);
        showTrees(onlyOnce);
       
        
        moveRedCar();
        moveDivider();
        moveEnemyCars();
        
        
        onlyOnce=false;
    })
