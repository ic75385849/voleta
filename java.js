document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('boletaForm');
    const listaProductos = document.getElementById('listaProductos');
    const totalAmount = document.getElementById('totalAmount');
    let total = 0;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const producto = document.getElementById('producto').value;
        const precio = parseFloat(document.getElementById('precio').value);
        const cantidad = parseInt(document.getElementById('cantidad').value);

        if (isNaN(precio) || isNaN(cantidad)) {
            alert('Por favor, introduce un precio y una cantidad válidos.');
            return;
        }

        const subtotal = precio * cantidad;
        total += subtotal;

        const listItem = document.createElement('li');
        listItem.textContent = `${producto}: $${subtotal.toFixed(2)}`;
        listaProductos.appendChild(listItem);

        totalAmount.textContent = total.toFixed(2);

        document.getElementById('producto').value = '';
        document.getElementById('precio').value = '';
        document.getElementById('cantidad').value = '';
    });
});
