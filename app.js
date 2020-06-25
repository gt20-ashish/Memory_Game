document.addEventListener("DOMContentLoaded",() => {
    var cards = [{
        name: "sample1",
        img:"images/m1.png",
    },{
        name: "sample1",
        img:"images/m1.png",
    },{
        name: "sample2",
        img:"images/m2.png",
    },{
        name: "sample2",
        img:"images/m2.png",
    },{
        name: "sample3",
        img:"images/m3.png",
    },{
        name: "sample3",
        img:"images/m3.png",
    }];
    cards.sort(()=>{return 0.5-Math.random()});
    var grid = document.querySelector(".grid");
    var cardChoosen = [];
    var cardChoosenId = [];
    var cardWon = []; 
    function createBoard(){
        for(let i=0;i<cards.length;i++){
            let newcard = document.createElement("img");
            newcard.setAttribute("src","images/default.png");
            newcard.setAttribute("id",i);
            newcard.addEventListener("click",flipCard);
            grid.appendChild(newcard);
        }
    }
    function checkMatch(){
        if(cardChoosen[0]===cardChoosen[1]){
            document.getElementById(cardChoosenId[0]).setAttribute('src',"images/blank.png");
            document.getElementById(cardChoosenId[0]).style.visibility="hidden";
            document.getElementById(cardChoosenId[1]).setAttribute('src',"images/blank.png");
            document.getElementById(cardChoosenId[1]).style.visibility="hidden";
            cardWon.push(cardChoosen[0]);
        }else{
            document.getElementById(cardChoosenId[0]).setAttribute('src',"images/default.png");
            document.getElementById(cardChoosenId[1]).setAttribute('src',"images/default.png");
        }
        if(cardWon.length==cards.length/2){
            document.getElementById("result").textContent=" Congratualation!!! you won";
            document.getElementById("result").style.color="green";
        }
       cardChoosen=[];
       cardChoosenId=[]; 
    }   

    function flipCard(){
        let cardSelected = this.getAttribute("id");
        if(cardChoosenId[0]!=cardSelected){
            cardChoosen.push(cards[cardSelected].name);
            cardChoosenId.push(cardSelected);
            this.setAttribute("src",cards[cardSelected].img);
            if(cardChoosen.length==2){
                setTimeout(checkMatch,500);
            }
        }
    }

    createBoard();
   
});
