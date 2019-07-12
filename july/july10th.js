function overlappingRectangles(rect1, rect2) { // this will work for positive triangles only.
    xvalue = 0;
    yvalue = 0;

    if (rect1[0].x <= rect2[0].x && rect1[1].x >= rect2[0].x) {
        xvalue = (Math.min(rect2[1].x, rect1[1].x)) - rect2[0].x
    }
    if (rect1[0].y <= rect2[0].y && rect1[1].y >= rect2[0].y) {
        yvalue = (Math.min(rect2[1].y, rect1[1].y)) - rect2[0].y
    }
    if (rect2[0].x <= rect1[0].x && rect2[1].x >= rect1[0].x) {
        xvalue = (Math.min(rect1[1].x, rect2[1].x)) - rect1[0].x
    }
    if (rect2[0].y <= rect1[0].y && rect2[1].y >= rect1[0].y) {

        yvalue = (Math.min(rect1[1].y, rect2[1].y)) - rect1[0].y
    }
    return (xvalue * yvalue)
}



console.log(overlappingRectangles(
    [{ x: -11, y: 2 }, { x: -1, y: 6 }],
    [{ x: -8, y: 2 }, { x: -4, y: 9 }]
))