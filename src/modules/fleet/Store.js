import { split, lowerCase } from 'lodash'

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
        'REMOVE': 'remove',
        'SEARCH': 'search',
        'SELECT': 'select',
        'SELECT_ALL': 'selectAll'
    },
    actions: {
        update (veiculo) {
            let veiculos = this.state.get('fleet').veiculos
            let index = veiculos.indexOf(veiculo)

            this.state.merge(['fleet', 'veiculos', index], veiculo)
        },

        add (veiculo) {
            this.state.push(['fleet', 'veiculos'], veiculo)
        },

        search (query) {
            this.state.set(['fleet', 'search'], query)
        },

        remove (veiculo) {
            let veiculos = this.state.get('fleet').veiculos
            let index = veiculos.indexOf(veiculo)

            this.state.unset(['fleet', 'veiculos', index])
        },

        select (veiculo) {
            let veiculos = this.state.get('fleet').veiculos
            let index = veiculos.indexOf(veiculo)

            this.state.merge(['fleet', 'veiculos', index], {
                selecionado: !veiculo.selecionado
            })
        },

        selectAll (selecionado) {
            let veiculos = this.state.get('fleet').veiculos

            veiculos.map( (veiculo, index) => {
                this.state.merge(['fleet', 'veiculos', index], {
                    selecionado
                })
            })
        }
    },
    getters: {
        get veiculos () {
            let fleet = this.state.get('fleet')

            return fleet.veiculos.filter( veiculo => {
                return (
                    veiculo.combustivel.toLowerCase().indexOf(
                        fleet.search.toLowerCase()
                    ) > -1 ||
                    veiculo.marca.toLowerCase().indexOf(
                        fleet.search.toLowerCase()
                    ) > -1
                )
            })
        }
    }
}
