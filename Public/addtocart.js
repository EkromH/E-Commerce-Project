const product = [
    {
    id: 0,
    image: 'image/c6.jpg',
    title: 'Dahua 4-CH DVR 4-Pcs Camera  ',
    price: 18500,
    link: '<a href="ProductDetails/Product1.html" style="text-decoration: none;  color: red; padding: 3px; border-radius: 10px;" >Click for more Details </a>',
},
{
    id: 1,
    image: 'image/c2.jpg',
    title: ' 8-CH Dahua XVR 8-Pcs Camera',
    price: 25000,
    link: '<a href="ProductDetails/Product2.html" style="text-decoration: none;  color: red; padding: 3px; border-radius: 10px;" >Click for more Details </a>',

},
{
    id: 2,
    image: 'image/c3.jpg',
    title: 'Ezviz H6c',
    price: 2280,
    link: '<a href="ProductDetails/Product3.html" style="text-decoration: none;  color: red; padding: 3px; border-radius: 10px;" >Click for more Details </a>',

},
{
    id: 3,
    image: 'image/c4.jpg',
    title: 'Dahua 4-CH DVR 2-Pcs Camera',
    price: 9500,
    link: '<a href="ProductDetails/Product4.html" style="text-decoration: none;  color: red; padding: 3px; border-radius: 10px;" >Click for more Details </a>',

},
{
    id: 4,
    image: 'image/cam1.jpg',
    title: '4mp Bullet CCTV',
    price: 3350,
    link: '<a href="ProductDetails/Product5.html" style="text-decoration: none;  color: red; padding: 3px; border-radius: 10px;" >Click for more Details </a>',

},
{
    id: 6,
    image: 'image/cam3.jpg',
    title: '3.5mp Doom CCTV with Audio',
    price: 2850,
    link: '<a href="ProductDetails/Product6.html" style="text-decoration: none;  color: red; padding: 3px; border-radius: 10px;" >Click for more Details </a>',

},

    ];

    let cart = [];

    function addtocart(id) {
        const index = cart.findIndex(item => item.id === id);

        if (index !== -1) {
            cart[index].quantity++;
        } else {
            cart.push({ ...product[id], quantity: 1 });
        }
        displaycart();
    }

    function delElement(index) {
        cart.splice(index, 1);
        displaycart();
    }

    function displaycart() {
        let total = 0;
        document.getElementById("count").innerHTML = cart.length;
        if (cart.length === 0) {
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML =0 ;
        } else {
            document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
                total += item.price * item.quantity;
                document.getElementById("total").innerHTML = + total ;
                return (
                    `<div class='cart-item'>
                        <div class='row-img'>
                            <img class='rowimg' src=${item.image}>
                        </div>
                        <p style='font-size:12px;'>${item.title}</p>
                        <h2 style='font-size: 15px;'> ${item.price}</h2>
                        <div>
                            <span>Qty: ${item.quantity}</span>
                            <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                        </div>
                    </div>`
                );
            }).join('');
        }
    }

    document.getElementById('root').innerHTML = product.map((item, index) => {
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${item.image}></img>
                </div>
                <div class='bottom'>
                    <p>${item.title}</p>
                    <h2> ${item.price}</h2>
                    <button onclick='addtocart(${index})'>Add to cart</button>
                </div>
                <div class='bottom1'><p style='text-decoration: none;'>${item.link}</p></div>
            </div>`
        );
    }).join('');

    function purchase() {
        // Save cart data to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        // Redirect to the checkout page
        window.location.href = 'display.html';
    }
