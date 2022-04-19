
let sitio=()=>{             //se ve en la consola con node randomSitio.js

  for(x = 1; x<=10;x++){
  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
 
  rand1 = Math.floor(Math.random()*2)
  rand2 = Math.floor(Math.random()*2)
  rand3 = Math.floor(Math.random()*2)

    console.log(`${pronoun[rand1]}${adj[rand2]}${noun[rand3]}.com`)
  } 
}

sitio()