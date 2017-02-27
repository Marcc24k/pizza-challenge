//alert("cowabunga!");

(function () {


    //GLOBAL TITLE PROPERTIES

    var name = "<span style = 'color: darkslategray; font-weight: bold '>Name:</span> ";
    var topping = "<span style = 'color: darkslategray; font-weight: bold '>Toppings:</span> ";
    var type = "<span style = 'color: darkslategray; font-weight: bold '>Type:</span> ";
    var price = "<span style = 'color: darkslategray; font-weight: bold '>Price:</span> ";
   
//    var meat = "<span style = 'color: darkred; font-weight: bold '>Meat</span> ";
//    var veggie = "<span style = 'color: forestgreen; font-weight: bold '>Price:</span> ";
//    var cheese = "<span style = 'color: darkorange; font-weight: bold '>Price:</span> ";








    function newYork() {
        //    alert("hello");

        //MAIN TITLE PROPERTIES
        var theSubway = "<span style = 'color: purple; font-weight: bold; font-family: Permanent Marker; '>Subway</span> ";
        var humpty = "<span style = 'color: purple; font-weight: bold; font-family: Permanent Marker; '>The Humpty</span> ";
        var theSultan = "<span style = 'color: purple; font-weight: bold; font-family: Permanent Marker; '>Sultan</span> ";




        var subway = {
            name: "Subway"
            , type: "<span style = 'color: forestgreen; font-weight: bold '>Veggie</span> "
            , topping: "Mushroom, Pepper, Olive"
            , a_variable_proxy: (function () {
                var price = "<span style = 'color: purple; font-weight: bold '>$13</span> ";
                return price;
            })()





        };


        var theHumpty = {
            name: "The Humpty"
            , type: "<span style = 'color: darkred; font-weight: bold '>Meat</span> "
            , topping: "Sausage, Pepperoni, Fried egg"
            , a_variable_proxy: (function () {
                var price = "<span style = 'color: purple; font-weight: bold '>$15</span> ";
                return price;
            })()

        }

        var sultan = {
            name: "Sultan"
            , type: "<span style = 'color:orange; font-weight: bold '>Cheese</span> "
            , topping: "Feta, Mozzarella, parmesian"
            , a_variable_proxy: (function () {
                var price = "<span style = 'color: purple; font-weight: bold '>$12</span> ";
                return price;
            })()

        }


        document.getElementById('subway').innerHTML = name + theSubway + "<br>" + type + subway.type + "<br>" + topping + subway.topping + "<br>" + price + subway.a_variable_proxy + "<br>";

        document.getElementById('theHumpty').innerHTML = name + humpty + "<br>" + type + theHumpty.type + "<br>" + topping + theHumpty.topping + "<br>" + price + theHumpty.a_variable_proxy + "<br>";

        document.getElementById('sultan').innerHTML = name + theSultan + "<br>" + type + sultan.type + "<br>" + topping + sultan.topping + "<br>" + price + sultan.a_variable_proxy + "<br>";

    }

    newYork();




    //CHICAGO PIZZA FUNCTIONS


    function chicago() {
        //        alert("hello");


        //MAIN TITLE VARIABLES
        var botanica = "<span style = 'color: darkred; font-weight: bold; font-family: Permanent Marker; '>The Botanica</span> ";
        var metro = "<span style = 'color: darkred; font-weight: bold; font-family: Permanent Marker; '>The Metro</span> ";
        var theGratzi = "<span style = 'color: darkred; font-weight: bold; font-family: Permanent Marker; '>Gratzi</span> ";




//PIZZA OBJECTS
        var theBotanica = {
            name: "The Botanica"
            , type:  "<span style = 'color: forestgreen; font-weight: bold '>Veggie</span> "
            , topping: "Mushroom, Onion, Olive, Bannana Peppers "
            , a_variable_proxy: (function () {
                var price = "<span style = 'color: darkred; font-weight: bold '>$13</span> ";
                return price;
            })()



        }


        var theMetro = {
            name: "The Metro"
            , type:  "<span style = 'color: darkred; font-weight: bold '>Meat</span> "
            , topping: "Sausage, Pepperoni, Bacon, Spam"
            , a_variable_proxy: (function () {
                var price = "<span style = 'color: darkred; font-weight: bold '>$16</span> ";
                return price;
            })()

        }

        var gratzi = {
            name: "Gratzi"
            , type:  "<span style = 'color: orange; font-weight: bold '>Cheese</span> "
            , topping: "Feta, Cowgirl Tam, Parmesian, "
            , a_variable_proxy: (function () {
                var price = "<span style = 'color: darkred; font-weight: bold '>$17</span> ";
                return price;
            })()

        }

//OBJECTS ARE PRINTED TO THE DOM HERE
        document.getElementById('theBotanica').innerHTML = name + botanica + "<br>" + type + theBotanica.type + "<br>" + topping + theBotanica.topping + "<br>" + price + theBotanica.a_variable_proxy + "<br>";

        document.getElementById('theMetro').innerHTML = name + metro + "<br>" + type + theMetro.type + "<br>" + topping + theMetro.topping + "<br>" + price + theMetro.a_variable_proxy + "<br>";

        document.getElementById('gratzi').innerHTML = name + theGratzi + "<br>" + type + gratzi.type + "<br>" + topping + gratzi.topping + "<br>" + price + gratzi.a_variable_proxy + "<br>";

    }

    chicago();

    //SAN FRAN PIZZA FUNCTIONS


    function sanFran() {
        //        alert("hello");



        //MAIN TITLE VARIABLES
        var theSolstice = "<span style = 'color: green; font-weight: bold; font-family: Permanent Marker;'>Solstice</span> ";
        var trollie = "<span style = 'color: green; font-weight: bold; font-family: Permanent Marker; '>The Trollie</span> ";
        var downHill = "<span style = 'color: green; font-weight: bold; font-family: Permanent Marker; '>Down Hill Jam</span> ";


//PIZZA OBJECTS
        var solstice = {
            name: "Solstice"
            , type:  "<span style = 'color: forestgreen; font-weight: bold '>Veggie</span> "
            , topping: "Mushroom, Onion, Basil, Oragano, Feta, Walnuts "
            , a_variable_proxy: (function () {
                var price = "<span style = 'color: green; font-weight: bold '>$15</span> ";
                return price;
            })()



        }


        var theTrollie = {
            name: "The Trollie"
            , type:  "<span style = 'color: darkred; font-weight: bold '>Meat</span> "
            , topping: "Sausage, Pepperoni, Bacon, Basil, Onion "
            , a_variable_proxy: (function () {
                var price = "<span style = 'color: green; font-weight: bold '>$14</span> ";
                return price;
            })()

        }

        var downHillJam = {
            name: "Down Hill Jam"
            , type:  "<span style = 'color: gold; font-weight: bold '>Specialty</span> "
            , topping: "Peanut Butter, Jalapeno Jelly, Bannana, Cowgirl Tam "
            , a_variable_proxy: (function () {
                var price = "<span style = 'color: green; font-weight: bold '>$12</span> ";
                return price;
            })()

        }


//OBJECTS ARE PRINTED TO THE DOM HERE
        document.getElementById('solstice').innerHTML = name + theSolstice + "<br>" + type + solstice.type + "<br>" + topping + solstice.topping + "<br>" + price + solstice.a_variable_proxy + "<br>";

        document.getElementById('theTrollie').innerHTML = name + trollie + "<br>" + type + theTrollie.type + "<br>" + topping + theTrollie.topping + "<br>" + price + theTrollie.a_variable_proxy + "<br>";

        document.getElementById('downHillJam').innerHTML = name + downHill + "<br>" + type + downHillJam.type + "<br>" + topping + downHillJam.topping + "<br>" + price + downHillJam.a_variable_proxy + "<br>";

    }

    sanFran();
})();




//JQUERY BLUR FUNCTIONS-----FOR SOME REASON I CANNOT DECLARE THEM ALL IN ONE FUNCTION WITHOUT THEM ALL FILTERING AT THE SAME TIME WHEN MOUSEENTERS--WORKED AROUND THIS BY DECLARING THEM SEPERATELY.

$("#imgs").mouseenter(function () {

    $("#bg-container-img-ny ").css('filter', 'blur(0px)');

    $("#chic ").mouseenter(function () {

        $("#bg-container-img-chic ").css('filter', 'blur(0px)');
    });

    $("#sanfran ").mouseenter(function () {

        $("#bg-container-img ").css('filter', 'blur(0px)');
    });
});

//SEEMS TO WORK AS A GLOBAL HERE ON MOUSELEAVE

$("#imgs, #chic, #sanfran").mouseleave(function () {

    $("#bg-container-img-ny, #bg-container-img-chic, #bg-container-img").css('filter', 'blur(1px)');


});



 //DIDN'T HAVE ENOUGH TIME TO FINISH THE ORDER FORM. SO, I WENT WITH A SIMPLE POP UP.... :/

//ALERT POP UP
$(".pizzaBox, .pizzaBoat, .pizzaTrollie").click(function () {
    var askName = prompt("What is your name?");
    var askPizza = prompt("Which pizza would you like?");
   
    
    $(function(){
        $(".orderForm").text( "Cowabunga! " +  "Thanks " + askName + ", " + " for ordering " + "the " + askPizza + "." + " Your order is now being made!");
        
        $(".orderForm").css({
            "color":"goldenrod",
            "font-weight": "bold"
            }
        
        );
    })

    


});
 


//DRAG FUNCTION ON CONTAINER WITH JQUERY
$(function() {
  $("#container ").draggable();
     
});