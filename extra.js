var z = 0 
var k = 0
var f = 0
const list1 = []
const list2 =[]
const list = []


const bungereffect = ["cheese","sauce","big","chunky","juicy","bunger","doub trouble"];


const random_bungereffect  = Math.floor(Math.random() * bungereffect.length);
console.log(bungereffect[random_bungereffect]);

document.body.innerHTML =  "<h1>" + bungereffect[random_bungereffect] + "<h1>"




function myFunction() {
    var x = document.getElementById("quant").value;
    document.getElementById("price1").innerHTML = (x + "x" + " " + x*69 + "$");
    
}

function myfunction2(product,price,v) {
    var y = document.getElementById(product).value;

    for (let i = 0; i < y; i++ ) {
        list1.push(document.getElementById(product).name)
    }

    for (let g = 0; g < list1.indexOf(document.getElementById(product).name);g++ ) {
        console.log(g)


    }
    
    document.getElementById(price).innerHTML = (y+ "x" + " " + y*v + "$")
    


    console.log(y + "x" + " " + y*v + "$");
    z = (z + y*v)
    console.log(z)




    list.push(document.getElementById(product).name + " " + y + "x" + " " + y*v + "<br>")
    console.log(document.getElementById(product).name)

    

    document.getElementById("incart").innerHTML = (list + "<br>" + "total:" + z + "$")

}

function myfunction3() {



    for (let i = 1; i < list1.length;) {
        if (list[i - 1] == list[i])
            list.pop(i)
            console.log(list)
    }


}




