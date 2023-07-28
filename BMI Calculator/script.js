const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
       const bmi = (weight / ((height*height)/10000)).toFixed(2)

    //    results.innerHTML = `<span>${bmi}</span>`;

       const userStatus = (bmi < 18.5) ? "Underweight &#128531;" 
       : (bmi  >= 18.5 && bmi <= 24.9) ? "Normal &#128515;"
       : (bmi > 24.9 && bmi <= 30) ? "Overweight &#128543;" : "Obese &#128542;";
       results.innerHTML = bmi +" "+ userStatus;

    } 
});