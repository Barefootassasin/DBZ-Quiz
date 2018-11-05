// Global Variable
let total = 0;

//  Add Event Listeners
document.getElementById("mark").addEventListener("click", mark)

// Add Event Funtions
function mark() {

// Mark Test

    // Reset
    total = 0
    
    // Question 1
        // Input
        let Q1A = (document.getElementById("Q1A").value);
        Q1A = Q1A.toLowerCase();

        // Output
        if (Q1A == "senju" || Q1A == "senju beans" || Q1A == "senjubeans" || Q1A == "senju bean" || Q1A == "senjubean") {
            document.getElementById("Q1R").innerHTML = "Correct";
            document.getElementById("Q1R").style.color = "green";
            document.getElementById("Q1").style.border = "2px solid greenyellow";
            total = total + 1;
            console.log(total)
        } else {
            document.getElementById("Q1R").innerHTML = "Incorrect";
            document.getElementById("Q1R").style.color = "red";
            document.getElementById("Q1").style.border = "2px solid red";
        }

    // Question 2
        // Input
        let Q2A = (document.getElementById("Q2A").value);
        Q2A = Q2A.toLowerCase();

        // Output
        if (Q2A == "namek" || Q2A == "planet namek" || Q2A == "planetnamek") {
            document.getElementById("Q2R").innerHTML = "Correct";
            document.getElementById("Q2R").style.color = "green";
            document.getElementById("Q2").style.border = "2px solid greenyellow";
            total = total + 1;
            console.log(total)
        } else {
            document.getElementById("Q2R").innerHTML = "Incorrect";
            document.getElementById("Q2R").style.color = "red";
            document.getElementById("Q2").style.border = "2px solid red";
        }

    // Question 3
        // Input
        let Q3A = (document.getElementById("Q3A").value);
        Q3A = Q3A.toLowerCase();

        // Output
        if (Q3A == "mr satan" || Q3A == "hercules" || Q3A == "mister satan" || Q3A == "satan") {
            document.getElementById("Q3R").innerHTML = "Correct";
            document.getElementById("Q3R").style.color = "green";
            document.getElementById("Q3").style.border = "2px solid greenyellow";
            total = total + 1;
            console.log(total)
        } else {
            document.getElementById("Q3R").innerHTML = "Incorrect";
            document.getElementById("Q3R").style.color = "red";
            document.getElementById("Q3").style.border = "2px solid red";
        }

    // Question 4
        // Input
        let Q4A = (document.getElementById("Q4A").value);
        Q4A = Q4A.toLowerCase();

        // Output
        if (Q4A == "frieza") {
            document.getElementById("Q4R").innerHTML = "Correct";
            document.getElementById("Q4R").style.color = "green";
            document.getElementById("Q4").style.border = "2px solid greenyellow";
            total = total + 1;
            console.log(total)
        } else {
            document.getElementById("Q4R").innerHTML = "Incorrect";
            document.getElementById("Q4R").style.color = "red";
            document.getElementById("Q4").style.border = "2px solid red";
        }

    // Question 5
        // Input
        let Q5A = (document.getElementById("Q5A").value);

        // Output
        if (Q5A == "3" || Q5A == "three" || Q5A == "iii" || Q5A == "III") {
            document.getElementById("Q5R").innerHTML = "Correct";
            document.getElementById("Q5R").style.color = "green";
            document.getElementById("Q5").style.border = "2px solid greenyellow";
            total = total + 1;
            console.log(total)
        } else {
            document.getElementById("Q5R").innerHTML = "Incorrect";
            document.getElementById("Q5R").style.color = "red";
            document.getElementById("Q5").style.border = "2px solid red";
        }
        
    // Question 6
        // Input
        let Q6A = (document.getElementById("Q6A").value);
       
        // Output
        if (Q6A == "9" || Q3A == "nine" || Q3A == "ix" || Q3A == "IX") {
            document.getElementById("Q6R").innerHTML = "Correct";
            document.getElementById("Q6R").style.color = "green";
            document.getElementById("Q6").style.border = "2px solid greenyellow";
            total = total + 1;
            console.log(total)
        } else {
            document.getElementById("Q6R").innerHTML = "Incorrect";
            document.getElementById("Q6R").style.color = "red";
            document.getElementById("Q6").style.border = "2px solid red"; 
        }
    
    // Your score
        document.getElementById("math").innerHTML = "Your " + "score " + "is  " + Math.round(total) + "  /  6" + " " + "(" + Math.round(total / 6 * 100) + "%)";
    // Comment
        if (total == 6) {
            document.getElementById("result").innerHTML = "Excellent, you are a true dbz master! <img src='images/vegetassjgevo.jpg' width='85px' height='85px'>";
        } else if (total == 5) { 
            document.getElementById("result").innerHTML = "Good, I see you're a fellow fan! <img src='images/gokussjg.jpg' width='85px' height='85px'>";
        } else if (total == 4) {
            document.getElementById("result").innerHTML = "Cool you've watched Dragon Ball Z! <img src='images/gohanssj2.jpg' width='85px' height='85px'>";
        } else if (total <= 3) {
            document.getElementById("result").innerHTML = "Nah, you lack hard, just like my boi yamcha over here! <img src='images/yamcha.jpg' width='85px' height='85px'>";
        }
    }






































