function setColor(set) {
        let changeColor = set;
        return () => { // added this to return
            if (changeColor) {
                let userColor = document.getElementById('color').value;
                document.getElementById('myPara').style.color = userColor;
            }
        }
        // when returning function we are returning  closure - can use arror or function ()
        // since not using this keyword
        
}

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = setColor(toggle);
}

// not returning anything - need to create nested function
// onClick is invoking function
