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
  update(calculate_date(this.value));
}

const width = 1100;
const height = 450;
const margin = 50;

async function init(date) {
    data = await d3.csv("ALL_DATA_filled_organized_2020_AS.csv");
    console.log(data['Confirmed'])
    const cleanData = data.map((d) => ({
        Province_State: d.Province_State,
        Date: d.Date,
        Confirmed: +d.Confirmed
    }));
    var filteredData = cleanData.filter(function(d) { return d.Date == date; });
    console.log(filteredData)

    var x = d3.scaleBand()
        .range([0, width])
        .domain(filteredData.map(function(d) { return d.Province_State; }))
        .padding(0.2);
    
    var y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(filteredData, function(d) { return d.Confirmed; })]);
    // console.log(d3.max(filteredData, function(d) { return d.Confirmed; }))
    
    var svg = d3.select('svg')

    svg.append('g')
       .attr('transform','translate('+margin+','+margin+')')
       .call(d3.axisLeft(y).tickFormat(d3.format('~s')));

    svg.append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x))
        .selectAll("text") 
            .attr("transform", "translate(-10,10)rotate(-90)")
            .style("text-anchor", "end")
            .style("font-size", 8);

    // console.log(filteredData.Confirmed);

    svg.selectAll(".bar")
        .data(filteredData)
        .enter().append("rect")
        .style("fill", "steelblue")
        .attr("class", "bar")
        .attr("x", function(d) {return x(d.Province_State) +  margin; })
        .attr("y", function(d) {return y(d.Confirmed);})
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.Confirmed); })
        .attr('transform', 'translate(0,' + margin + ')');
}

async function update(date) {
    
    data = await d3.csv("ALL_DATA_filled_organized_2020_AS.csv");
    console.log(data['Confirmed'])
    const cleanData = data.map((d) => ({
        Province_State: d.Province_State,
        Date: d.Date,
        Confirmed: +d.Confirmed
    }));
    
    var filteredData = cleanData.filter(function(d) { return d.Date == date; });
    
    d3.select("#demo").text(date);
    d3.select("svg")
    .select("g")
    .selectAll("rect")
    .remove()
    .exit()
    .data(filteredData)
        .enter().append("rect")
        .style("fill", "steelblue")
        .attr("class", "bar")
        .attr("x", function(d) {return x(d.Province_State) +  margin; })
        .attr("y", function(d) {return y(d.Confirmed);})
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.Confirmed); })
        .attr('transform', 'translate(0,' + margin + ')');
}









function calculate_date(num) {
  const initial_str = "2020-04-12";
  // const initial_day = initial_str.split('/')[2];
  var res_date;
  if (Number(num) >= 0 && Number(num) <= 18) {
    res_date = "2020-04-" + (Number(12) + Number(num)).toString()
  }
  else if (Number(num) >= 19 && Number(num) <= 49) {
    if ((Number(1) + Number(num) - Number(19)) < 10) {
      res_date = "2020-05-0" + (Number(1) + Number(num) - Number(19)).toString()
    }
    else {
      res_date = "2020-05-" + (Number(1) + Number(num) - Number(19)).toString()
    }
  }
  else if (Number(num) >= 50 && Number(num) <= 79) {
    if ((Number(1) + Number(num) - Number(50)) < 10) {
      res_date = "2020-06-0" + (Number(1) + Number(num) - Number(50)).toString()
    }
    else {
      res_date = "2020-06-" + (Number(1) + Number(num) - Number(50)).toString()
    }
  }
  else if (Number(num) >= 80 && Number(num) <= 110) {
    if ((Number(1) + Number(num) - Number(80)) < 10) {
      res_date = "2020-07-0" + (Number(1) + Number(num) - Number(80)).toString()
    }
    else {
      res_date = "2020-07-" + (Number(1) + Number(num) - Number(80)).toString()
    }
  }
  else if (Number(num) >= 111 && Number(num) <= 141) {
    if ((Number(1) + Number(num) - Number(111)) < 10) {
      res_date = "2020-08-0" + (Number(1) + Number(num) - Number(111)).toString()
    }
    else {
      res_date = "2020-08-" + (Number(1) + Number(num) - Number(111)).toString()
    }
  }
  else if (Number(num) >= 142 && Number(num) <= 171) {
    if ((Number(1) + Number(num) - Number(142)) < 10) {
      res_date = "2020-09-0" + (Number(1) + Number(num) - Number(142)).toString()
    }
    else {
      res_date = "2020-09-" + (Number(1) + Number(num) - Number(142)).toString()
    }
  }
  else if (Number(num) >= 172 && Number(num) <= 202) {
    if ((Number(1) + Number(num) - Number(172)) < 10) {
      res_date = "2020-10-0" + (Number(1) + Number(num) - Number(172)).toString()
    }
    else {
      res_date = "2020-10-" + (Number(1) + Number(num) - Number(172)).toString()
    }
  }
  else if (Number(num) >= 203 && Number(num) <= 232) {
    if ((Number(1) + Number(num) - Number(203)) < 10) {
      res_date = "2020-11-0" + (Number(1) + Number(num) - Number(203)).toString()
    }
    else {
      res_date = "2020-11-" + (Number(1) + Number(num) - Number(203)).toString()
    }
  }
  else {
    if ((Number(1) + Number(num) - Number(233)) < 10) {
      res_date = "2020-12-0" + (Number(1) + Number(num) - Number(233)).toString()
    }
    else {
      res_date = "2020-12-" + (Number(1) + Number(num) - Number(233)).toString()
    }
  }
  return res_date;
}
