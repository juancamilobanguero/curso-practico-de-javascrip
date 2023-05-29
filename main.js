const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult= document.querySelector('#result')



form.addEventListener('submit', sumarInputValues)
// forma de escuchar eventos desde javascrip
function sumarInputValues (event){
    // console.log({event})
    event.preventDefault()
 const sumaInputs = input1.value + input2.value
 pResult.innerHTML = 'Resultado: ' + sumaInputs
}



// console.log(input.value)
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// })
// // nos permite modificar nusestro elementos desde javascrip
// h1.innerHTML = 'camilo <br> banguero'
// // uno comvierte tood a codigo a html
// h1.innerText = 'camilo <br> banguero'
//  console.log(h1.getAttribute('class'))
//  h1.setAttribute('class','verde')

//  // otro metodo que nos sirve para agregar clases
//  h1.classList.add('rojo')
//  // para eliminarle la primera clase que tiene
//  h1.classList.remove('verde')

//  // modificando el input
//  input.value ='1324'

//  //creando un elemento desde cero 
//  const img = document.createElement('img')
//  img.setAttribute('src', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aauniv.com%2Fs%2Fblog%2Flenguajes-de-programacion%2F&psig=AOvVaw1kp1iEC6-fCBrFdKC32yYx&ust=1685463242976000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCc1oH2mv8CFQAAAAAdAAAAABAN')
//  console.log(img)

//  pid.innerHTML = "";
//  pid.append(img)
