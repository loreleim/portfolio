//container archive: home-container, map-container, timetable-container, card-container, info-container

window.mcScroller = function(target) {
    var scrollContainer = target;

    //locating the container
    do { scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //locating top of the div class
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    
    //scroll method to get to the location
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}