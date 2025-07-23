describe('Landing Page', () => {
    it('carrega a página e exibe o título', () => {
      cy.visit('http://localhost:5173');
      cy.contains('Landing com Vite e Tailwind!');
    });
  });
  