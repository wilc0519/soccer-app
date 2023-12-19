import { faker } from '@faker-js/faker';
import { Factory } from 'rosie';
import { Match } from '../models';

const getDate = ()=>{
    const date = faker.date.past();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    return formattedDate;
}

const getTime = () => {
    const hour = faker.datatype.number({ min: 0, max: 23 });
    const minute = faker.datatype.number({ min: 0, max: 59 }).toString().padStart(2, '0');
    const second = faker.datatype.number({ min: 0, max: 59 }).toString().padStart(2, '0');
    return `${hour}:${minute}:${second}`;
}

export default Factory.define(Match.tableName).attrs({
  nameLocalTeam: `${faker.company.name()}`,
  nameTeamVisit: `${faker.company.name()}`,
  date: getDate(),
  time: getTime(),
  localTeamGoals: faker.datatype.number({ min: 0, max: 9 }),
  awayTeamGoals: faker.datatype.number({ min: 0, max: 9 }),
});
 
