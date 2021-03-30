(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var breString = planetsArray.join("<br>")
    var breakString ="Mercury\nVenus\nEarth\nMars\nJupiter\nSaturn\nUranus\nNeptune";
    console.log(breakString);
    console.log(breString);

    var unorderedString =
        "<ul>" +
        "<li>Mercury</li>\n" +
        "<li>Venus</li>" +
        "<li>Earth</li>" +
        "<li>Mars</li>" +
        "<li>Jupiter</li>" +
        "<li>Saturn</li>" +
        "<li>Uranus</li>" +
        "<li>Neptune</li>" +
        "</ul>";

    var unorderedArray = unorderedString.split(",");
    console.log(unorderedArray);

    for(var i = 0; i < 1; i ++) {
    var planetList= "<ul>";
        planetsArray.forEach(function (planet) {
            planetList += ("<li>" + planet + "</li>");
        });
    planetList += "</ul>";
    console.log(planetList);
    return(planetList);
    }




})();
