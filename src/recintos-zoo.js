class RecintosZoo {
    constructor() {
        this.recintos = [
            { nome: 'Recinto 1', capacidadeTotal: 10, espacoLivre: 5 },
            { nome: 'Recinto 2', capacidadeTotal: 5, espacoLivre: 3 },
            { nome: 'Recinto 3', capacidadeTotal: 7, espacoLivre: 2 },
            { nome: 'Recinto 4', capacidadeTotal: 8, espacoLivre: 5 }
        ];

        this.animaisValidos = ['MACACO', 'CROCODILO'];
    }

    analisaRecintos(animal, quantidade) {
        if (!this.animaisValidos.includes(animal)) {
            return {
                erro: "Animal inválido",
                recintosViaveis: false
            };
        }
    
        if (quantidade <= 0) {
            return {
                erro: "Quantidade inválida",
                recintosViaveis: false
            };
        }
    
        let recintosViaveis = this.recintos
            .filter(recinto => recinto.espacoLivre >= quantidade)
            .sort((a, b) => {
                if (a.espacoLivre !== b.espacoLivre) {
                    return b.espacoLivre - a.espacoLivre;
                }
                return a.capacidadeTotal - b.capacidadeTotal;
            });
    
        if (recintosViaveis.length === 0) {
            return {
                erro: "Não há recinto viável",
                recintosViaveis: false
            };
        }
    
        return {
            erro: false,
            recintosViaveis: recintosViaveis.map(recinto => 
                `${recinto.nome} (espaço livre: ${recinto.espacoLivre} total: ${recinto.capacidadeTotal})`
            )
        };
    }
}

export { RecintosZoo as RecintosZoo };
