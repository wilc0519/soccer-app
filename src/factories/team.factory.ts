import { faker } from '@faker-js/faker';
import { Factory } from 'rosie';
import { Team } from '../models';

export default Factory.define(Team.tableName).attrs({
  name: `${faker.company.name()}`,
  fundation_date: faker.date.between(
    '2015-01-01T00:00:00.000Z',
    '2023-12-12T00:00:00.000Z'
  ),
});
