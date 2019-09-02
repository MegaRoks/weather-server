import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker';

import { getLocalityForWeather, getDataAboutWeather } from '../../src/controllers/weather';
import server from '../../src/index';

chai.use(chaiHttp);

describe('Get current weather by city name', () => {
    describe('POST /api/weather/get-current-weather', () => {
        it(`Should get the weather by city name`, (done) => {
            chai
                .request(server)
                .post('/api/weather/get-current-weather')
                .send({ 'city': 'Omsk' }) // faker.address.city я думал что города из faker должны подойти для API :(
                .send({ 'lang': faker.random.locale() })
                .end((err, res) => {
                    expect(res).have.status(200);
                    expect(res.body).have.property('weatherNow');
                    expect(Object.keys(res.body.weatherNow).length).to.deep.equal(5);
                    expect(res.body.weatherNow).to.have.own.property('cityName').to.be.an('string');
                    expect(res.body.weatherNow).to.have.own.property('weather').to.be.an('object');
                    expect(Object.keys(res.body.weatherNow.weather).length).to.deep.equal(4);
                    expect(res.body.weatherNow.weather).to.have.own.property('main').to.be.an('string');
                    expect(res.body.weatherNow.weather).to.have.own.property('temp').to.be.an('number');
                    expect(res.body.weatherNow.weather).to.have.own.property('description').to.be.an('string');
                    expect(res.body.weatherNow.weather).to.have.own.property('icon').to.be.an('string');
                    expect(res.body.weatherNow).to.have.own.property('wind').to.be.an('object');
                    expect(Object.keys(res.body.weatherNow.wind).length).to.deep.equal(2);
                    expect(res.body.weatherNow.wind).to.have.own.property('windSpeed').to.be.an('number');
                    expect(res.body.weatherNow.wind).to.have.own.property('windDirection').to.be.an('number');
                    expect(res.body.weatherNow).to.have.own.property('pressure').to.be.an('number');
                    expect(res.body.weatherNow).to.have.own.property('humidity').to.be.an('number');
                    done();
                });
        });
    });
});

describe('Get current weather by lat and lon', () => {
    describe('POST /api/weather/get-current-weather', () => {
        it(`Should get the weather by lat and lon`, (done) => {
            chai
                .request(server)
                .post('/api/weather/get-current-weather')
                .send({ 'lat': faker.address.latitude() })
                .send({ 'lon': faker.address.longitude() })
                .send({ 'lang': faker.random.locale() })
                .end((err, res) => {
                    expect(res).have.status(200);
                    expect(res.body).have.property('weatherNow');
                    expect(Object.keys(res.body.weatherNow).length).to.deep.equal(5);
                    expect(res.body.weatherNow).to.have.own.property('cityName').to.be.an('string');
                    expect(res.body.weatherNow).to.have.own.property('weather').to.be.an('object');
                    expect(Object.keys(res.body.weatherNow.weather).length).to.deep.equal(4);
                    expect(res.body.weatherNow.weather).to.have.own.property('main').to.be.an('string');
                    expect(res.body.weatherNow.weather).to.have.own.property('temp').to.be.an('number');
                    expect(res.body.weatherNow.weather).to.have.own.property('description').to.be.an('string');
                    expect(res.body.weatherNow.weather).to.have.own.property('icon').to.be.an('string');
                    expect(res.body.weatherNow).to.have.own.property('wind').to.be.an('object');
                    expect(Object.keys(res.body.weatherNow.wind).length).to.deep.equal(2);
                    expect(res.body.weatherNow.wind).to.have.own.property('windSpeed').to.be.an('number');
                    expect(res.body.weatherNow.wind).to.have.own.property('windDirection').to.be.an('number');
                    expect(res.body.weatherNow).to.have.own.property('pressure').to.be.an('number');
                    expect(res.body.weatherNow).to.have.own.property('humidity').to.be.an('number');
                    done();
                });
        });
    });
});

describe('Get the current weather for a nonexistent city', () => {
    describe('POST /api/weather/get-current-weather', () => {
        it(`Should get an error since the city does not exist`, (done) => {
            chai
                .request(server)
                .post('/api/weather/get-current-weather')
                .send({ 'city': faker.address.city() })
                .send({ 'lang': faker.random.locale() })
                .end((err, res) => {
                    expect(res).have.status(500);
                    expect(res.body).have.property('err');
                    expect(res.body.err).to.be.an('string');
                    done();
                });
        });
    });
});

describe('Get current weather for non-existent coordinates', () => {
    describe('POST /api/weather/get-current-weather', () => {
        it(`An error should appear, since such coordinates do not exist`, (done) => {
            chai
                .request(server)
                .post('/api/weather/get-current-weather')
                .send({ 'lat': faker.random.number() })
                .send({ 'lon': faker.random.number() })
                .send({ 'lang': faker.random.locale() })
                .end((err, res) => {
                    expect(res).have.status(500);
                    expect(res.body).have.property('err');
                    expect(res.body.err).to.be.an('string');
                    done();
                });
        });
    });
});

describe('Get current weather for non-existent language', () => {
    describe('POST /api/weather/get-current-weather', () => {
        it(`An error should appear, since such a language does not exist`, (done) => {
            chai
                .request(server)
                .post('/api/weather/get-current-weather')
                .send({ 'lat': faker.random.number() })
                .send({ 'lon': faker.random.number() })
                .send({ 'lang': faker.random.arrayElement() })
                .end((err, res) => {
                    expect(res).have.status(500);
                    expect(res.body).have.property('err');
                    expect(res.body.err).to.be.an('string');
                    done();
                });
        });
    });
});


describe('Get current weather for non-existent language', () => {
    it(`An error should appear, since such a language does not exist`, (done) => {
        chai
            .request(server)
            .post('/api/weather/get-current-weather')
            .send({ 'lat': faker.random.number() })
            .send({ 'lon': faker.random.number() })
            .send({ 'lang': faker.random.arrayElement() })
            .end((err, res) => {
                expect(res).have.status(500);
                expect(res.body).have.property('err');
                expect(res.body.err).to.be.an('string');
                done();
            });
    });
});

describe('getLocalityForWeather function', () => {
    it('Must get a city', () => {
        const city = 'Omks';
        expect(getLocalityForWeather(city, null, null)).to.eql(`q=${city}`);
    });
});

describe('getLocalityForWeather function', () => {
    it('Must get coordinates', () => {
        const lat = faker.address.latitude();
        const lon = faker.address.longitude();
        expect(getLocalityForWeather(null, lat, lon)).to.eql(`lat=${lat}&lon=${lon}`);
    });
});

describe('getDataAboutWeather function', () => {
    it('The request should success', async () => {
        const link = 'http://ip.jsontest.com';
        expect(await getDataAboutWeather(link)).to.be.an('object');
    });
});
