import { faker } from '@faker-js/faker';
import { Factory } from 'rosie';
import { Player } from '../models';

export default Factory.define(Player.tableName).attrs({
  name: `${faker.name.fullName()}`,
  nationality: faker.random.word(),
  identification_number: faker.datatype.number({
    min: 1700000000,
    max: 1799999999,
  }),
  birthdate: faker.date.past(),
  team_id: faker.datatype.number({ min: 1, max: 4 }),
});
