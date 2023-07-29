const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;
slide = (direction) => {
    
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    );
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

const states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Diamond Princess", "District of Columbia", "Florida", "Georgia", "Grand Princess", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
const texty = [1,10,100,1000,10000,100000,1000000]
const width = 1100;
const height = 450;
const margin = 50;

var x = d3.scaleBand().domain(states).range([0, width]);
var y = d3.scaleLinear().domain(texty).range([height, 0]);
d3.select('svg').append('g').attr('transform','translate('+margin+','+margin+')').call(d3.axisLeft(y));
d3.select('svg')
    .append('g')
    .attr('transform','translate('+margin+','+(height+margin)+')')
    .call(d3.axisBottom(x))
    .selectAll("text") 
        .attr("transform", "translate(-10,10)rotate(-90)")
        .style("text-anchor", "end")
        .style("font-size", 8);

d3.csv("ALL_DATA_filled_organized_2020.csv", function(d) {
  return {
    // year: new Date(d.Date), // convert "Date" column to Date
    province_state: d.Province_State,
    confirmed: +d.Confirmed, // convert "Confirmed" column to number
    deaths: +d.Deaths // convert "Deaths" column to number
  };
};
//        , function(error, rows) {
//   console.log(rows);
// });



// async function init(type) {
//     data = await d3.csv("ALL_DATA_filled_update.csv");
//     d3.select('svg')
//     .append('g')
//         .attr('transform','translate('+margin+','+margin+')');
