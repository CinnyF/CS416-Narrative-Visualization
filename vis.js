$("#to_step2").click(function() {
    //d3.selectAll("path").remove();
    innerChart.selectAll("g").remove();
    hide('#step1');
    show('#step2');
})

$("#to_step3").click(function() {
    //d3.selectAll("path").remove();
    innerChart.selectAll("g").remove();
    hide('#step2');
    show('#step3');
})

$("#startover").click(function() {
    innerChart.selectAll("g").remove();
    hide("#step3");
    //d3.selectAll("path").remove();
    show("#step1");
})
