const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;

slide = (direction) => {
    
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    );
}


d3.csv("ALL_DATA_filled_update.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].Province_State);
        console.log("loading data...")
    }
});
