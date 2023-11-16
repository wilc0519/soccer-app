import { Knex } from "knex";
import { Team, Player } from "../../src/models";

const now = new Date();

const teams = [
    {
        id: 1,
        name: "HDS",
        fundationDate: new Date("1979-03-16")
    },
    {
        id: 2,
        name: "LDU",
        fundationDate: new Date("1902-03-15")
    },
    {
        id: 3,
        name: "FC Barcelona",
        fundationDate: new Date("1957-03-16")
    },
    {
        id: 4,
        name: "Emelec",
        fundationDate: new Date("1968-04-16")
    },  
    {
        id: 5,
        name: "Barcelona SC",
        fundationDate: new Date("1967-03-16")
    },
    {
        id: 6,
        name: "Real Madrid",
        fundationDate: new Date("1900-03-16")
    }, 
]

const players = [
    {
        id: 1,
        name: "Wilmer Lopez",
        nationality: "Ecuatoriano",
        identificationDocument: "1714406962",
        teamId: 3
    },
    {
        id: 2,
        name: "Rene Enriquez",
        nationality: "Ecuatoriano",
        identificationDocument: "1754963218",
        teamId: 1
    },
    {
        id: 3,
        name: "Roberto Espinoza",
        nationality: "Ecuatoriano",
        identificationDocument: "1779564123",
        teamId: 2
    },
    {
        id: 4,
        name: "Paul Velez",
        nationality: "Peruano",
        identificationDocument: "1712358945",
        teamId: 4
    },
    {
        id: 5,
        name: "Gustavo Lema",
        nationality: "Tubicola",
        identificationDocument: "1762354795",
        teamId: 5
    },
    {
        id: 6,
        name: "Carlos Barrera",
        nationality: "Espanol",
        identificationDocument: "1767823149",
        teamId: 6
    },
    {
        id: 7,
        name: "Marco Lara",
        nationality: "Cubano",
        identificationDocument: "1703256987",
        teamId: 1
    },
    {
        id: 8,
        name: "Belga",
        nationality: "Belga",
        identificationDocument: "1798745632",
        teamId: 2
    },
    {
        id: 9,
        name: "Marcelo Acosta",
        nationality: "Ecuatoriano",
        identificationDocument: "1736894567",
        teamId: 3
    },
    {
        id: 10,
        name: "Daniel Salgado",
        nationality: "Lunatico",
        identificationDocument: "1723564821",
        teamId: 4
    },
]



export const seed = async (knex: Knex): Promise<void> =>{
    
    await knex(Team.tableName).del();
    await knex(Team.tableName).insert(teams);

    await knex(Player.tableName).del();
    await knex(Player.tableName).insert(players)
};