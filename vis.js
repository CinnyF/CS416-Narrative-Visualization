const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;
slide = (direction) => {
    
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    );
}

d3.csv("ALL_DATA_filled_update.csv", (d) => {
    console.log(d)
})
