function authSuccess() {
  import ('./helpers/modules')
    .then(({getModules}) => {
      return getModules()
        .then(() => {
          console.log(2);
          require('./index2');
        });
    });
}
console.log(1);
authSuccess();
