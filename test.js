//--------Librerias para test con puppeteer
//const puppeteer = require('puppeteer-extra');
const puppeteer = require('puppeteer');
const { expect }  = require('chai');

//--------------------------------------------------------------------

//--------Librerias para test-jest usando jquery y Dom de javascript
/*
var jsdom = require('jsdom');
const  {  JSDOM  }  =  jsdom ;

var jquery = require('jquery');

var fs = require('fs');
*/

//--------------------------------------------------------------------

//--------Librerias para test con supertest
/*
const router = require('./router');

const request = require('supertest');
*/

//--------------------------------------------------------------------

//--------Librerias para test con nodejs
//const test = require('node:test');
//const assert = require('node:assert/strict');

//--------------------------------------------------------------------


//---------Pruebas con jquery y Dom de frontend
//test("prueba", async () => {
/*
test("prueba", () => {
 
    //expect($('#ti').find("<title>").html()).toContain('Crud');
    //expect(window.location.href).toBe('http://localhost:5000/');

  fs.readFile('./views/index.ejs', {encoding: "utf8"}, function (err, markup) {
    if (err) throw err;
      
    const  { window }  =  new  JSDOM (markup); 
    $  =  jquery(window);
    //expect($('#ti').html()).toBe('Crud');
    expect($('#ti').text()).toBe('Crudm');

    //const  dom  =  new  JSDOM (markup);
    //expect(dom.window.document.querySelector("#ti").textContent).toBe('Crud');
    //expect(dom.window.document.getElementById("ti").textContent).toBe('Crud');
  });
});


test("prueba2", () => {

  fs.readFile('./views/index.ejs', {encoding: "utf8"}, function (err, markup) {
    if (err) throw err;

    const  dom  =  new  JSDOM (markup);
    expect(dom.window.location.href).toBe('http://localhost:5000/j');
  });
});

test("prueba3", () => {

  fs.readFile('./views/index.ejs', {encoding: "utf8"}, function (err, markup) {
    if (err) throw err;

    //const  dom  =  new  JSDOM (markup);
    //expect(dom.window.document.querySelector("#user11").textContent).toBe('u');
    //expect(dom.window.document.getElementById("user11").textContent).toBe('Usuario');

    const  { window }  =  new  JSDOM (markup); 
    $  =  jquery(window);
    //expect($('#user11').html()).toBe('use2');
    expect($('#user11').text()).toBe('Usuario');
  });
});

test("prueba4", () => {
  fs.readFile('./views/index.ejs', {encoding: "utf8"}, function (err, markup) {
    if (err) throw err;

    //const  { window }  =  new  JSDOM (markup); 
    //$  =  jquery(window);
    //expect(getByTestId('ima')).toBeVisible();
    //expect($('<i>').length).toBeVisible();
    //expect($("#ima").next()).toBeVisible();
    //expect($('<i>')).toBeInTheDocument();

    const  dom  =  new  JSDOM (markup);
    //expect(dom.window.document.querySelector("#ima")).toBeVisible();
    //expect(dom.window.document.getElementById("ima")).toBeVisible();
    expect(dom.window.document.getElementById("ima")).toBeInTheDocument();   
  });
});
*/

//---------------------------------------------------------------------

//--------Pruebas con supertest de backend
//Con supertest no funciono la prueba del backend en las url

//describe("Conjunto de pruebas", () => {

//test("prueba5", async () => {
         
     //const response = await request(router).get('/').send();
     //console.log(response);
     //expect(response.statusCode).toBe(200);

//});

/*
test("prueba6", async () => {
  const response = await request(router).get('/create').send();
  console.log(response);
  expect(response.statusCode).toBe(200);
});
*/
//});

/*
const response = await request(router).get('/').send();
console.log(response);
expect(response.statusCode).toBe(200);
*/

//--------------------------------------------------------------------

//---------Pruebas con puppeteer en backend
describe('Conjunto de pruebas', () => {

let browser;
let page;

beforeEach(async () => {
  //browser = await puppeteer.launch();
  //const browser = await puppeteer.launch({headless: true});
  //const browser = await puppeteer.launch({headless: 'new'});
  const browser = await puppeteer.launch({headless: false});
  page = await browser.newPage();
  await page.goto('http://localhost:5000/');
  //await page.goto('http://localhost:5000/create');
  //await page.goto('http://localhost:5000/edit/3');
});

/*
afterEach(async () => {
  const browser = await puppeteer.launch({headless: false});
  page = await browser.newPage();
  await browser.close();
  await page.close();
});
*/

/*
it('Prueba 1', async () => {
  expect(await page.url()).to.eql('http://localhost:5000/');
  expect(await page.title()).to.eql('Crud');
});
*/

/*
it('Prueba 2', async () => {
  expect(await page.url()).to.eql('http://localhost:5000/');
});
*/

/*
it('Prueba 2', async () => {
  expect(await page.url()).to.eql('http://localhost:5000/create');
});
*/

/*
it('Prueba 2', async () => {
  expect(await page.url()).to.eql('http://localhost:5000/edit/3');
});
*/

/*
it('Prueba 1', async () => {
  
  const text = await page.evaluate(() => {
    //return document.querySelector("#user11").textContent;
    return document.getElementById("user1").textContent;
  });
  expect(text).to.contain('Sebas');
});
*/

it('Prueba 1', async () => {
  
  const imagen = await page.evaluate(() => {
    return Array.from(document.getElementById("ima"));
    //return Array.from(document.querySelector("#ima"));
  });
  expect(imagen.length).to.be.greaterThan(0);
});

});