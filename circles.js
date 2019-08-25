// an object to store all sounds and colors
var data = {
    q: {
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    w: {
        sound: new Howl({
            src: ['sounds/clay.mp3']
        }),
        color: '#2ecc71'
    },
    e: {
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        }),
        color: '#3498db'
    },
    r: {
        sound: new Howl({
            src: ['sounds/corona.mp3']
        }),
        color: '#9b59b6'
    },
    t: {
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    y: {
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        }),
        color: '#16a085'
    },
    u: {
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    i: {
        sound: new Howl({
            src: ['sounds/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    o: {
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    p: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    a: {
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    s: {
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        }),
        color: '#e67e22'
    },
    d: {
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    f: {
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    g: {
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({
            src: ['sounds/splits.mp3']
        }),
        color: '#1abc9c'
    },
    k: {
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    l: {
        sound: new Howl({
            src: ['sounds/strike.mp3']
        }),
        color: '#3498db'
    },
    z: {
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    x: {
        sound: new Howl({
            src: ['sounds/timer.mp3']
        }),
        color: '#34495e'
    },
    c: {
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        }),
        color: '#16a085'
    },
    v: {
        sound: new Howl({
            src: ['sounds/veil.mp3']
        }),
        color: '#27ae60'
    },
    b: {
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        }),
        color: '#2980b9'
    },
    n: {
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        }),
        color: '#8e44ad'
    },
    m: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    }
}

// an empty array to store all new circles 
var circles = [];

// function to do something when a key is pressed 
function onKeyDown(event) {
    // if pressed key is present in the data object then run the following code otherwise don't. 
    if (data[event.key]) {
        var maxPoint = new Point(view.size.width, view.size.height);    // A point referring to the maximum height and width of the viewport size.
        var randomPoint = Point.random();                               // A random number.
        var point = maxPoint * randomPoint;                             // We multiply maxPoint and randomPoint to create a random point on the screen.
        var newCircle = new Path.Circle(point, 300);                    // We draw a circle on the random point created in the last line.
        data[event.key].sound.play();                                   // We call a sound file from the data object referring to the key pressed.
        newCircle.fillColor = data[event.key].color;                    // We call a color from the data object referring to the key pressed and gave it to the newCircle.
        circles.push(newCircle);                                        // We push the newCircle into the circles array.
    }
}

// this function runs the code inside it on every frame.
function onFrame(event) {

    // We loop through the circles array and change the color and scale of each element of the array on every frame.
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;                                  // Increment the hue of the color of the ith element by 1 on each frame
        circles[i].scale(.9);                                           // reduce the scale of the element to it's 90% on each frame.
        
        // remove the circle from the circles array after it's area becomes less than 1.
        if (circles[i].area < 1) {
            circles[i].remove();
            circles.splice(i, 1);
            console.log(circles);
        }
    }
}