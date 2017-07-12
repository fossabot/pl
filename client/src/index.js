function authSuccess() {
  import ('./helpers/modules')
    .then(({getModules}) => {
      return getModules()
        .then(() => {
          console.log(2);
          require('./Root');
        });
    });
}
console.log(1);
authSuccess();
