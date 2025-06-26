 
describe('Solicitud de informacion ESAN doctorado ', () => {
  it('Verificar el ingreso de la información del formulario de Doctorado', () => {
     cy.visit('https://www.esan.edu.pe/doctorado#informacion')

     cy.get('#nombres').type('Juan Perez')
       cy.get('[name^=grado_academico]').select('80')
       cy.get('#documento_nro').type('12345678')
       cy.get('#empresa').type('ESAN')
       cy.get('[name^=cargo]').select('Jefatura / Coordinación')
       cy.get('#email').type('jperez@test.com') 
       cy.get('#celular').type('999999999') 
       cy.get('[name^=pais_nacionalidad]').select('PER')
       cy.get('[name^=ciudad_residencia]').select('Lima')
       cy.get('button').contains('Solicitar').click()

  })

  it('Verificar el campo celular sea obligatorio', () => {
     cy.visit('https://www.esan.edu.pe/doctorado#informacion')

     cy.get('#nombres').type('Juan Perez')
       cy.get('[name^=grado_academico]').select('80')
       cy.get('#documento_nro').type('12345678')
       cy.get('#empresa').type('ESAN')
       cy.get('[name^=cargo]').select('Jefatura / Coordinación')
       cy.get('#email').type('jperez@test.com') 
       cy.get('[name^=pais_nacionalidad]').select('PER')
       cy.get('[name^=ciudad_residencia]').select('Lima')
    
         cy.get('button').contains('Solicitar').click()


  })

   it('Verificar el campo documento sea obligatorio', () => {
     cy.visit('https://www.esan.edu.pe/doctorado#informacion')

     cy.get('#nombres').type('Juan Perez')
       cy.get('[name^=grado_academico]').select('80')
       cy.get('#empresa').type('ESAN')
       cy.get('[name^=cargo]').select('Jefatura / Coordinación')
       cy.get('#email').type('jperez@test.com') 
       cy.get('[name^=pais_nacionalidad]').select('PER')
       cy.get('[name^=ciudad_residencia]').select('Lima')
       cy.get('#celular').type('999999999') 
         cy.get('button').contains('Solicitar').click()
  })

        //   cy.wait(1000)

 //cy.get('button').should('have.value', 'SOLICITAR INFORMACIÓN')
 //Solicitar información
 // cy.get('.btn btn-primary btn-lg text-uppercase home-btn-masinformacion-solicitar').contains('Solicitar información').click()
      
      // cy.wait(2000)

      //  cy.on("window:confirm", (t) => {
      //    //verify text on pop-up
      //    expect(t).to.equal("Debe aceptar las condiciones de tratamiento para mis datos personales.");
      // });
})