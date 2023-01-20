let disease = document.getElementById("one")
let treatment = document.getElementById("two")
let complaint = document.getElementById("three")
let contact = document.getElementById("four")
let submit = document.getElementById("submit")
let first = document.getElementById("first")
let last = document.getElementById("last")
let age = document.getElementById("age")
let email = document.getElementById("email")
let back  = document.getElementById("back")
let back2  = document.getElementById("back2")


contact.addEventListener("click",contactUs)

function contactUs(){
    document.getElementById("side").classList.add("show")
}

submit.addEventListener("click",getDataInFormAndBack)

function getDataInFormAndBack(e){
    e.preventDefault()
    if(age.value>120){
        alert("Invalid Age ")
    }else{
        if(first.value==""||last.value==""||age.value==""||email.value==""){
            alert('enter data')
        }else{
            localStorage.setItem("first",first.value)
            localStorage.setItem("last",last.value)
            localStorage.setItem("age",age.value)
            localStorage.setItem("email",email.value)
            window.location = "index.html"
        }
    }
   

}

back.addEventListener("click",backToMaun)
back2.addEventListener("click",backToMaun2)


function backToMaun(){
    document.getElementById("side").classList.remove("show")
    
}

complaint.addEventListener("click",complaintFoPatient)

function complaintFoPatient(){
   document.querySelector(".comlaint").classList.add("show")
}

function backToMaun2(){
   document.querySelector(".comlaint").classList.remove("show")
}


document.querySelector(".send").addEventListener("click",()=>{
 if(document.getElementById("patientcomp").value ==""){
    alert("Enter Your compalint")
 }else{
    document.querySelector(".message").classList.add("show")
    setTimeout(function(){
        document.querySelector(".message").classList.remove("show")
        document.getElementById("patientcomp").value =""
    },1500)

 }
})


disease.addEventListener("click",function(){
    document.querySelector(".disease").classList.add("show")
})

document.getElementById("backfromdisease").addEventListener("click",()=>{
    document.querySelector(".disease").classList.remove("show")
})

treatment.addEventListener("click",()=>{
    document.querySelector(".aboutme").classList.add("show")
})

document.getElementById("back3").addEventListener("click",()=>{
    document.querySelector(".aboutme").classList.remove("show")
})

let search = document.querySelector(".search input")
let deleteLast = document.querySelector(".search span")

deleteLast.addEventListener("click",deleteLastLetter)

function deleteLastLetter(){
    // let textin = search.value
    // textin = textin.substring(0,textin.length -1)
    search.value = ""
    search.focus()
}

let productContainer = document.querySelector(".products")

let myRequest = new XMLHttpRequest
myRequest.onreadystatechange = function(){
    if(this.readyState == 4 & this.status ==200 ){
        let data = JSON.parse(this.responseText)       
        // putProductin(data)
    }
}
myRequest.open("get","mo.json",true)
myRequest.send()

let arr = ["Html","Css","Js","php","ghgfh","ghgh"]


function add(){
    for(let i = 0;i<arr.length;i++){
        
    productContainer.innerHTML +=`
    
    <div>
    ${i + 1} - ${arr[i]}
    </div>
    `
    }

}

add()


console.log(document.querySelector(".span input"))
 
document.querySelector(".span").addEventListener("click",(e)=>{
    document.querySelector(".span input").classList.toggle("left")
    document.querySelector(".span").classList.toggle("opacity")
})

let nbnv = ['mohammed dfgdhkg fdjhdkjg fdgdjgfdh djdfgj',
'mahmoud fdgdfhgd klfgjdgd lldjretov jgld',
'ahmd gjifghfl;;,mljl kgjhflh glkflhf',
'adhj ghfgh jtyt ertyut vdfgkghnf ghyutit',
'hady','fady','tutrhj']

let content = document.querySelector(".content")

let btn = document.getElementById("btn")

console.log(btn , content)

btn.addEventListener("click",mogfhgf)

function mogfhgf(){
    let random = Math.trunc(Math.random() * nbnv.length )
    content.textContent = nbnv[random]
    window.reload()
}