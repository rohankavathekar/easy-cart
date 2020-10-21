describe('homepage', () => {
    it('displays all contents of homepage', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-testid="title"]')
        .contains('EasyCart');

    });
  });