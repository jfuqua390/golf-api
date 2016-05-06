module.exports = function(Score) {
  Score.beforeRemote('create', function(context, user, next) {
    var req = context.req;

    req.body.data.relationships.golfer.data = {
      id: req.accessToken.userId,
    };

    next();
  });
};
