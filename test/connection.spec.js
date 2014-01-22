var should = require('chai').should();
var q = require('q');
var Connection = require('../');
describe('#connection', function(){
    it('exists as a constructor', function(){
        Connection.should.be.a('function');
    });
    it('can be instantiated with youtrack url', function(){
        new Connection('http://youtrack:1234/');
    });
    it('throws an error when youtrack url is empty', function(){
        (function(){
            new Connection()
        }).should.throw('Invalid YouTrack url format');
    });
    describe('new instances', function(){
        var connection; 
        before(function(){
            connection = new Connection('http://localhost:3000');
        });
        it('have a login method', function(){
            connection.login.should.be.a('function');
        });
        it('returns with a promise when you login', function(){
            q.isPromise(connection.login('root', 'admin')).should.be.true;
        });
        it('allows you to login with username and password', function(done){
            connection.login('root', 'admin', function(err){
                should.not.exist(err);
                done();
            });
        });
        it('rejects the promise when wrong credentials', function(done){
            connection.login('root', 'badpassword').fail(function(err){
                should.exist(err);
                done();
            });
        });
        it('returns callback with an error when wrong credentials', function(){
            connection.login('root', 'badpassword', function(err){
                should.exist(err);
                done();
            });
        });
    });
});
