require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        $.each($('ul.summary li'), function(i, el) {
            el.innerHTML = el.innerHTML.replace(/{(.*?)\|(.*?)?\|(.*?)?}/g, '<$1 $2>$3</$1>');
        });
    });
});

//todo - ugly
var pinList = []; 

function hoverPin(desc_el, svg_el) {
    desc_el.addClass('active');
    if (svg_el) {
        svg_el.addClass('active');
    }
}

function unhoverPin(desc_el, svg_el) {
    desc_el.removeClass('active');
    if (svg_el) {
        svg_el.removeClass('active');
    }
}

function recursiveReplace(node, pInfo) {
    if (node.nodeType == 3) { // text node
        //node.nodeValue = node.nodeValue.replace(":pin:", pInfo.pinnr);
        //node.nodeValue = node.nodeValue.replace(":title:", pInfo.title);        
    } else if (node.nodeType == 1) { // element
        if ($(node).hasClass('pin')){
            if ($(node).hasClass('title')) {
                node.innerText = pInfo.title;
            } else if ($(node).hasClass('pinnr')) {
                node.innerText = pInfo.pinnr;
            }
        }
        $(node).contents().each(function () {
            recursiveReplace(this, pInfo);
        });
    }
}

function clickPin(pInfo, desc_el, svg_el) {
    var isSelected = desc_el.hasClass('selected');
    var details_el;

    var details_list = $("[id^=details_pin]");
    details_list.removeClass('selected');
    for (var i = 0; i < details_list.length; i++) {
        var nrs = details_list[i]['id'].substr(11).split('-');
        if ( (nrs.length === 1 && !isNaN(nrs[0]) && Number(nrs[0]) === pInfo.pinnr) || 
        (nrs.length === 2 && !isNaN(nrs[0]) && !isNaN(nrs[1]) && pInfo.pinnr >= Number(nrs[0]) && pInfo.pinnr <= Number(nrs[1]))) {
            details_el = $(details_list[i]);
            break;
        }
        console.log(nrs);
    }

    for(var i = 0;i<pinList.length;i++) {
        pinList[i].removeClass('selected');
    }

    if (!isSelected) {
        desc_el.addClass('selected');
        if (svg_el) {
            svg_el.addClass('selected');
        }
        if (details_el) {
            for (let i = 0; i < details_el.length; i++) {
                recursiveReplace(details_el[i], pInfo);
            }        
            details_el.addClass('selected');
        }
    }
}

function getPinNumber(id) {
    if (id) {
        var sidx = id.indexOf('pin');
        if (sidx != -1) {
            var pinNr = id.substr(sidx+3);
            if (!isNaN(pinNr)) {
                return Number(pinNr);
            }
        }
    }
   return null;
}

function addPin(p)
{
    var pin = getPinNumber(p.attr('id'));
    if (pin) {
        pinList.push(p);
        p[0].innerText;
        //find other elements
        var svgPin = $("#pin" + pin);
        if (svgPin) {
            pinList.push(svgPin);
        
            //add direction
            if (p.hasClass("pin-dir-out") || p.hasClass("pin-dir-in")) {            
                var t = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                var b = svgPin[0].getBBox();
                t.setAttribute("transform", "translate(" + (b.x+6) + " " + (b.y+20) + ")");
                if (p.hasClass("pin-dir-in")) {
                    t.setAttribute("class", "pin-dir-in");
                    t.setAttribute("points", "0,10 0,0 -3,3 0,0 3,3");
                } else {
                    t.setAttribute("class", "pin-dir-out");
                    t.setAttribute("points", "0,0 0,10 -3,7 0,10 3,7");
                }
                svgPin[0].parentNode.insertBefore(t, svgPin[0].nextSibling);
            }
        }
     
        //<i class="fa fa-arrow-down" aria-hidden="true"></i>
        //<i class="fa fa-arrow-up" aria-hidden="true"></i>

        // var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
        // var b = p.getBBox();
        // t.setAttribute("transform", "translate(" + (b.x+1) + " " + (b.y+25) + ")");
        // t.textContent = pin;
        // t.setAttribute("fill", "gray");
        // t.setAttribute("style", "font-size: 12px; ");
        // p.parentNode.insertBefore(t, p.nextSibling);
        var pInfo = {pinnr: pin, title: p[0].innerText};

        p.on('mouseover', function(e) {
            hoverPin(p, svgPin);
        });
        p.on('mouseout', function(e) {
            unhoverPin(p, svgPin);
        });
        p.on('click', function(e) {
            clickPin(pInfo, p, svgPin);
        });

        if (svgPin) {
            svgPin.on('mouseover', function(e) {
                hoverPin(p, svgPin);
            });
            svgPin.on('mouseout', function(e) {
                unhoverPin(p, svgPin);
            });
            svgPin.on('click',  function(e) {
                clickPin(pInfo, p, svgPin);
            });
        }
    }
}

function updatePins() {
    var paths = document.querySelectorAll(".pin.desc");
    for (var p in paths)
    {
        addPin($(paths[p]))
    }
}