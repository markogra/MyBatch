const express = require('express');
const { router } = require('../router');
const supertest = require('supertest');
const { beerRecipe, addIngredient, myRecipe } = require("../models/models");

const mongoose = require('mongoose');
const databaseName = 'testdb';

describe('Integration tests', () => {

  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  it('should save an ingredient to the database', async() => {
    const obj = {
      name: 'test',
      ammount: '6',
      type: 'hops'
    }

    const res = await request.post('/inventory').send(obj);

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('test');
  }); 

  it('should find all the ingredients in the database', async() => {
    const res = await request.get('/inventory');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    let boo: boolean = false;
    for(const ingredient of res.body) {
      if(ingredient.name === 'test') {
        boo = true;
      }
    }
    expect(boo).toBe(true);
  })

  it('should delete the ingredient in the database', async() => {
    const ingredient = await addIngredient.findOne({ name: 'test' });
    expect(ingredient.name).toBe('test');

    const res = await request.delete(`/inventory/${ingredient._id}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    const resGet = await request.get('/inventory');
    let boo: boolean = true;
    for(const ingredient of resGet.body) {
      if(ingredient.name === 'test') {
        boo = false;
      }
    }
    expect(boo).toBe(true);
  })
})