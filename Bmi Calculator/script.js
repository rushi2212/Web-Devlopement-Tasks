const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const weight_guide = document.querySelector('#weight_guide')

    if (height==='' || height<0 || isNaN(height)){
        results.innerHTML="Please Enter a Valid Height.";
        weight_guide.innerHTML="BMI Weight Guide";

    }
    else if (weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML="Please Enter a Valid Weight.";
        weight_guide.innerHTML="BMI Weight Guide";
    }
    else {
        const bmi = (weight / ( (height * height) /10000)).toFixed(2);
        results.innerHTML=`<span>BMI = ${bmi}</span>`
        if (bmi<18.6){
            weight_guide.innerHTML="Under Weight !";
        }
        else if(bmi>18.6 && bmi<24.9){
            weight_guide.innerHTML="Normal Weight 🎉"
        }
        else{
            weight_guide.innerHTML="Over Weight !";
        }
    }
    // weight_guide.innerHTML="BMI Weight Guide";
});