const bungereffect = ["cheese","sauce","big","chunky","juicy","bunger","doub trouble"];


const random_bungereffect  = Math.floor(Math.random() * bungereffect.length);
console.log(bungereffect[random_bungereffect]);

document.body.innerHTML =  "<h1>" + bungereffect[random_bungereffect] + "<h1>"


