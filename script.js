function bmi() {
    let txtH = document.getElementById('h')
    let height = Number(txtH.value)
    let heightType = document.getElementsByName('height')
    if (heightType[0].checked) {
        height = height * 0.3048
    } else { height = height }
    let txtW = document.getElementById('w')
    let weight = Number(txtW.value)
    let weightType = document.getElementsByName('weight')
    if (weightType[0].checked) {
        weight = weight * 0.453592
    } else { weight = weight }
    let bmi = weight / (height * height)
    let bmi1 = document.getElementById('bmi')
    let radgen = document.getElementsByName('radgen')
    var gen =0
    // if (radgen[0].checked) {
    //     gen = 1
    // } else if (radgen[1].checked) {
    //     gen = 2
    // }
    if (radgen[0].checked) {
        if (bmi < 20) {
            bmi1.innerHTML = 'Gender: Male </br>'
            bmi1.innerHTML += `Your Body Mass Index (BMI) is <b>${bmi.toFixed(2)}</b></br>`
            bmi1.innerHTML += 'You are underweight</br>'
        }
        else if (bmi >= 20 && bmi <= 24.9) {
            bmi1.innerHTML = 'Gender: Male </br>'
            bmi1.innerHTML += `Your Body Mass Index (BMI) is <b>${bmi.toFixed(2)}</b></br>`
            bmi1.innerHTML += 'You are healthy</br>'
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            bmi1.innerHTML = 'Gender: Male </br>'
            bmi1.innerHTML += `Your Body Mass Index (BMI) is <b>${bmi.toFixed(2)}</b></br>`
            bmi1.innerHTML += 'You are overweight</br>'
        }
        else if (bmi >= 30 && bmi <= 34.9) {
            bmi1.innerHTML = 'Gender: Male </br>'
            bmi1.innerHTML += `Your Body Mass Index (BMI) is <b>${bmi.toFixed(2)}</b></br>`
            bmi1.innerHTML += 'You are obese</br>'
        }
        else if (bmi >= 35 && bmi <= 43) {
            bmi1.innerHTML = 'Gender: Male </br>'
            bmi1.innerHTML += `Your Body Mass Index (BMI) is <b>${bmi.toFixed(2)}</b></br>`
            bmi1.innerHTML += 'You are very obese'
        }
        else if (bmi > 43) {
            bmi1.innerHTML = 'Gender: Male </br>'
            bmi1.innerHTML += `Your Body Mass Index (BMI) is <b>${bmi.toFixed(2)}</b></br>`
            bmi1.innerHTML += 'You are morbidly obese</br>'
        }
    } else if(radgen[1].checked) {
        if (bmi < 19 ) {
            bmi1.innerHTML = 'Gender: Female</br>'
            bmi1.innerHTML += `Your Body Mass Index (BMI) is <b>${bmi.toFixed(2)}</b></br>`
            bmi1.innerHTML += 'You are underweight</br>'
        }
        else if (bmi >= 19 && bmi <= 23.9 ) {
            bmi1.innerHTML = 'Gender: Female</br>'
            bmi1.innerHTML += `Your Body Mass Index (BMI) is <b>${bmi.toFixed(2)}</b></br>`
            bmi1.innerHTML += 'You are healthy</br>'
        }
        else if (bmi >= 24 && bmi <= 28.9 ) {
            bmi1.innerHTML = 'Gender: Female</br>'
            bmi1.innerHTML += `Your Body Mass Index (BMI) is <b>${bmi.toFixed(2)}</b></br>`
            bmi1.innerHTML += 'You are overweight</br>'
        }
        else if (bmi >= 29 && bmi <= 34.9) {
            bmi1.innerHTML = 'Gender: Female</br>'
            bmi1.innerHTML += `Your Body Mass Index (BMI) is <b>${bmi.toFixed(2)}</b></br>`
            bmi1.innerHTML += 'You are obese</br>'
        }
        else if (bmi >= 35 && bmi <= 39) {
            bmi1.innerHTML = 'Gender: Female</br>'
            bmi1.innerHTML += `Your Body Mass Index (BMI) is <b>${bmi.toFixed(2)}</b></br>`
            bmi1.innerHTML += 'You are very obese'
        }
        else if (bmi > 39) {
            bmi1.innerHTML = 'Gender: Female</br>'
            bmi1.innerHTML += `Your Body Mass Index (BMI) is <b>${bmi.toFixed(2)}</b></br>`
            bmi1.innerHTML += 'You are morbidly obese</br>'
        }
    }
}
