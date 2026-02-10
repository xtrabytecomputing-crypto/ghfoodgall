// Function to handle image clicks
function showDishInfo(dishName, description) {
    alert(`${dishName} - ${description}`);
}

// Function to handle order button clicks
function orderDish(dishName) {
    const quantity = prompt(`How many servings of ${dishName} would you like to order?`, "1");
    if (quantity !== null && quantity > 0) {
        const confirmOrder = confirm(`Confirm order: ${quantity} serving(s) of ${dishName}?`);
        if (confirmOrder) {
            alert(`Order placed for ${quantity} serving(s) of ${dishName}!`);
        }
    }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Image boxes
    const imgBoxes = document.querySelectorAll('.img_box');
    imgBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const dishName = this.querySelector('.content').textContent;
            let description = '';
            switch(dishName) {
                case 'Jollof Rice':
                    description = 'A flavorful one-pot rice dish with tomatoes and spices!';
                    break;
                case 'Banku':
                    description = 'A fermented corn dough, often served with soup!';
                    break;
                case 'Waakye':
                    description = 'Rice cooked with beans and served with spicy sauce!';
                    break;
                case 'Fufu':
                    description = 'A starchy side dish made from cassava and plantain!';
                    break;
                case 'Kenkey':
                    description = 'Fermented corn dough, a staple in Ghanaian cuisine!';
                    break;
            }
            showDishInfo(dishName, description);
        });
    });

    // Order buttons
    const orderButtons = document.querySelectorAll('.order-buttons button');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dishName = this.textContent.replace('Order ', '');
            orderDish(dishName);
        });
    });
});
