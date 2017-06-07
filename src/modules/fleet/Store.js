
export default {
    module: 'fleet',
    state: {
        search: '',
        veiculos: [{
            "combustivel" : "Flex",
            "imagem" : null,
            "marca" : "Volkswagem",
            "modelo" : "Gol",
            "placa" : "FFF-5498",
            "valor" : 20000
        },
        {
            "combustivel" : "Gasolina",
            "imagem" : null,
            "marca" : "Volkswagem",
            "modelo" : "Fox",
            "placa" : "FOX-4125",
            "valor" : 20000
        },
        { 
            "combustivel" : "Alcool",
            "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
            "marca" : "Volkswagen",
            "modelo" : "Fusca",
            "placa" : "PAI-4121",
            "valor" : 20000
        }]
    },
    handlers: {
        'UPDATE': 'update',
        'ADD': 'add',
        'REMOVE': 'remove'
    },
    actions: {
        update () {
            this.state.merge('veiculos', veiculo)
        },

        add (veiculo) {
            this.state.push('veiculos', veiculo)
        },

        remove () {

        }
    },
    getters: {
        get veiculos () {
            let fleet = this.state.get('fleet')

            return fleet.veiculos.filter( veiculo => {
                return (
                    veiculo.combustivel.indexOf(fleet.search) > -1 ||
                    veiculo.marca.indexOf(fleet.search) > -1
                )
            })
        }
    }
}