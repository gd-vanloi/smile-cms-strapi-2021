module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2fc4ec867593c23b4ce4002d4e845765'),
  },
});
