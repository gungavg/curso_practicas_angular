export class Product{
    // /de esta forma podemos definir el tipo da dato al que estamos haciendo alucion 
    id :number= 0;
    name:string='';
    description: string ='';
    // de esta otra forma igual, y el ! quiere decir que despues se va a dar un valor
    price! :number;
}
