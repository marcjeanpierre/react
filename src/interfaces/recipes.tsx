export interface Ingredients{
    _id: any;
    name: string;
    quantity: number;
    gramming: string;
}

export interface Recipes{

    _id: any;
    type: string;
    image: string;
    title: string;
    step: Array<string>;
    numberPeople: number;
    preparationTime: number;
    ingredients?: Array<Ingredients>;
    
}