const sharp = require("sharp")

/*  Large: 1024 * 768
    Medium: 640 * 480
    Small: 320 * 240
*/

sharp("/home/atle/Documents/arbejde/homepage3/img/web/pexels-pixabay-270360.avif")
    .resize({
        width: 640,
        height: 480,
        fit: "contain",
        position: "center",
        //background: { r: 55, g: 100, b: 220, alpha: 0.25 }
    })
    .toFile("/home/atle/Documents/arbejde/homepage3/img/web/pexels-pixabay-270360_medium.avif")
    .then(() => console.log("Færdig :)"));