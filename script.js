 let cart = [];
        let total = 0;

        // Function to add an item to the cart
        function addToCart(product, price) {
            // Add product to cart and update the total
            cart.push({ product, price });
            total += price;
            updateCart();
        }

        // Function to update the cart display and the total price
        function updateCart() {
            const cartItems = document.getElementById("cart-items");
            cartItems.innerHTML = ""; // Clear the cart before re-rendering

            // Loop through each item in the cart and add it to the cart display
            cart.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.product} - $${item.price}`;
                cartItems.appendChild(li);
            });

            // Update the total price display
            document.getElementById("total").textContent = `Total: $${total}`;
        }

//Appointment form
document.getElementById("appointment-form").addEventListener("submit",function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const confirmation = document.getElementById("confirmation");
    confirmation.classList.remove("hidden");
    confirmation.textContent = `Thank you, ${name}. Your appointment on ${date} has been booked. A confirmation was sent to ${email}.`;

    this.reset();
});
