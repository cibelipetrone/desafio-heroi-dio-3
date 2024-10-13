class hero{
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar (){

        this.ataque

        switch (this.tipo){

            case "mago":
            this.ataque = "magia"
            break
            
            case "guerreiro":
            this.ataque = "espada"
            break

            case "monge":
            this.ataque = "artes marciais"
            break
            
            case "ninja":
            this.ataque = "shuriken"
            break 
        }

        console.log (`O ${this.tipo} atacou usando ${this.ataque} `)    
    }
}

let primeiroHeroi = new hero ("Dumbledore", "115", "mago")
primeiroHeroi.atacar()

let segundoHeroi = new hero ("Dante", "30", "guerreiro")
segundoHeroi.atacar()

let terceiroHeroi = new hero ("Kelsang", "80", "monge")
terceiroHeroi.atacar()

let quartoHeroi = new hero ("Scorpion", "40", "ninja")
quartoHeroi.atacar()
