import Sequelize from 'sequelize';

const localSyncForce = true;

export default function (sequelize, syncForce) {
  sequelize.Log = sequelize.define('log', {
    key: {
      type: Sequelize.STRING
    },
    message: {
      type: Sequelize.JSON
    },
    type: {
      type: Sequelize.STRING
    },
    time: {
      type: Sequelize.FLOAT
    }
  });
  if (syncForce || localSyncForce) {
    return sequelize.Log.sync({ force: true });
  } else {
    return Promise.resolve();
  }
}
