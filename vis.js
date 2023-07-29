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
output.innerHTML = "2020-05-12";

slider.oninput = function() {
  output.innerHTML = calculate_date(this.value);
}

const states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Diamond Princess", "District of Columbia", "Florida", "Georgia", "Grand Princess", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
const texty = [1,10,100,1000,10000,100000,1000000]
const width = 1000;
const height = 300;
const margin = 50;






var x = d3.scaleBand().domain(states).range([0, width]);
//var y = d3.scaleLinear().domain(texty).range([height, 0]);
var y = d3.scaleLinear().domain([0, 20000]).range([height, 0]);

// async function init(date) {
//     data = await d3.csv("ALL_DATA_filled_organized_2020.csv");

//     d3.select('svg')
//         .append('g')
//         .attr('transform','translate('+margin+','+margin+')')
//        .call(d3.axisLeft(y).tickFormat(d3.format('~s')));
//     d3.select('svg')
//         .append('g')
//         .attr('transform','translate('+margin+','+(height+margin)+')')
//         .call(d3.axisBottom(x))
//         .selectAll("text") 
//             .attr("transform", "translate(-10,10)rotate(-90)")
//             .style("text-anchor", "end")
//             .style("font-size", 8);
async function init(date) {
    data = await d3.csv("ALL_DATA_filled_organized_2020.csv");

    var x = d3.scaleBand()
        .range([0, width])
        .domain(data.map(function(d) { return d.Province_State; }))
        .padding(0.2);

    var y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, function(d) { return d.Confirmed; })]);

    var svg = d3.select('svg')
        .append('g')
        .attr('transform','translate('+margin+','+margin+')');

    svg.append('g')
       .call(d3.axisLeft(y).tickFormat(d3.format('~s')));

    svg.append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x))
        .selectAll("text") 
            .attr("transform", "translate(-10,10)rotate(-90)")
            .style("text-anchor", "end")
            .style("font-size", 8);

    var filteredData = data.filter(function(d) { return d.Date == '06-07-2020'; });

    svg.selectAll(".bar")
        .data(filteredData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.Province_State); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.Confirmed); })
        .attr("height", function(d) { return height - y(d.Confirmed); });
}







// d3.csv("ALL_DATA_filled_organized_2020.csv", function(d) {
//   console.log(d.Province_State);
//   return {
//     year: new Date(d.Date), // convert "Date" column to Date
//     province_state: d.Province_State,
//     confirmed: +d.Confirmed, // convert "Confirmed" column to number
//     deaths: +d.Deaths // convert "Deaths" column to number
//   };
// }, function(error, rows) {
//   console.log(rows);
// });

// var x = d3.scaleBand().domain(states).range([0, width]);
// var y = d3.scaleLinear().domain(texty).range([height, 0]);
// d3.select('svg').append('g').attr('transform','translate('+margin+','+margin+')').call(d3.axisLeft(y));






function calculate_date(num) {
  const initial_str = "2020-04-12";
  // const initial_day = initial_str.split('/')[2];
  var res_date;
  if (Number(num) >= 0 && Number(num) <= 19) {
    res_date = "2020-04-" + (Number(12) + Number(num)).toString()
  }
  else if (Number(num) >= 20 && Number(num) <= 50) {
    res_date = "2020-05-" + (Number(1) + Number(num) - Number(20)).toString()
  }
  else if (Number(num) >= 51 && Number(num) <= 80) {
    res_date = "2020-06-" + (Number(1) + Number(num) - Number(51)).toString()
  }
  else if (Number(num) >= 81 && Number(num) <= 111) {
    res_date = "2020-07-" + (Number(1) + Number(num) - Number(81)).toString()
  }
  else if (Number(num) >= 112 && Number(num) <= 142) {
    res_date = "2020-08-" + (Number(1) + Number(num) - Number(112)).toString()
  }
  else if (Number(num) >= 143 && Number(num) <= 172) {
    res_date = "2020-09-" + (Number(1) + Number(num) - Number(143)).toString()
  }
  else if (Number(num) >= 173 && Number(num) <= 203) {
    res_date = "2020-10-" + (Number(1) + Number(num) - Number(173)).toString()
  }
  else if (Number(num) >= 204 && Number(num) <= 233) {
    res_date = "2020-11-" + (Number(1) + Number(num) - Number(204)).toString()
  }
  else {
    res_date = "2020-12-" + (Number(1) + Number(num) - Number(234)).toString()
  }
  return res_date;
}


// async function init(type) {
//     data = await d3.csv("ALL_DATA_filled_update.csv");
//     d3.select('svg')
//     .append('g')
//         .attr('transform','translate('+margin+','+margin+')');
