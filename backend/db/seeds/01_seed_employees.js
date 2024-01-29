exports.seed = function(knex) {
  return knex('employees').del()
    .then(function () {
      return knex('employees').insert([
        { name: 'Beltrano Martins', description: 'Estagiário do time de TI, com contrato até Jun/2024, com possibilidade de renovação', position: 'Estagiário' },
        { name: 'Fulano da Silva', description: 'Desenvolvedor experiente, responsável pelo desenvolvimento de novas funcionalidades no sistema', position: 'Desenvolvedor' },
        { name: 'Ciclano Oliveira', description: 'Tech Lead da equipe de desenvolvimento, responsável por liderar o time e definir a arquitetura do sistema', position: 'Tech Lead' },
        { name: 'Joana Pereira', description: 'Coordenadora de Recursos Humanos, responsável por gerir a equipe de RH e garantir a aplicação das políticas da empresa', position: 'Coordenadora de RH' },
        { name: 'Carlos Santos', description: 'Analista Financeiro, encarregado das atividades relacionadas à gestão financeira da empresa', position: 'Analista Financeiro' },
        { name: 'Maria Souza', description: 'Assistente Administrativo, auxilia nas atividades administrativas da empresa e apoia as demais áreas', position: 'Assistente Administrativo' },
        { name: 'Roberto Almeida', description: 'Gerente de Projetos, responsável por planejar, executar e acompanhar projetos da empresa', position: 'Gerente de Projetos' },
        { name: 'Ana Lima', description: 'Analista de Qualidade, responsável por garantir a qualidade dos produtos e processos da empresa', position: 'Analista de Qualidade' },
        { name: 'Pedro Barbosa', description: 'Suporte Técnico, presta suporte aos clientes da empresa e auxilia na resolução de problemas técnicos', position: 'Suporte Técnico' },
        { name: 'Juliana Fernandes', description: 'Assistente de Marketing, apoia nas atividades de marketing da empresa, incluindo campanhas e eventos', position: 'Assistente de Marketing' }
      ]);
    });
};