import { Ingredient } from '../ingredients/ingredient.type';

export class Category {
    constructor(
        public id: string,
        public title: string,
        public ingredients: Ingredient[]
    ){}
}