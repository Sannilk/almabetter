var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function () {
    console.log(this.getPokeName() + 'I choose you!' + this.firstname);
};


var pokemonUse = function () {
    console.log(" I have used " + this.getPokeName());
}

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon
var pokeUse = pokemonUse.bind(pokemon);

logPokemon(); // 'Pika Chu I choose you!!
pokeUse();

