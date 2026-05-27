export class ServicoDePagamentoDeBoleto {
  constructor() {
    this.pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {
    let categoria;
    
    if (valor > 100) {
      categoria = 'Caro'; 
    } else {
      categoria = 'Padrão';
    }

    this.pagamentos.push({  // primeiro método
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor,
      categoria: categoria
    });
  }

  consultarUltimoPagamento() { // segundo método
    return this.pagamentos.at(-1); // Retorna o último item da lista 
  }

  consultar() {
    return this.pagamentos;
  }
}

