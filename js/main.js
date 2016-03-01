// Constructor function to create a new restaurant and add it to the list
function Place(name, loc, desc) {
    this.name        = name;
    this.location    = loc;
    this.description = desc;
    places.push(this);
}

// Temporary Function to Add a new Place
/*function addPlace(name, loc, desc) {
    name = prompt("Enter the name of the restaurant")
    loc  = prompt("Enter the address")
    desc = prompt("Why should we go there?")
    new Place(String(name), String(loc), String(desc)); // creates a new Place object from inputs
}*/
// initialize empty places list
var places = [];

// Add some places
new Place("Popeyes", "924 W Antelope Dr, Layton, UT", "fast food")
new Place("Chili's", "1970 N 1000 W, Layton, UT", "normal sit down")
new Place("Pad Thai", "1986 N Hill Field Rd # 8, Layton, UT", "Thai food")
new Place("Kimchi House", "1868 N Hill Field Rd #103, Layton, UT", "Brad's best Korean")
new Place("Taste of India", "1664 Woodland Park Dr, Layton, UT", "Indian food")
new Place("Orlando's Mexican Restaurant", "141 Main St, Kaysville, UT", "Mexican")
new Place("Noodles & Company", "748 W Antelope Dr, Layton, UT", "oodles of noodles!")
new Place("Moe's", "930 W Antelope Dr, Layton, UT", "southwestern")
new Place("Boston's", "694 W Antelope Dr, Layton, UT", "Sports-bar serving pizzas, burgers, wings, salads, etc")
new Place("Buffalo Wild Wings", "695 Ring Rd, Layton, UT", "sports-bar")
new Place("Wendy's", "353 W 200 N, Kaysville, UT", "fast food")
new Place("La Puente", "842 Main St, Layton, UT", "Mexican")
new Place("Jimmy John's", "765 W Antelope Dr, Layton, UT", "sandwiches")
new Place("Chick-fil-A", "Layton Hills Mall, 1201 N Hill Field Rd, Layton, UT", "fast food")
new Place("Bajio's Mexican Grill", "743 King St, Layton, UT", "Mexican tin stuff")
new Place("Kim Long Vietnamese Cuisine", "1664 Woodland Park Dr, Layton, UT", "Vietnamese")
new Place("Garcia's Mexican Restaurant", "1075 N Hill Field Rd, Layton, UT", "Mexican")
new Place("Little Taste of Britain", "1095 Main St #4, Layton, UT", "Fish 'n chips & other British stuff")
new Place("Mandarin Cafe", "242 N 300 W, Kaysville, UT", "Well rated typical cheap Chinese food")
new Place("Cantina Southwestern Grill", "296 Main St, Layton, UT ", "well rated Mexican restaurant")
new Place("Crown Burger", "1986 Main St, Layton, UT", "fast food")
new Place("Rumbi Island Grill", "748 W Antelope Dr, Layton, UT ", "Hawaiian")
new Place("Kneaders Bakery & Cafe", "480 W Antelope Dr, Layton, UT ", "sandwiches & salads")
new Place("Five Guy's", "2065 N Harris Blvd, Layton, UT", "burgers")
new Place("China Hill", "2704 N Hill Rd, Layton, UT", "Chinese")
new Place("Big Sai's Hawaiian BBQ", "2704 N Hill Rd, Layton, UT", "Hawaiian")

// Print the name of each place in the list of places
/*for (var i=0; i < places.length; i++) {
 console.log(places[i].name);
 }*/  

var pick = ''

var pickLunch = function() {
    idx      = places[Math.floor(Math.random() * places.length)];
    pickName = idx.name
    pickLoc  = idx.location
    pickDesc = idx.description
};

$('#lunch-button').on('click', function(){
 //   $(".goTo").html("How about...</br>")
    pickLunch();
    $("#name").html(pickName);
    $("#loc").html(pickLoc);
    $("#desc").html(pickDesc);
    $("#lunch-button").html("Somewhere Else");
});

$('#see-list').click(function(){
    $(".list").html("");
    for (var i=0; i < places.length; i++) {
        $(".list").append("<li>" + places[i].name + "</li>");
    };
    $(".list").toggle();
});
