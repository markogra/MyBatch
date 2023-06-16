import { request } from "express";

const express = require('express');
const { router } = require('../router');
const supertest = require('supertest');
const { beerRecipe, addIngredient, myRecipe } = require("../models/models");

const mongoose = require('mongoose');
const databaseName = 'testdb';

describe('Ingredient tests', () => {

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
    console.log(1, ingredient._id.toString());

    const res = await request.delete(`/inventory/${ingredient._id.toString()}`);

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

describe('myrecipes tests', () => {

  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);
  
  it('should post to the database', async() => {
    const obj = {
      name: 'test2',
      style: 'test',
      ingredients: [],
      instructions: 'test',
    }

    const res = await request.post('/my-recipes').send(obj);

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('test2');
  })

  it('should get all of my recipes from the database', async() => {
    const res = await request.get('/my-recipes');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    let boo: boolean = false;
    for(const ingredient of res.body) {
      if(ingredient.name === 'test2') {
        boo = true;
      }
    }
    expect(boo).toBe(true);
  })

  it('should remove the posts made during testing from the database', async() => {
    await myRecipe.deleteMany({name: 'test2'});

    const res = await request.get('/my-recipes');
    let boo: boolean = true;
    for(const ingredient of res.body) {
      if(ingredient.name === 'test2') {
        boo = false;
      }
    }
    expect(boo).toBe(true);
  })
})

describe('our recipe test', () => {

  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  it('should post to the database', async() => {
    const obj = {
      name: 'test3',
      style: 'test',
      ingredients: {
        malts: [],
        hops: [],
        yeast: 'test'
      },
      instructions: [],
    }

    const res = await request.post('/our-recipes').send(obj);

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('test3');
  })

  it('should get all recipes from the database', async() => {
    const res = await request.get('/our-recipes');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    let boo: boolean = false;
    for(const ingredient of res.body) {
      if(ingredient.name === 'test3') {
        boo = true;
      }
    }
    expect(boo).toBe(true);
  })

  it('should remove all posts made from the databse', async() => {
    await beerRecipe.deleteMany({name: 'test3'});

    const res = await request.get('/our-recipes');
    let boo: boolean = true;
    for(const ingredient of res.body) {
      if(ingredient.name === 'test3') {
        boo = false;
      }
    }
    expect(boo).toBe(true);
  })
})

describe('edge cases', () => {

  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  it('should return false when delete ingredients request has wrong id', async() => {

    const res = await request.delete(`/inventory/648c501c3e9ba690f49116ab`);

    expect(res.status).toBe(500);
    expect(res.body.success).toBe(false);
  })

  it('should not create an ingredient if it does not have the needed feilds', async() => {
    const obj = {
      ammount: '6',
      type: 'hops'
    }

    const res = await request.post('/inventory').send(obj);

    expect(res.status).toBe(400);
  });

  it('should not create a post in my recipes if it does not have the needed feilds', async() => {
    const obj = {
      style: 'test',
      ingredients: [],
      instructions: 'test',
    }

    const res = await request.post('/my-recipes').send(obj);

    expect(res.status).toBe(400);
  });

  it('should not create a post in our recipes if it does not have the needed feilds', async() => {
    const obj = {
      style: 'test',
      ingredients: {
        malts: [],
        hops: [],
        yeast: 'test'
      },
      instructions: [],
    }

    const res = await request.post('/our-recipes').send(obj);

    expect(res.status).toBe(400);
  });
})

describe('security', () => {

  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  it('should not be vunreable to MongoDB query injection', async() => {
    const obj = {
      name: '{"$ne": null}',
      ammount: '6',
      type: 'hops'
    }

    const res = await request.post('/inventory').send(obj);

    expect(res.status).toBe(201);
    expect(res.body).not.toEqual(expect.objectContaining({ name: obj.name }));
  });

  it('should not be vunreable to NoSQL injection', async() => {
    const obj = {
      name: '{"$gt": ""}',
      ammount: '6',
      type: 'hops'
    }

    const res = await request.post('/inventory').send(obj);

    expect(res.status).toBe(201);
    expect(res.body).not.toEqual(expect.objectContaining({ name: obj.name }));
  });
})

