function Veiculo ($resource) {
    return $resource('/api/veiculos')
}

Veiculo.$inject = ['$resource']

export default Veiculo