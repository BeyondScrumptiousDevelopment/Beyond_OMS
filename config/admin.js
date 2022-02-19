module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2dea491e8db5599939c3fbad66ce16bd'),
  },
});
