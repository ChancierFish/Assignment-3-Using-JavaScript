/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = document.getElementById('calculated-cost')
let numDaySelected = 0
let dailyRate = 35


let fulldayLenght = document.getElementById('full')
let halfdayLenght = document.getElementById('half')


let monday= document.getElementById('monday')
let tuesday= document.getElementById('tuesday')
let wednesday= document.getElementById('wednesday')
let thursday= document.getElementById('thursday')
let friday= document.getElementById('friday')


let clearBtn = document.getElementById('clear-button')

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.addEventListener("click", function(){
    colorChangeDay(monday)
});
tuesday.addEventListener("click", function(){
    colorChangeDay(tuesday)
});
wednesday.addEventListener("click", function(){
    colorChangeDay(wednesday)
});
thursday.addEventListener("click", function(){
    colorChangeDay(thursday)
});
friday.addEventListener("click", function(){
    colorChangeDay(friday)
});

function colorChangeDay(day){
    if(day.classList.contains("clicked") == false){
        day.classList.add("clicked");
        numDaySelected = numDaySelected + 1
        reCalculationCost(dailyRate, numDaySelected)
        }
    return;
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearBtn.addEventListener("click", clearDays)

function clearDays(){
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    numDaySelected = 0;
    reCalculationCost(dailyRate,numDaySelected);
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfdayLenght.addEventListener("click", halfDayChange_rate)

function halfDayChange_rate(){
    if(fulldayLenght.classList.contains("clicked") == true){
        fulldayLenght.classList.remove("clicked");
        halfdayLenght.classList.add("clicked");
        dailyRate = 20
        reCalculationCost(dailyRate,numDaySelected)
    }
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fulldayLenght.addEventListener("click", fullDayChange_rate)

function fullDayChange_rate(){
    if(halfdayLenght.classList.contains("clicked") == true){
        halfdayLenght.classList.remove("clicked");
        fulldayLenght.classList.add("clicked");
        dailyRate = 35
        reCalculationCost(dailyRate,numDaySelected)
    }
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function reCalculationCost (dailyRate, numDaySelected){
    costPerDay.innerHTML = dailyRate * numDaySelected
}