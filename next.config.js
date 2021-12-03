const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        DB_URI: `mongodb+srv://${process.env['DB_USER']}:${process.env['DB_PASSWORD']}${process.env['DB_HOST']}/${process.env['DB_NAME']}?${process.env['DB_OPTIONS']}`,
        DB_NAME: 'meetups',
      },
    };
  }

  return {
    env: {
      DB_URI: `mongodb+srv://${process.env['DB_USER']}:${process.env['DB_PASSWORD']}${process.env['DB_HOST']}/${process.env['DB_NAME']}?${process.env['DB_OPTIONS']}`,
      DB_NAME: 'meetups',
    },
  };
};
