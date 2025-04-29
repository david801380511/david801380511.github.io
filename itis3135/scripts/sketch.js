let x = 0;  // Circle's x position

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);  
    
    // Draw blue circle at current x position
    fill(0, 0, 255);  // Blue color
    circle(x, 200, 50);  
    
    x += 2;
    
    if (x > width + 25) {
        x = -25;
    }
}
