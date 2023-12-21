import { Knex } from 'knex';

const now = new Date();

const teams = [
  {
    id: 1,
    name: 'HDS',
    fundation_date: new Date('1979-03-16'),
  },
  {
    id: 2,
    name: 'LDU',
    fundation_date: new Date('1902-03-15'),
  },
  {
    id: 3,
    name: 'FC Barcelona',
    fundation_date: new Date('1957-03-16'),
  },
  {
    id: 4,
    name: 'Emelec',
    fundation_date: new Date('1968-04-16'),
  },
  {
    id: 5,
    name: 'Barcelona SC',
    fundation_date: new Date('1967-03-16'),
  },
  {
    id: 6,
    name: 'Real Madrid',
    fundation_date: new Date('1900-03-16'),
  },
];

const players = [
  {
    id: 1,
    name: 'Wilmer Lopez',
    nationality: 'Ecuatoriano',
    birthdate: new Date('1979-05-19'),
    identification_number: '1714406962',
    team_id: 3,
  },
  {
    id: 2,
    name: 'Rene Enriquez',
    nationality: 'Ecuatoriano',
    birthdate: new Date('1987-01-27'),
    identification_number: '1754963218',
    team_id: 1,
  },
  {
    id: 3,
    name: 'Roberto Espinoza',
    nationality: 'Ecuatoriano',
    birthdate: new Date('1987-01-27'),
    identification_number: '1779564123',
    team_id: 2,
  },
  {
    id: 4,
    name: 'Paul Velez',
    nationality: 'Peruano',
    birthdate: new Date('1987-01-27'),
    identification_number: '1712358945',
    team_id: 4,
  },
  {
    id: 5,
    name: 'Gustavo Lema',
    nationality: 'Tubicola',
    birthdate: new Date('1987-01-27'),
    identification_number: '1762354795',
    team_id: 5,
  },
  {
    id: 6,
    name: 'Carlos Barrera',
    nationality: 'Espanol',
    birthdate: new Date('1987-01-27'),
    identification_number: '1767823149',
    team_id: 6,
  },
  {
    id: 7,
    name: 'Marco Lara',
    nationality: 'Cubano',
    birthdate: new Date('1987-01-27'),
    identification_number: '1703256987',
    team_id: 1,
  },
  {
    id: 8,
    name: 'Belga',
    nationality: 'Belga with V',
    birthdate: new Date('1987-01-27'),
    identification_number: '1798745632',
    team_id: 2,
  },
  {
    id: 9,
    name: 'Marcelo Acosta',
    nationality: 'Ecuatoriano',
    birthdate: new Date('1987-01-27'),
    identification_number: '1736894567',
    team_id: 3,
  },
  {
    id: 10,
    name: 'Daniel Salgado',
    nationality: 'Lunatico',
    birthdate: new Date('1987-01-27'),
    identification_number: '1723564821',
    team_id: 4,
  },
];

const matches =[
  {
    id:1,
    date: new Date('2023-02-26'),
    time: '13:00',
    name_local_team:"Barcelona",
    name_team_visit: 'LDU',
    local_team_goals: 3,
    away_team_goals: 2
  },
  {
    id:2,
    date: new Date('2023-02-26'),
    time: '14:30',
    name_local_team:"HDS",
    name_team_visit: 'EMELEC',
    local_team_goals: 2,
    away_team_goals: 2
  },
  {
    id:3,
    date: new Date('2023-03-05'),
    time: '13:00',
    name_local_team:"EMELEC",
    name_team_visit: 'BARCELONA',
    local_team_goals: 5,
    away_team_goals: 4
  },
  {
    id:4,
    date: new Date('2023-03-05'),
    time: '14:30',
    name_local_team:"HDS",
    name_team_visit: 'LDU',
    local_team_goals: 3,
    away_team_goals: 2
  },
  {
    id:5,
    date: new Date('2023-03-12'),
    time: '13:00',
    name_local_team:"HDS",
    name_team_visit: 'BARCELONA',
    local_team_goals: 3,
    away_team_goals: 2
  },
  {
    id:6,
    date: new Date('2023-03-12'),
    time: '14:30',
    name_local_team:"EMELEC",
    name_team_visit: 'LDU',
    local_team_goals: 2,
    away_team_goals: 2
  },
  {
    id:7,
    date: new Date('2023-03-19'),
    time: '13:00',
    name_local_team:"BARCELONA",
    name_team_visit: 'HDS',
    local_team_goals: 5,
    away_team_goals: 4
  },
  {
    id:8,
    date: new Date('2023-03-19'),
    time: '14:30',
    name_local_team:"LDU",
    name_team_visit: 'EMELEC',
    local_team_goals: 3,
    away_team_goals: 2
  }
]

export const seed = async (knex: Knex): Promise<void> => {
  await knex.raw('TRUNCATE TABLE "player" CASCADE');
  await knex.raw('TRUNCATE TABLE "team" CASCADE');
  await knex.raw('TRUNCATE TABLE "match" CASCADE');
  await knex('team').insert(teams);
  await knex('player').insert(players);
  await knex('match').insert(matches);
};
