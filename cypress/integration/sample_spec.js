describe('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })
    it('verifica o header', function(){
      cy.get('header').contains('Minha Lista de Tarefas');
  })

  it('verifica o parágrafo', function(){
    cy.get('p#funcionamento').contains('Clique duas vezes em um item para marcá-lo como completo');
})

it('verifica o input', function(){
    cy.get('input');
})

it('Aperta botão', function(){
    cy.get('input').type("oi")
    cy.get('button#criar').click(); 
    cy.get('li:last-child').contains('oi')
    cy.get('input').should('have.value', '')
})
it('testa ordem', function(){
    cy.get('input').type("oi1")
    cy.get('button#criar').click(); 
    cy.get('input').type("oi2")
    cy.get('button#criar').click();     
    cy.get('input').type("oi3")
    cy.get('button#criar').click();
    cy.get('li:first-child').contains('oi1')
    cy.get('li:last-child').contains('oi3')
})

it('verifica a maozinha do botão', function(){
    cy.get('button').each((e)=>{cy.get(e).trigger('mouseover')
    cy.get(e).should('have.css', 'cursor','pointer')
})})


it('testar seleção', function(){
    cy.get('input').type("oi1")
    cy.get('button#criar').click(); 
    cy.get('input').type("oi2")
    cy.get('button#criar').click();     
    cy.get('input').type("oi3")
    cy.get('button#criar').click();
    cy.get('li:first-child').should('not.have.css', 'color','rgb(255, 0, 0)')
    cy.get('li:last-child').should('not.have.css', 'color','rgb(255, 0, 0)')
    cy.get('li:first-child').click()
    cy.get('li:first-child').should('have.css', 'color','rgb(255, 0, 0)')
    cy.get('li:last-child').click()
    cy.get('li:last-child').should('have.css', 'color','rgb(255, 0, 0)')
})


it('verifica botão que remove completos', function(){
    cy.get('input').type("oi1")
    cy.get('button#criar').click(); 
    cy.get('input').type("oi2")
    cy.get('button#criar').click();     
    cy.get('input').type("oi3")
    cy.get('button#criar').click();
    cy.get('li:first-child').dblclick()
    cy.get('li:last-child').dblclick()
    cy.get('button#remove-completos').click()
    cy.get('li').contains('oi2')
})



//     it('verifica a cor do body', function(){
//       cy.get('body').should('not.have.css', 'backgroundColor', 'rgb(255, 255, 255)')
//     })
//     it('verifica o footer', function(){
//       cy.get('footer#rodape').should('exist');
//     })
//     it('verifica se tem imagea', function(){
//       cy.get('img').should('exist');
//     })
//     it('verifica se tem lista ordenada', function(){
//       cy.get('ol').should('exist');
//     })
//     it('verifica se tem lista não ordenada', function(){
//       cy.get('ul').should('exist');
//     })
//     it('verifica se tem imagea', function(){
//       cy.get('img').should('exist');
//     })
//     it('verifica se tem tabela', function(){
//       cy.get('table').should();
//     })
//     it('verifica se tem link', function(){
//        cy.get('a').click()
//        cy.url().should(); 
// })
})