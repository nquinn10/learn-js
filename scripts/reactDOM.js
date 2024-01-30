window.onload = function() {
    document.getElementById('myInp').onkeyup = enter;
    document.getElementById('myBtn').onclick = fillMsg;
    // when page loads - regualr function that retrieves HTML element
    // when even happens on that element - then we want to call function
    // defined below
}

function enter(event) {
    if(event.key === 'Enter') {
        document.getElementById('myBtn').click();
        // if enter - retirves button element and click
    }
}

function fillMsg() {
    document.getElementById('msg').textContent = 'Button Clicked!'
    // retrieves another element and sets text content in DOM
}
