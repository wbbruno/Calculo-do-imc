 function calcular(){

    let altura = document.getElementById('txtalt')
    let resp = document.querySelector('p#resultado')
    let peso = document.getElementById('txtpeso')
    let foto = document.getElementById('res')
    let alt = Number(altura.value)
    let p = Number(peso.value)
    let c =  p/(alt*alt).toFixed(2)
    
   
   
 

    if(altura.value.length == 0 || peso.value.length == 0){
        window.alert('Voce precisa degitar os dados para o calculo')
       
        
      
    }  else {

        let img = document.createElement('img')
        img.setAttribute('id','imagem')
    
     
        if(c <= 18.5 ){ 
        img.setAttribute('src','imagem/homem15.png')
        resp.innerHTML = `Seu imc é ${c.toFixed(1)} Magreza`    
        
            
        } else if(c >=18.5 && c <= 24.9){
        img.setAttribute('src','imagem/homem20.png')
        resp.innerHTML = `Seu imc é ${c.toFixed(1)} Normal`
        

        } else if(c >= 25.0 && c <= 29.9){
        img.setAttribute('src','imagem/homem25.png')
        resp.innerHTML = `Seu imc é ${c.toFixed(1)} Sobrepeso I`
        

        } else if(c >=30.0 <= 39.9){
        img.setAttribute('src','imagem/homem30.png')
        resp.innerHTML = `Seu imc é ${c.toFixed(1)} Obesidade II ` 

        } else if(c > 40.0){
         img.setAttribute('src','imagem/homem30.png')
        resp.innerHTML = `Seu imc é ${c.toFixed(1)} Obesidade III  `   
     
        }
     
        
        res.appendChild(img)
        altura.value = ''
        peso.value = ''
        altura.focus()
   
    }
}
