import { describe, test, expect } from 'vitest';
import Calculateur from './calculatrice';

describe('Calculateur', () => {
    const calculateur = new Calculateur();

    // On test l'addition entre deux nombres pour valider mon test
    test('Addition de 5 + 5 doit faire 10', () => {
        expect(calculateur.add(5, 5)).toBe(10);
    });
});