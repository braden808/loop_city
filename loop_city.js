for (var count = 0; count <= 100; count++) {
	console.log("I can count to " + count);
}

for (var animalCount = 0; animalCount <= 5; animalCount++) {
	console.log("there are " + animalCount + " animals in Noahs Arc");
}

var partyAnimals = ["cool guy", "party pooper", "crazy person", "nuts buggah", "bummer"];
for (var i = 0 ; i <= 4 ; i++){
	console.log("you're a " + partyAnimals [i]);
}

var weaponChest = ["Mace", "Sorcer's Stone", "Excalibur"];
var hero = {
	wizard : "Merlin",
	weapon : weaponChest[0],
	power : 30
};

function merlinWeapon(x){
	if (hero.weapon == weaponChest[1]){
		console.log(hero.wizard + " shall slay the dragon with the " + weaponChest[1]);
	} else (hero.weapon = weaponChest[1]) {
		console.log(hero.wizard + " is ready for war with the " + weaponChest[1]);
	}
}

merlinWeapon(hero)