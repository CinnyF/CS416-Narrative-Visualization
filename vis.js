const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;
slide = (direction) => {
    
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    );
}

const states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Diamond Princess", "District of Columbia", "Florida", "Georgia", "Grand Princess", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
const width = 500;
const height = 500;

var x = d3.scaleBand().domain(states).range([0, width]);
var y = d3.scaleLinear().domain(0,100).range([height, 0]);
ds.select('svg').append('g').attr('transform','translate('+margin+','+margin+')').call(d3.axisLeft(y));
ds.select('svg').append('g').attr('transform','translate('+margin+','+margin+')').call(d3.axisBottom(x));



// async function init(type) {
//     data = await d3.csv("ALL_DATA_filled_update.csv");
//     d3.select('svg')
//     .append('g')
//         .attr('transform','translate('+margin+','+margin+')');
