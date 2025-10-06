const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'Blue'
}; // Object literal

console.log(car);

const games = {
    titleName: 'The Legend of Zelda',
    genreName: 'Adventure',
    platformName: 'Nintendo Switch',
    fullName: function() {
        return `${this.titleName} is on ${this.platformName}`;
    }   
    
}    ; // Object literal with method

console.log(games.fullName());

const marvel = ["spiderman", "ironman", "hulk", "thor"]; // Object literal with array (incorrect syntax)
console.log(marvel);

const dc = ["batman", "superman", "wonderwoman", "flash"]; 

let size = dc.length;
console.log(size);