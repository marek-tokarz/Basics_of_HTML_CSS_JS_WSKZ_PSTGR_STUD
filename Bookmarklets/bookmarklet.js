// https://www.diki.pl/slownik-angielskiego?q=ain%27t

try {
    term = document.selection.createRange().text;
} catch (exception) {
    try {
        term = getSelection() + '';
    } catch (exception) {}
}

if (term === '') {
    term = prompt('Wybierz pojęcie do przetłumaczenia', '');
}

if (term) {
    var height = window.innerHeight - 2;
    var topHeight = window.screen.availHeight - window.innerHeight;
    var leftWidth, width;

    if (window.innerWidth < 800) {
        leftWidth = window.innerWidth - 294;
        width = 240;
    } else if (window.innerWidth < 1024) {
        leftWidth = window.innerWidth - 328;
        width = 320;
    } else {
        leftWidth = window.innerWidth - 408;
        width = 400;
    }

    window.open('https://www.diki.pl/slownik-angielskiego?q=' + encodeURIComponent(term), '', 'height=' + height + ',width=' + width + ',left=' + leftWidth + ',top=' + topHeight);
}

/*
try 
{
    term = document.selection().createRange().text
} catch (exception)
    {
        try 
        {
        term = getSelection() + ''
        } catch (exception) {}
    }

if(term == '') {
    void(term = prompt('Wybierz poj%C4%99cie do przet%C5%82umaczenia', ''))
}

if(term) {
    var height = window.innerHeight - 2;
    var topHeight = window.screen.availHeight - window.innerHeight;

    if(window.innerWidth < 800) {
        var leftWifth = window.innerWidth - 294;
        var width = 240;
    } else if(window.innerWidth < 1024) {
        var leftWifth = window.innerWidth - 328;
        var width = 320;
    } else {
        var leftWifth = window.innerWidth - 408;
        var width = 400;
    }


window.open('https://www.diki.pl/slownik-angielskiego?q=%27+escape(term),%22%22,%27height=%27+height+%27,width=%27+width+%27,left=%27+leftWidth+%27,top=%27+topHeight);%20}
*/

// %27 = '
// %22 = "