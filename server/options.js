import conf from 'config';

function reduceConfig() {
  const ret = {};

  Object.keys(conf).forEach((key) => {
    ret[key] = process.env[key] || conf.get(key);
  });
  if (ret.hasOwnProperty('DEBUG_MODULES')) {
    const modules = ret['DEBUG_MODULES'].replace(/ /g,'');
    ret.debugModules = modules.split(',');
  }

  return ret;
}

const config = reduceConfig();
const options = {
  config,
};

export default options;
