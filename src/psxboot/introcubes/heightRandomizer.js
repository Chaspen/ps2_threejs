
pillars = 60;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomizeHeight() {
    var arr = [];
    while(arr.length < 60){
        var rand = Math.floor(Math.random() * 100) + 1;
        if(arr.indexOf(rand) === -1) arr.push(rand);
        scene.add( cube );
        cube.scale.set(2,rand,2);

        console.log(rand);
    }
    
}

num = 0
function iterate() {

    if (num < 60) {
        
        console.log(num)
        iterate()
        randomizeHeight()
    }
}


function GenerateCubes() {
    scene.add(cube);

}