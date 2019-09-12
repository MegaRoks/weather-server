import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/index';

chai.use(chaiHttp);

describe('Index', () => {
    describe('GET /api/', () => {
        it('Should return message about work page', (done) => {
            chai
                .request(server)
                .get('/api/')
                .end((err, res) => {
                    expect(res).have.status(200);
                    expect(res.body).have.property('message');
                    expect(res.body.message).to.be.equal('This is my first version of the weather API');
                    done();
                });
        });
    });
});
