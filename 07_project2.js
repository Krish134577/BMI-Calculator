let form = document.querySelector("form");
let rbtn1 = document.getElementById("rbtn1")
let rbtn2 = document.getElementById("rbtn2")
let heightunit1 = document.getElementById("heightunit1");
let weightunit1 = document.getElementById("weightunit1"); 
let span1 = document.getElementById("span1");
let body = document.querySelector("body"); 
let inputheight = document.querySelector(".height");

let heightinch = document.createElement("input");
heightinch.style.width = "10vw";
heightinch.style.border = "1px solid rgb(182, 182, 182)";
heightinch.classList.add("inputclass");
heightinch.id = "inputid";

let heightinchlabel = document.createElement("label");
heightinchlabel.innerText = "inch";
heightinchlabel.id = "jslabelid"

rbtn2.addEventListener("click", function(){
    
    heightunit1.innerText = "CM";
    weightunit1.innerText = "KG";
    document.querySelector(".height").classList.remove("change-height");
    document.querySelector(".weight").classList.remove("change-height"); 
    span1.removeChild(heightinch);
    span1.removeChild(heightinchlabel);
})

rbtn1.addEventListener("click", function(){            // US Customary unit button
    heightunit1.innerText = "feet";
    weightunit1.innerText = "pounds";
    document.querySelector(".height").classList.add("change-height");
    document.querySelector(".weight").classList.add("change-height");
    span1.appendChild(heightinch);
    span1.appendChild(heightinchlabel);
    // rbtn1.classList.add("btnclr"); 
})

    heightunit1.innerText = "CM"   // When browser load this unit automatic get setted.
    weightunit1.innerText = "KG"
 

    form.addEventListener("submit", function(e) {                        // whenever we making such form like project instaed for appling eventl on button apply them on form with submit event not click.
    e.preventDefault();

    if(heightunit1.innerText === "CM"){                                 // if 1 means the code inside this if will run only when the unit are set to metric that is cm and kg.
        console.log("Form is submitted"); 
    const height = document.querySelector(".height").value ;            // here i learn how get value from input
    const weight = document.querySelector(".weight").value; 
    const results = document.getElementById("results");

    

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height: ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight: ${weight}`;
    } 
    else {


        const bmi = ((weight / (height * height)) * 10000).toFixed(2);
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
    }

    if(heightunit1.innerText === "feet"){                                      
        const height = parseFloat(document.querySelector(".height").value) ;            // here i learn how get value from input
        const weight = document.querySelector(".weight").value;                          
        const hivalue = parseFloat(document.getElementById("inputid").value);
        const results = document.getElementById("results");
  


    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height: ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight: ${weight}`;
    }
    else if(hivalue === '' || hivalue < 0 || isNaN(hivalue)){
        results.innerHTML = `please give a valid height in inch: ${hivalue}`;
    }
    else{
 
        let heightInMeters = (height * 12 + hivalue) * 0.0254;                 // Bug ccure in this line and shwing calculation wrong height adn hivalue are in string so i use parsefloat to convert then in exact not string.
        let weightkg = weight * 0.453592;

        const bmi = (weightkg / (heightInMeters ** 2)).toFixed(2);
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

    }

    
 
});
 

let resetbtn = document.getElementById("Reset");
resetbtn.addEventListener("click", function(){
    results.innerHTML =  `<span></span>`;
})






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

