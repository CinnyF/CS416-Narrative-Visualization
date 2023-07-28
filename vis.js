$("#to_step2").click(function() {
    hide('#step1');
    show('#step2');
})

$("#to_step3").click(function() {
    hide('#step2');
    show('#step3');
})

$("#start_over").click(function() {
    hide("#step3");
    show("#step1");
})

// utility functions
function show(step){
    $(step).show();
}

function hide(step){
    $(step).hide();
}
