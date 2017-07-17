// preload modules.
const d1 = new Date();
import ('./helpers/modules')
  .then(({getModules}) => {
    return getModules()
      .then(() => {
        const d2 = new Date();
        var timeDiff = Math.abs(d2.getTime() - d1.getTime());
        console.log('preload time:', timeDiff, 'ms');
        require('./Root');
      });
  });
