import { describe, test, expect } from 'vitest';
import Calculateur from './calculatrice';

describe('Calculateur', () => {
    const calculateur = new Calculateur();

    // On test l'addition entre deux nombres pour valider mon test
    test('Addition de 5 + 5 doit faire 10', () => {
        expect(calculateur.add(5, 5)).toBe(10);
    });

    // On test la soustraction entre deux nombres pour la validation du test
    test('Soustraction de 5 - 5 doit faire 0', () => {
        expect(calculateur.substract(5, 5)).toBe(0);
    });

    // On test la multiplication entre deux nombres pour la validation du test
    test('Multiplication de 5 * 5 doit faire 25', () => {
        expect(calculateur.multiply(5, 5)).toBe(25);
    });

    // On test la division entre deux nombres pour la validation du test
    test('Division de 5 / 5 doit faire 1', () => {
        expect(calculateur.divide(5, 5)).toBe(1);
    });
});