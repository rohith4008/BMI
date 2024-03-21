
function BMI() {
    let h = document.getElementById('h').value;
    let w = document.getElementById('w').value;
    let bmi = w/(h/100*h/100);

    let bmio = (bmi.toFixed(2));

    document.getElementById("result").innerHTML="Your BMI is " + bmio;

    let comment = document.getElementById("comment")
    comment.innerHTML = fresult()
    
    function fresult(){
        if(bmio<18.5)
        {
            return "You are Underweight"
        }
        else if(bmio>=18.5 && bmio<25)
        {
            return "You weight is Normal"
        }
        else if(bmio>=25 && bmio<30)
        {
            return "You are Overweight"
        }
        else
        {
            return "You are Obese"
        }
    }


}