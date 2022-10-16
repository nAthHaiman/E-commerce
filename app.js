let price = 0;
let elementno = 0;
function addToCart(parameter)
{
    elementno++;
    document.getElementById('totalProduct').innerText = elementno;
    price = price + parameter;
    const iniPrice = document.getElementById('price')
    iniPrice.innerText = price;

    const vat = parseFloat((price / 100).toFixed(3));
    document.getElementById('tax').innerText = vat;


    const delivery = 200

    document.getElementById('delivery').innerText = delivery

    const shipping = parseFloat((price * 0.01).toFixed(3));

    document.getElementById('shipping').innerText = shipping

    const finalTotal = (price + delivery + shipping)
    document.getElementById('final').innerText = finalTotal;
    const inTotal = (price + vat + delivery + shipping).toFixed(3);

    document.getElementById('incTax').innerText = inTotal;

}

