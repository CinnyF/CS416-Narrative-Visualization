const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;
slide = (direction) => {
    
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    );
}

// SLIDER 1
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output1.innerHTML = "2020-07-30";

slider1.oninput = function() {
  output1.innerHTML = calculate_date1(this.value);
  update1(calculate_date1(this.value));
}

// SLIDER 2
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = "2021-07-30";

slider2.oninput = function() {
  output2.innerHTML = calculate_date2(this.value);
  update2(calculate_date2(this.value));
}

// SLIDER 3
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = "2022-07-30";

slider3.oninput = function() {
  output3.innerHTML = calculate_date3(this.value);
  update3(calculate_date3(this.value));
}

const width = 1100;
const height = 450;
const margin = 50;

async function init(date) {
    // SCENE 1
    data1 = await d3.csv("ALL_DATA_filled_organized_2020_AS.csv");
    // console.log(data1['Confirmed'])
    const cleanData1 = data1.map((d) => ({
        Province_State: d.Province_State,
        Date: d.Date,
        Confirmed: +d.Confirmed
    }));
    var filteredData1 = cleanData1.filter(function(d) { return d.Date == "2020-07-30"; });
    // console.log(filteredData1)

    var x1 = d3.scaleBand()
        .range([0, width])
        .domain(filteredData1.map(function(d) { return d.Province_State; }))
        .padding(0.2);
    
    var y1 = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(cleanData1, function(d) { return d.Confirmed; })]);
    // .domain([0, d3.max(filteredData, function(d) { return d.Confirmed; })]);
    // console.log(d3.max(filteredData, function(d) { return d.Confirmed; }))

    // var confirmed_avg1 = d3.mean(cleanData1, function(d) { return d.Confirmed; });
    
    var svg1 = d3.select("#scene1");

    svg1.append('g')
       .attr('transform','translate('+margin+','+margin+')')
       .call(d3.axisLeft(y1).tickFormat(d3.format('~s')));

    svg1.append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x1))
        .selectAll("text") 
            .attr("transform", "translate(-10,10)rotate(-90)")
            .style("text-anchor", "end")
            .style("font-size", 8);
    
    svg1.append("text")
        .attr("class", "x axis")
        .attr("x", width / 2 + margin)
        .attr("y",  height + margin + 130)
        .style("font-size", 13)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .text("State");
    
    svg1.append("text")
        .attr("class", "y axis")
        .attr("transform", "rotate(-90)")
        .attr("y", 10)
        .attr("x", 0 - (height / 2))
        // .attr("dy", "2em")
        .style("font-size", 13)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .text("Number of Cases");

    // console.log(filteredData.Confirmed);

    svg1.selectAll(".bar")
        .data(filteredData1)
        .enter().append("rect")
        .style("fill", "white")
        .attr("class", "bar")
        .attr("x", function(d) {return x1(d.Province_State) +  margin; })
        .attr("y", function(d) {return y1(d.Confirmed);})
        .attr("width", x1.bandwidth())
        .attr("height", function(d) { return height - y1(d.Confirmed); })
        .attr('transform', 'translate(0,' + margin + ')');

    var confirmed_avg1 = d3.mean(cleanData1, function(d) { return d.Confirmed; });
    // console.log("-------")
    // console.log(confirmed_avg1)
    // console.log(y1(confirmed_avg1))
    // console.log("-------")
    svg1.append("line")
        .attr("x1", 0 + margin)
        .attr("y1", y1(confirmed_avg1) + margin)
        .attr("x2", width + margin)
        .attr("y2", y1(confirmed_avg1) + margin)
        .style("stroke", "white")
    
    svg1.append('text')
        .attr('x', width + margin)
        .attr('y', y1(confirmed_avg1) + margin)
        // .text('average:')
        .text(function(d) { return 'average: ' + '\n' + confirmed_avg1 + '\n' + 'cases' })
        .style('font-size', '12')
        .style('text-anchor', 'start')
        .style("fill", "white");


    
    // SCENE 2
    data2 = await d3.csv("ALL_DATA_filled_organized_2021_AS.csv");
    const cleanData2 = data2.map((d) => ({
        Province_State: d.Province_State,
        Date: d.Date,
        Confirmed: +d.Confirmed
    }));
    var filteredData2 = cleanData2.filter(function(d) { return d.Date == "2021-07-30"; });

    var x2 = d3.scaleBand()
        .range([0, width])
        .domain(filteredData2.map(function(d) { return d.Province_State; }))
        .padding(0.2);
    
    var y2 = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(cleanData2, function(d) { return d.Confirmed; })]);

    var svg2 = d3.select("#scene2")

    svg2.append('g')
       .attr('transform','translate('+margin+','+margin+')')
       .call(d3.axisLeft(y2).tickFormat(d3.format('~s')));

    svg2.append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x2))
        .selectAll("text") 
            .attr("transform", "translate(-10,10)rotate(-90)")
            .style("text-anchor", "end")
            .style("font-size", 8);
    
    svg2.append("text")
        .attr("class", "x axis")
        .attr("x", width / 2 + margin)
        .attr("y",  height + margin + 130)
        .style("font-size", 13)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .text("State");
    
    svg2.append("text")
        .attr("class", "y axis")
        .attr("transform", "rotate(-90)")
        .attr("y", 10)
        .attr("x", 0 - (height / 2))
        // .attr("dy", "2em")
        .style("font-size", 13)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .text("Number of Cases");

    svg2.selectAll(".bar")
        .data(filteredData2)
        .enter().append("rect")
        .style("fill", "white")
        .attr("class", "bar")
        .attr("x", function(d) {return x2(d.Province_State) +  margin; })
        .attr("y", function(d) {return y2(d.Confirmed);})
        .attr("width", x2.bandwidth())
        .attr("height", function(d) { return height - y2(d.Confirmed); })
        .attr('transform', 'translate(0,' + margin + ')');

    var confirmed_avg2 = d3.mean(cleanData2, function(d) { return d.Confirmed; });
    svg2.append("line")
        .attr("x1", 0 + margin)
        .attr("y1", y2(confirmed_avg2) + margin)
        .attr("x2", width + margin)
        .attr("y2", y2(confirmed_avg2) + margin)
        .style("stroke", "white")
    

    
    // SCENE 3
    data3 = await d3.csv("ALL_DATA_filled_organized_2022.csv");
    const cleanData3 = data3.map((d) => ({
        Province_State: d.Province_State,
        Date: d.Date,
        Confirmed: +d.Confirmed
    }));
    var filteredData3 = cleanData3.filter(function(d) { return d.Date == "2022-07-30"; });

    var x3 = d3.scaleBand()
        .range([0, width])
        .domain(filteredData3.map(function(d) { return d.Province_State; }))
        .padding(0.2);
    
    var y3 = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(cleanData3, function(d) { return d.Confirmed; })]);

    var svg3 = d3.select("#scene3")

    svg3.append('g')
       .attr('transform','translate('+margin+','+margin+')')
       .call(d3.axisLeft(y3).tickFormat(d3.format('~s')));

    svg3.append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x3))
        .selectAll("text") 
            .attr("transform", "translate(-10,10)rotate(-90)")
            .style("text-anchor", "end")
            .style("font-size", 8);

    svg3.append("text")
        .attr("class", "x axis")
        .attr("x", width / 2 + margin)
        .attr("y",  height + margin + 130)
        .style("font-size", 13)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .text("State");
    
    svg3.append("text")
        .attr("class", "y axis")
        .attr("transform", "rotate(-90)")
        .attr("y", 10)
        .attr("x", 0 - (height / 2))
        // .attr("dy", "2em")
        .style("font-size", 13)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .text("Number of Cases");

    svg3.selectAll(".bar")
        .data(filteredData3)
        .enter().append("rect")
        .style("fill", "white")
        .attr("class", "bar")
        .attr("x", function(d) {return x3(d.Province_State) +  margin; })
        .attr("y", function(d) {return y3(d.Confirmed);})
        .attr("width", x3.bandwidth())
        .attr("height", function(d) { return height - y3(d.Confirmed); })
        .attr('transform', 'translate(0,' + margin + ')');

    var confirmed_avg3 = d3.mean(cleanData3, function(d) { return d.Confirmed; });
    svg3.append("line")
        .attr("x1", 0 + margin)
        .attr("y1", y3(confirmed_avg3) + margin)
        .attr("x2", width + margin)
        .attr("y2", y3(confirmed_avg3) + margin)
        .style("stroke", "white")
}

async function update1(date) {

    d3.select("#scene1").selectAll("*").remove()
    
    data1 = await d3.csv("ALL_DATA_filled_organized_2020_AS.csv");
    // console.log(data1['Confirmed'])
    const cleanData1 = data1.map((d) => ({
        Province_State: d.Province_State,
        Date: d.Date,
        Confirmed: +d.Confirmed
    }));
    var filteredData1 = cleanData1.filter(function(d) { return d.Date == date; });
    // console.log(filteredData1)

    var x1 = d3.scaleBand()
        .range([0, width])
        .domain(filteredData1.map(function(d) { return d.Province_State; }))
        .padding(0.2);
    
    var y1 = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(cleanData1, function(d) { return d.Confirmed; })]);
    // .domain([0, d3.max(filteredData, function(d) { return d.Confirmed; })]);
    // console.log(d3.max(filteredData, function(d) { return d.Confirmed; }))
    
    var svg1 = d3.select("#scene1")

    svg1.append('g')
       .attr('transform','translate('+margin+','+margin+')')
       .call(d3.axisLeft(y1).tickFormat(d3.format('~s')));

    svg1.append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x1))
        .selectAll("text") 
            .attr("transform", "translate(-10,10)rotate(-90)")
            .style("text-anchor", "end")
            .style("font-size", 8);

    svg1.append("text")
        .attr("class", "x axis")
        .attr("x", width / 2 + margin)
        .attr("y",  height + margin + 130)
        .style("font-size", 13)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .text("State");
    
    svg1.append("text")
        .attr("class", "y axis")
        .attr("transform", "rotate(-90)")
        .attr("y", 10)
        .attr("x", 0 - (height / 2))
        // .attr("dy", "2em")
        .style("font-size", 13)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .text("Number of Cases");

    // console.log(filteredData.Confirmed);

    svg1.selectAll(".bar")
        .data(filteredData1)
        .enter().append("rect")
        .style("fill", "white")
        .attr("class", "bar")
        .attr("x", function(d) {return x1(d.Province_State) +  margin; })
        .attr("y", function(d) {return y1(d.Confirmed);})
        .attr("width", x1.bandwidth())
        .attr("height", function(d) { return height - y1(d.Confirmed); })
        .attr('transform', 'translate(0,' + margin + ')');

    var confirmed_avg1 = d3.mean(cleanData1, function(d) { return d.Confirmed; });
    svg1.append("line")
        .attr("x1", 0 + margin)
        .attr("y1", y1(confirmed_avg1) + margin)
        .attr("x2", width + margin)
        .attr("y2", y1(confirmed_avg1) + margin)
        .style("stroke", "white")
    
    
    // data = await d3.csv("ALL_DATA_filled_organized_2020_AS.csv");
    // // console.log(data['Confirmed'])
    // const cleanData = data.map((d) => ({
    //     Province_State: d.Province_State,
    //     Date: d.Date,
    //     Confirmed: +d.Confirmed
    // }));
    // var filteredData = cleanData.filter(function(d) { return d.Date == date; });

    
    // var x = d3.scaleBand()
    //     .range([0, width])
    //     .domain(filteredData.map(function(d) { return d.Province_State; }))
    //     .padding(0.2);
    
    // var y = d3.scaleLinear()
    //     .range([height, 0])
    //     .domain([0, d3.max(cleanData, function(d) { return d.Confirmed; })]);
    // // console.log(d3.max(filteredData, function(d) { return d.Confirmed; }))

    
    // var svg = d3.select("#scene1")

    // svg.append('g')
    //    .attr('transform','translate('+margin+','+margin+')')
    //    .call(d3.axisLeft(y).tickFormat(d3.format('~s')));

    // svg.append('g')
    //     .attr('transform','translate('+margin+','+(height+margin)+')')
    //     .call(d3.axisBottom(x))
    //     .selectAll("text") 
    //         .attr("transform", "translate(-10,10)rotate(-90)")
    //         .style("text-anchor", "end")
    //         .style("font-size", 8);

    // // console.log(filteredData.Confirmed);

    // svg.selectAll(".bar")
    //     .data(filteredData)
    //     .enter().append("rect")
    //     .style("fill", "steelblue")
    //     .attr("class", "bar")
    //     .attr("x", function(d) {return x(d.Province_State) +  margin; })
    //     .attr("y", function(d) {return y(d.Confirmed);})
    //     .attr("width", x.bandwidth())
    //     .attr("height", function(d) { return height - y(d.Confirmed); })
    //     .attr('transform', 'translate(0,' + margin + ')');
}

async function update2(date) {

    d3.select("#scene2").selectAll("*").remove()

    data2 = await d3.csv("ALL_DATA_filled_organized_2021_AS.csv");
    const cleanData2 = data2.map((d) => ({
        Province_State: d.Province_State,
        Date: d.Date,
        Confirmed: +d.Confirmed
    }));
    var filteredData2 = cleanData2.filter(function(d) { return d.Date == date; });

    var x2 = d3.scaleBand()
        .range([0, width])
        .domain(filteredData2.map(function(d) { return d.Province_State; }))
        .padding(0.2);
    
    var y2 = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(cleanData2, function(d) { return d.Confirmed; })]);

    var svg2 = d3.select("#scene2")

    svg2.append('g')
       .attr('transform','translate('+margin+','+margin+')')
       .call(d3.axisLeft(y2).tickFormat(d3.format('~s')));

    svg2.append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x2))
        .selectAll("text") 
            .attr("transform", "translate(-10,10)rotate(-90)")
            .style("text-anchor", "end")
            .style("font-size", 8);

    svg2.append("text")
        .attr("class", "x axis")
        .attr("x", width / 2 + margin)
        .attr("y",  height + margin + 130)
        .style("font-size", 13)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .text("State");
    
    svg2.append("text")
        .attr("class", "y axis")
        .attr("transform", "rotate(-90)")
        .attr("y", 10)
        .attr("x", 0 - (height / 2))
        // .attr("dy", "2em")
        .style("font-size", 13)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .text("Number of Cases");

    svg2.selectAll(".bar")
        .data(filteredData2)
        .enter().append("rect")
        .style("fill", "white")
        .attr("class", "bar")
        .attr("x", function(d) {return x2(d.Province_State) +  margin; })
        .attr("y", function(d) {return y2(d.Confirmed);})
        .attr("width", x2.bandwidth())
        .attr("height", function(d) { return height - y2(d.Confirmed); })
        .attr('transform', 'translate(0,' + margin + ')');

    var confirmed_avg2 = d3.mean(cleanData2, function(d) { return d.Confirmed; });
    svg2.append("line")
        .attr("x1", 0 + margin)
        .attr("y1", y2(confirmed_avg2) + margin)
        .attr("x2", width + margin)
        .attr("y2", y2(confirmed_avg2) + margin)
        .style("stroke", "white")
}

async function update3(date) {

    d3.select("#scene3").selectAll("*").remove()

    data3 = await d3.csv("ALL_DATA_filled_organized_2022.csv");
    const cleanData3 = data3.map((d) => ({
        Province_State: d.Province_State,
        Date: d.Date,
        Confirmed: +d.Confirmed
    }));
    var filteredData3 = cleanData3.filter(function(d) { return d.Date == date; });

    var x3 = d3.scaleBand()
        .range([0, width])
        .domain(filteredData3.map(function(d) { return d.Province_State; }))
        .padding(0.2);
    
    var y3 = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(cleanData3, function(d) { return d.Confirmed; })]);

    var svg3 = d3.select("#scene3")

    svg3.append('g')
       .attr('transform','translate('+margin+','+margin+')')
       .call(d3.axisLeft(y3).tickFormat(d3.format('~s')));

    svg3.append('g')
        .attr('transform','translate('+margin+','+(height+margin)+')')
        .call(d3.axisBottom(x3))
        .selectAll("text") 
            .attr("transform", "translate(-10,10)rotate(-90)")
            .style("text-anchor", "end")
            .style("font-size", 8);

    svg3.append("text")
        .attr("class", "x axis")
        .attr("x", width / 2 + margin)
        .attr("y",  height + margin + 130)
        .style("font-size", 13)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .text("State");
    
    svg3.append("text")
        .attr("class", "y axis")
        .attr("transform", "rotate(-90)")
        .attr("y", 10)
        .attr("x", 0 - (height / 2))
        // .attr("dy", "2em")
        .style("font-size", 13)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .text("Number of Cases");

    svg3.selectAll(".bar")
        .data(filteredData3)
        .enter().append("rect")
        .style("fill", "white")
        .attr("class", "bar")
        .attr("x", function(d) {return x3(d.Province_State) +  margin; })
        .attr("y", function(d) {return y3(d.Confirmed);})
        .attr("width", x3.bandwidth())
        .attr("height", function(d) { return height - y3(d.Confirmed); })
        .attr('transform', 'translate(0,' + margin + ')');

    var confirmed_avg3 = d3.mean(cleanData3, function(d) { return d.Confirmed; });
    svg3.append("line")
        .attr("x1", 0 + margin)
        .attr("y1", y3(confirmed_avg3) + margin)
        .attr("x2", width + margin)
        .attr("y2", y3(confirmed_avg3) + margin)
        .style("stroke", "white")
}





function calculate_date1(num) {
  const initial_str = "2020-07-30";
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

function calculate_date2(num) {
  const initial_str = "2021-07-30";
  var res_date;
  if (Number(num) >= 0 && Number(num) <= 30) {
      if ((Number(1) + Number(num) - Number(0)) < 10) {
          res_date = "2021-01-0" + (Number(1) + Number(num) - Number(0)).toString()
      }
      else {
          res_date = "2021-01-" + (Number(1) + Number(num) - Number(0)).toString()
      }
  }
  else if (Number(num) >= 31 && Number(num) <= 58) {
    if ((Number(1) + Number(num) - Number(31)) < 10) {
      res_date = "2021-02-0" + (Number(1) + Number(num) - Number(31)).toString()
    }
    else {
      res_date = "2021-02-" + (Number(1) + Number(num) - Number(31)).toString()
    }
  }
  else if (Number(num) >= 59 && Number(num) <= 89) {
    if ((Number(1) + Number(num) - Number(59)) < 10) {
      res_date = "2021-03-0" + (Number(1) + Number(num) - Number(59)).toString()
    }
    else {
      res_date = "2021-03-" + (Number(1) + Number(num) - Number(59)).toString()
    }
  }
  else if (Number(num) >= 90 && Number(num) <= 119) {
    if ((Number(1) + Number(num) - Number(90)) < 10) {
      res_date = "2021-04-0" + (Number(1) + Number(num) - Number(90)).toString()
    }
    else {
      res_date = "2021-04-" + (Number(1) + Number(num) - Number(90)).toString()
    }
  }
  else if (Number(num) >= 120 && Number(num) <= 150) {
    if ((Number(1) + Number(num) - Number(120)) < 10) {
      res_date = "2021-05-0" + (Number(1) + Number(num) - Number(120)).toString()
    }
    else {
      res_date = "2021-05-" + (Number(1) + Number(num) - Number(120)).toString()
    }
  }
  else if (Number(num) >= 151 && Number(num) <= 180) {
    if ((Number(1) + Number(num) - Number(151)) < 10) {
      res_date = "2021-06-0" + (Number(1) + Number(num) - Number(151)).toString()
    }
    else {
      res_date = "2021-06-" + (Number(1) + Number(num) - Number(151)).toString()
    }
  }
  else if (Number(num) >= 181 && Number(num) <= 211) {
    if ((Number(1) + Number(num) - Number(181)) < 10) {
      res_date = "2021-07-0" + (Number(1) + Number(num) - Number(181)).toString()
    }
    else {
      res_date = "2021-07-" + (Number(1) + Number(num) - Number(181)).toString()
    }
  }
  else if (Number(num) >= 212 && Number(num) <= 242) {
    if ((Number(1) + Number(num) - Number(212)) < 10) {
      res_date = "2021-08-0" + (Number(1) + Number(num) - Number(212)).toString()
    }
    else {
      res_date = "2021-08-" + (Number(1) + Number(num) - Number(212)).toString()
    }
  }
  else if (Number(num) >= 243 && Number(num) <= 272) {
    if ((Number(1) + Number(num) - Number(243)) < 10) {
      res_date = "2021-09-0" + (Number(1) + Number(num) - Number(243)).toString()
    }
    else {
      res_date = "2021-09-" + (Number(1) + Number(num) - Number(243)).toString()
    }
  }
  else if (Number(num) >= 273 && Number(num) <= 303) {
    if ((Number(1) + Number(num) - Number(273)) < 10) {
      res_date = "2021-10-0" + (Number(1) + Number(num) - Number(273)).toString()
    }
    else {
      res_date = "2021-10-" + (Number(1) + Number(num) - Number(273)).toString()
    }
  }
  else if (Number(num) >= 304 && Number(num) <= 333) {
    if ((Number(1) + Number(num) - Number(304)) < 10) {
      res_date = "2021-11-0" + (Number(1) + Number(num) - Number(304)).toString()
    }
    else {
      res_date = "2021-11-" + (Number(1) + Number(num) - Number(304)).toString()
    }
  }
  else {
    if ((Number(1) + Number(num) - Number(334)) < 10) {
      res_date = "2021-12-0" + (Number(1) + Number(num) - Number(334)).toString()
    }
    else {
      res_date = "2021-12-" + (Number(1) + Number(num) - Number(334)).toString()
    }
  }
  return res_date;
}

function calculate_date3(num) {
  const initial_str = "2022-07-30";
  var res_date;
  if (Number(num) >= 0 && Number(num) <= 30) {
      if ((Number(1) + Number(num) - Number(0)) < 10) {
          res_date = "2022-01-0" + (Number(1) + Number(num) - Number(0)).toString()
      }
      else {
          res_date = "2022-01-" + (Number(1) + Number(num) - Number(0)).toString()
      }
  }
  else if (Number(num) >= 31 && Number(num) <= 58) {
    if ((Number(1) + Number(num) - Number(31)) < 10) {
      res_date = "2022-02-0" + (Number(1) + Number(num) - Number(31)).toString()
    }
    else {
      res_date = "2022-02-" + (Number(1) + Number(num) - Number(31)).toString()
    }
  }
  else if (Number(num) >= 59 && Number(num) <= 89) {
    if ((Number(1) + Number(num) - Number(59)) < 10) {
      res_date = "2022-03-0" + (Number(1) + Number(num) - Number(59)).toString()
    }
    else {
      res_date = "2022-03-" + (Number(1) + Number(num) - Number(59)).toString()
    }
  }
  else if (Number(num) >= 90 && Number(num) <= 119) {
    if ((Number(1) + Number(num) - Number(90)) < 10) {
      res_date = "2022-04-0" + (Number(1) + Number(num) - Number(90)).toString()
    }
    else {
      res_date = "2022-04-" + (Number(1) + Number(num) - Number(90)).toString()
    }
  }
  else if (Number(num) >= 120 && Number(num) <= 150) {
    if ((Number(1) + Number(num) - Number(120)) < 10) {
      res_date = "2022-05-0" + (Number(1) + Number(num) - Number(120)).toString()
    }
    else {
      res_date = "2022-05-" + (Number(1) + Number(num) - Number(120)).toString()
    }
  }
  else if (Number(num) >= 151 && Number(num) <= 180) {
    if ((Number(1) + Number(num) - Number(151)) < 10) {
      res_date = "2022-06-0" + (Number(1) + Number(num) - Number(151)).toString()
    }
    else {
      res_date = "2022-06-" + (Number(1) + Number(num) - Number(151)).toString()
    }
  }
  else if (Number(num) >= 181 && Number(num) <= 211) {
    if ((Number(1) + Number(num) - Number(181)) < 10) {
      res_date = "2022-07-0" + (Number(1) + Number(num) - Number(181)).toString()
    }
    else {
      res_date = "2022-07-" + (Number(1) + Number(num) - Number(181)).toString()
    }
  }
  else if (Number(num) >= 212 && Number(num) <= 242) {
    if ((Number(1) + Number(num) - Number(212)) < 10) {
      res_date = "2022-08-0" + (Number(1) + Number(num) - Number(212)).toString()
    }
    else {
      res_date = "2022-08-" + (Number(1) + Number(num) - Number(212)).toString()
    }
  }
  else if (Number(num) >= 243 && Number(num) <= 272) {
    if ((Number(1) + Number(num) - Number(243)) < 10) {
      res_date = "2022-09-0" + (Number(1) + Number(num) - Number(243)).toString()
    }
    else {
      res_date = "2022-09-" + (Number(1) + Number(num) - Number(243)).toString()
    }
  }
  else if (Number(num) >= 273 && Number(num) <= 303) {
    if ((Number(1) + Number(num) - Number(273)) < 10) {
      res_date = "2022-10-0" + (Number(1) + Number(num) - Number(273)).toString()
    }
    else {
      res_date = "2022-10-" + (Number(1) + Number(num) - Number(273)).toString()
    }
  }
  else if (Number(num) >= 304 && Number(num) <= 333) {
    if ((Number(1) + Number(num) - Number(304)) < 10) {
      res_date = "2022-11-0" + (Number(1) + Number(num) - Number(304)).toString()
    }
    else {
      res_date = "2022-11-" + (Number(1) + Number(num) - Number(304)).toString()
    }
  }
  else {
    if ((Number(1) + Number(num) - Number(334)) < 10) {
      res_date = "2022-12-0" + (Number(1) + Number(num) - Number(334)).toString()
    }
    else {
      res_date = "2022-12-" + (Number(1) + Number(num) - Number(334)).toString()
    }
  }
  return res_date;
}
