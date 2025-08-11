let form = document.querySelector("form");

form.addEventListener("submit", function(e) {                        // whenever we making such form like project instaed for appling eventl on button apply them on form with submit event not click.
    e.preventDefault();

    console.log("Form is submitted");
    const height = document.getElementById("height").value;            // here i learn how get value from input
    const weight = document.getElementById("weight").value;
    const results = document.getElementById("results");

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height: ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight: ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
         if(bmi < 18.6){
            results.innerHTML = `<span>${bmi}, you are underweight</span>`;
         }
         else if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `<span>${bmi}, Normal Range</span>`;
         }
         else{
            results.innerHTML = `<span>${bmi}, Overweight</span>`;
         }
    }

    
 
});

// my approch but not good as above.

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function(){
//     const height =document.getElementById("height").value;
//     const weight =document.getElementById("weight").value;
//     const results =document.getElementById("results");

//      if(height === '' || height < 0 || isNaN(height)){
//         results.innerHTML = `please give a valid height: ${height}`;
//     }
//     else if(weight === '' || weight < 0 || isNaN(weight)){
//         results.innerHTML = `please give a valid weight: ${weight}`;
//     }
//     else{
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         results.innerHTML = `<p>${bmi}</p>`;
//     }

// })
