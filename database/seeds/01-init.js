exports.seed = function(knex) {
  const departments = [
    {
      name: 'Admin',
      abbreviation: 'AD'
    },
    {
      name: 'Backend',
      abbreviation: 'BE'
    },
    {
      name: 'Front End',
      abbreviation: 'UX'

    },
    {
      name: 'Dev Ops',
      abbreviation: 'DO'
    },
    {
      name: 'Quality Assurance',
      abbreviation: 'QA'

    }
  ];

  return knex('departments')
    .insert(departments)
    .then(() => console.log('Seed data for department added'))
}