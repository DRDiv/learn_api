const tab=document.getElementById("table")
async function f(){var p= await fetch("https://reqres.in/api/users");
var j= await p.json();
var p=j.data;
for (x of p){
    console.log(x)
    let row= document.createElement("tr")
    let id=document.createElement("td")
    let img=document.createElement("td")
    let imgsrc=document.createElement("img")
    let firstname=document.createElement("td")
    let lastname=document.createElement("td")
    let email=document.createElement("td")
    id.textContent=x["id"]
    firstname.textContent=x["first_name"]
    lastname.textContent=x["last_name"]
    email.textContent=x["email"]
    
    imgsrc.src=x["avatar"]
    img.appendChild(imgsrc)
    row.appendChild(id)
    row.appendChild(img)
    row.appendChild(firstname)
    row.appendChild(lastname)
    row.appendChild(email)
    tab.appendChild(row)

}
}
f();