import { split, lowerCase } from 'lodash'

export default {
    module: 'fleet',
    state: {
        search: '',
        currentPage: 1,
        pageSize: 5,
        selectedIndex: 0,
        total: 0,
        veiculos: 
        // @TODO implements api[GET] with axios
        [{
            "id": 1,
            "combustivel" : "Flex",
            "imagem" : null,
            "marca" : "Volkswagem",
            "modelo" : "Gol",
            "placa" : "FFF-5498",
            "valor" : 20000
        },
        {
            "id": 2,
            "combustivel" : "Gasolina",
            "imagem" : null,
            "marca" : "Volkswagem",
            "modelo" : "Fox",
            "placa" : "FOX-4125",
            "valor" : 20000
        },
        { 
            "id": 3,
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
        'SAVE':   'save',
        'REMOVE': 'remove',
        'SEARCH': 'search',
        'SELECT': 'select',
        'SELECT_ALL': 'selectAll',
        'UPDATE_PAGE': 'updatePage'
    },
    actions: {
        update (veiculo) {
            let veiculos = this.state.get('fleet').veiculos
            let index = veiculos.indexOf(veiculo)

            this.state.merge(['fleet', 'veiculos', index], veiculo)
        },

        save (veiculo) {

            let veiculos = this.state.get('fleet').veiculos
            let index = veiculos.indexOf(veiculo)
            
            if (veiculo.id) {
                let old = veiculos.find(v => v.id == veiculo.id)
                let index = veiculos.indexOf(old)
                
                // @TODO implements api[PUT] with axios
                this.state.merge(['fleet', 'veiculos', index], veiculo)
            } else {
                // @TODO implements api[POST] with axios
                veiculo.id = (veiculos[veiculos.length - 1].id + 1)
                this.state.push(['fleet', 'veiculos'], veiculo)
            }

        },

        search (query) {
            this.state.set(['fleet', 'search'], query)
        },

        remove (veiculo) {
            let veiculos = this.state.get('fleet').veiculos
            let index = veiculos.indexOf(veiculo)

            // @TODO implements api[DELETE] with axios
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
        },

        updatePage (page) {
            this.state.set(['fleet', 'currentPage'], page)
        }
    },
    getters: {
        get veiculos () {

            // @TODO implements api[GET] with axios

            let fleet = this.state.get('fleet')
            let start = (fleet.currentPage * fleet.pageSize) - fleet.pageSize
            let end   = fleet.currentPage * fleet.pageSize

            let filtered = fleet.veiculos.filter( veiculo => {
                return (
                    veiculo.combustivel.toLowerCase().indexOf(
                        fleet.search.toLowerCase()
                    ) > -1 ||
                    veiculo.marca.toLowerCase().indexOf(
                        fleet.search.toLowerCase()
                    ) > -1
                )
            })
            
            // define total
            this.state.set(['fleet', 'total'], filtered.length)

            return filtered.slice(start, end)
        },

        get totalVeiculos () {
            return this.state.get('fleet').total
        },

        get pageSize () {
            return this.state.get('fleet').pageSize
        }
    }
}
