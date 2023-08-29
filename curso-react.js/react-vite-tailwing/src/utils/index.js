// con /** sale ese comentario personalizado que indica products tiene que ser un array de objetos//
/**
 * calcula el precio total de la orden
 * 
 * @param {Array} products  array de objetos
 * @returns {number} total price
 */
export const totalPrice = (products) => {
    let sum= 0;
    products.forEach(element => {
        //+= suma el valor al acumulador //
        sum += element.price
    });
    return sum
}