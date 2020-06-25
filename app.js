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
    
    var grid = document.querySelector(".grid");

    for(let i=0;i<cards.length;i++){
        let newcard = document.createElement("img");
        newcard.setAttribute("src","images/default.png");
        newcard.setAttribute("id",i);
        newcard.setAttribute("onclick","flipCard");
        grid.appendChild(newcard);
    }
});