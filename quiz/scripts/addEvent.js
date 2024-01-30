window.onload = function() {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', myFunction('Moused over!')); // can update to nested function that returns closure
    x.addEventListener('click', mySecondFunction('Clicked!'));
    x.addEventListener('mouseout', myThirdFunction('Moused out!'));
}

function myFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
    // update to include arrow function
}

function mySecondFunction(msg) {
    return () =>document.getElementById('demo').textContent = msg;
}

function myThirdFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
}

// problem is that functions are not returning anything - need closure
