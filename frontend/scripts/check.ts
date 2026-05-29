import * as fs from 'fs';
import { RECIPES } from '../src/data';

const uniqueIg = Array.from(new Set(RECIPES.flatMap(r => r.ingredients.map(i => i.name))));
const uniqueAm = Array.from(new Set(RECIPES.flatMap(r => r.ingredients.map(i => i.amount))));

// Let's print out what needs manual translation for EN and CN:
console.log(JSON.stringify(uniqueIg, null, 2));
console.log(JSON.stringify(uniqueAm, null, 2));
