document.getElementById('main-action-button').onclick = function() {
    document.getElementById('products').scrollIntoView({behavior: 'smooth'});
} 

let links = document.querySelectorAll('.menu-item a');
for (let i=0; i < links.length; i++) {
    links[i].onclick = function() {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
    }
}

let buttons = document.querySelectorAll('.product-button');
for (let i=0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        document.getElementById('order').scrollIntoView({behavior: 'smooth'});
    }
}

let burger = document.getElementById('burger');
let name = document.getElementById('name');
let phone = document.getElementById('phone');

document.getElementById('order-action').onclick = function() {

    let hasErorr = false;

    [burger, name, phone].forEach(item => {

        if(!item.value) 
        {
            item.parentElement.style.background = 'red';
            hasErorr = true;
        }
        else
        {
            item.parentElement.style.background = '';
        }
  
    });

    if(!hasErorr)
    {
        [burger, name, phone].forEach(item => {
            item.value = '';
        });
        alert('Спасибо за заказ! Мы скоро свяжемся с вами!')

    }

}

let prices = document.getElementsByClassName('products-item-price');

document.getElementById('change-currency').onclick = function(event) {

    let currentCurrency = event.target.innerText;


    let newCurrency = '$';
    let coefficient = 1;

    if (currentCurrency === '$')
    {
        newCurrency = '₽';
        coefficient = 80;
    }
    else if (currentCurrency === '₽')
    {
        newCurrency = 'BYN';
        coefficient = 3;
    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } 
    else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }

    //console.log(newCurrency)

    event.target.innerText = newCurrency;



    for (let i=0; i < prices.length; i++ )
    {
        prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency
    }


}







