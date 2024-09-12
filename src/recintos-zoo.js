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
        // Validar se o animal é válido
        if (!this.animaisValidos.includes(animal)) {
            return {
                erro: "Animal inválido",
                recintosViaveis: false
            };
        }
    
        // Validar se a quantidade é válida
        if (quantidade <= 0) {
            return {
                erro: "Quantidade inválida",
                recintosViaveis: false
            };
        }
    
        // Verificar recintos viáveis e ordenar por espaço livre (primeiro critério) e capacidade total (segundo critério)
        let recintosViaveis = this.recintos
            .filter(recinto => recinto.espacoLivre >= quantidade)
            .sort((a, b) => {
                // Ordenar por espaço livre (decrescente)
                if (a.espacoLivre !== b.espacoLivre) {
                    return b.espacoLivre - a.espacoLivre;
                }
                // Em caso de empate no espaço livre, ordenar por capacidade total (crescente)
                return a.capacidadeTotal - b.capacidadeTotal;
            });
    
        if (recintosViaveis.length === 0) {
            return {
                erro: "Não há recinto viável",
                recintosViaveis: false
            };
        }
    
        // Retornar os recintos viáveis
        return {
            erro: false,
            recintosViaveis: recintosViaveis.map(recinto => 
                `${recinto.nome} (espaço livre: ${recinto.espacoLivre} total: ${recinto.capacidadeTotal})`
            )
        };
    }
}

export { RecintosZoo as RecintosZoo };
