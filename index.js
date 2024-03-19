import chalk from "chalk";

let wilders = ["Charlot", "Adeline", "Anne-Sophie","Laura"];
/*let couleur = ["red","blue","magenta","cyan"]

function wildou(array1){
    
    let i=0;
    while (i < array1.length){
        let couleur = ["red","blue","magenta","cyan"];
        console.log(chalk.couleur[i](array1[i]));
        i++
    }
}
wildou(wilders,couleur)*/
console.log(chalk.blue(wilders[0]))
console.log(chalk.red(wilders[1]))
console.log(chalk.magenta(wilders[2]))
console.log(chalk.cyan(wilders[3]))
