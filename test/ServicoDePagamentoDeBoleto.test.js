import { ServicoDePagamentoDeBoleto } from '../src/ServicoDePagamentoDeBoleto.js';
import assert from 'node:assert';

describe('Testes do Módulo de Pagamento de Boleto',  () => {

    describe('Testes da função ServicoDePagamentoDeBoleto',  () => {        
        it('Deve atribuir a categoria "Caro" para pagamentos acima de 100.00',  () => { 

            // Arrange (O que eu preciso preparar para testar?)
            const servicoDePagamento = new ServicoDePagamentoDeBoleto();

            // Act (Qual ação vou executar?)
            servicoDePagamento.pagar('0987-7656-3475', 'Samar', 101.00);
            const pagamentos = servicoDePagamento.consultar();
            const meuPagamento = pagamentos.at(-1);

            // Assert (O resultado foi o esperado?)
             assert.equal(meuPagamento.codigoBarras, '0987-7656-3475');
             assert.equal(meuPagamento.empresa, 'Samar');
             assert.equal(meuPagamento.valor, 101.00);
             assert.equal(meuPagamento.categoria,'Caro');
    });
});

        it('Deve atribuir a categoria "Padrão" para pagamentos menores de 100.00',  () => { 

           // Arrange (O que eu preciso preparar para testar?)
            const servicoDePagamento = new ServicoDePagamentoDeBoleto();

        // Act (Qual ação vou executar?)
            servicoDePagamento.pagar('1099-4816-6444', 'CPFL', 99.99);
            const pagamentos = servicoDePagamento.consultar();
            const meuPagamento = pagamentos.at(-1);

        // Assert (O resultado foi o esperado?)
             assert.equal(meuPagamento.codigoBarras, '1099-4816-6444');
             assert.equal(meuPagamento.empresa, 'CPFL');
             assert.equal(meuPagamento.valor, 99.99);
             assert.equal(meuPagamento.categoria,'Padrão');
        
    });

});
