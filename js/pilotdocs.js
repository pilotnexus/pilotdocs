require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        $.each($('ul.summary li'), function(i, el) {
            el.innerHTML = el.innerHTML.replace(/{(.*?)\|(.*?)?\|(.*?)?}/g, '<$1 $2>$3</$1>');
        });
    });
});
