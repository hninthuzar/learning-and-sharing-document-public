function startLoader() {
    $(window)
    .on('load', function() {
        // $("#spinner-area").fadeOut("slow", 2500);
        $("#spinner-area").delay('700').fadeOut('2500');
    })
}
startLoader();