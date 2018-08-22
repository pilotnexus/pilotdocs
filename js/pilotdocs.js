require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        $.each($('ul.summary li'), function(i, el){
            el.innerHTML = el.innerHTML.replace(/:([a-zA-Z0-9-]+)(\|([a-zA-Z0-9-]+))?:/g, '<i class="fa fa-$1 $3"></i>');
        });
    });
});
