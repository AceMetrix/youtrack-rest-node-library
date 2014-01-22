var q = require('q');
var request = require('request');
module.exports = function(url){
    if (!url) throw new Error('Invalid YouTrack url format');
    var self = this;

    self.request = request.defaults({jar: true});
    self.login = function(user, pass, cb){
        var d = q.defer();
        self.request.post({url: url + '/rest/user/login', form: {login: user, password: pass}}, function(err, res, body){
            if (err || res.statusCode !== 200){
                err = err || new Error('wrong credentials');
                if (cb) return cb(err);

                return d.reject(err);
            }

            if (cb) return cb();
            d.resolve();
        });
        return d.promise;
    };
    /*
    self.issue = require('./issue');
    self.timeTracking = require('./time-tracking');
    self.user = require('./user');
    self.project = require('./project');
    self.admin = require('./admin');

    self.getSearchIntelliSense = function(query, context, caret, optionsLimit){};
    self.getCommandIntelliSense = function(issueId, command, runAs, caret, optionsLimit){};
    self.getGlobalTimeTrackingSettings = function(){};
    self.getProjecttimeTrackingSettings = function(projectId){};
    self.setGlobalTimeTrackingSettings = function(daysAWeek, hoursADay){};
    self.setProjectTimeTrackingSettings = function(projectId, estimateField, timeSpentfield, enabled){};
    */
}
