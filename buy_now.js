const button = document.querySelector ('.buy-submit')


button.addEventListener ('click', buyNow)

function buyNow () {
   if (userInput.value ==='') {
    alert ('Input letters') 
    // button.style = 'background-color: blue', 'border-radius: 10px', ' color: red' 
   }

   else if (userLeterPreview.textContent ==='Your Name') {
    alert ('Enter custom letters')
   }

//    else if (userLeterPreview.textContent ==='') {
//     alert ('Enter custom letters')
//    }

else if (userInput.value.length > 15) {
    alert ('Exceeded number of letters')
}

else {
    alert ('Good job')
}
}