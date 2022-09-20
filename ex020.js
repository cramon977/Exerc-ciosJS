let notas100 = []
let notas50 = []
let notas10 = []
let notas5 = []
let notas1 = []
let res = undefined
 
function notasDeCem(valor){
    while(valor >= 100 ){
        notas100.push(100)
        valor -= 100
    }
    return valor
}
function notasDeCinquenta(valor){
    while(valor >= 50){
        notas50.push(50)
        valor -= 50
    }
    return valor
}
function notasDeDez(valor){
    while(valor >= 10){
        notas10.push(10)
        valor -= 10
    }
    return valor
}
function notasDeCinco(valor){
    while(valor >= 5){
        notas5.push(5)
        valor -= 5
    }
    return valor
}
function notasDeUm(valor){
    while(valor >= 1){
        notas1.push(1)
        valor -= 1
    }
    return valor
}
function separadorNotas(val){
            notasDeUm(notasDeCinco(notasDeDez(notasDeCinquenta(notasDeCem(val)))))

    return res = Array(notas100,notas50,notas10,notas5,notas1), exibirretorno() 
}
 function exibirretorno(){   
    for ( x of res){
        if([[x]] != false){
            console.log(`São ${x.length} notas(s) de R$ ${x.splice(-1)}!`)
        }
    }
 }
separadorNotas(257)









