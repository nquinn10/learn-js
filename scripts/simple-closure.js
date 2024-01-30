function makeFunc() {
    const name = 'Mozilla';
    function dispName() {
        console.log(name);
    }
    return dispName;
}

const f = makeFunc();
f();

// when call makeFunc we are getting dispName that is bound to mozilla
