import Sequelize from 'sequelize';

const localSyncForce = true;

export default function (sequelize, syncForce) {
  return new Promise((resolve, reject) => {
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
    });
    if (syncForce || localSyncForce) {
      return sequelize.Log.sync({ force: true })
        .then(() => {
          return sequelize.Log.create({
            key: 'test',
            message: 'test',
            type: 'info'
          })
            .then(resolve)
            .catch(reject);
        });
    } else {
      return resolve();
    }
  });
}
