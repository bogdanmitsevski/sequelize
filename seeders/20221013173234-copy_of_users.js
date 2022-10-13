'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
      id: "5",
      uuid: "5001",
      name: "bohdan",
      email: "bodik@gmail.com",
      role: "user",
      createdAt: "2022-10-13T17:21:34.360Z",
      updatedAt: "2022-10-13T17:22:35.972Z"
        },
  {
    id: "1",
    uuid: "2000",
    name: "Bohdanakkllk",
    email: "123@gmfail.com",
    role: "admin",
    createdAt: "2022-10-13T11:26:25.786Z",
    updatedAt: "2022-10-13T11:26:25.786Z"
      },
  { 
    id: "2",
    uuid: "5001",
    name: "Bohdanakkllk",
    email: "123@gmfail.com",
    role: "admin",
    createdAt: "2022-10-13T11:26:25.786Z",
    updatedAt: "2022-10-13T11:26:25.786Z"
      }], {});
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
