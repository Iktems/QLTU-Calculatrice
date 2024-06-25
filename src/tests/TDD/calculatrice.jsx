
class Calculateur {
    add(a, b) {
        return a + b;
    }

    substract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        // On ajoute une condition pour éviter la division par zéro
        if (b === 0) {
            // throw new Error('La division par 0 n\'est pas possible');
            return 'Infinity';
        }
        return a / b;
    }

}
export default Calculateur;