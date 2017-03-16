$(window).load(function() {
    
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
            $(".poster-content").removeClass("poster-content").addClass("xs-poster-content");
    }
    
    $(window).resize(function () {
    
        if (viewportWidth < 768) {
            $(".poster-content").removeClass("poster-content").addClass("xs-poster-content");
        }
    });
});