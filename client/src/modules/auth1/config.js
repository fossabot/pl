import {list} from './../../helpers/panes';
import {getFirstParam} from './../../helpers/routes';

export default {
  moduleName: 'auth',
  routes: [`/auth`, `/administration/auth`, `/map/auth`],
  config: {
    title: 'Авторизация',
    image: '', // TODO
    buttons: [
      {
        createType: 'link',
        pane: list.topButtonsGroup,
        icon: 'user',
        accessRoles: ['*'],
        rightPaneOpeningRequired: true,
        link: {
          getPath: (pathname) => {
            // в сложных случаях может потребоваться pathname (поэтому это функция)
            return `${getFirstParam(pathname)}/auth`;
          },
          tooltip: 'личный кабинет'
        }
      }
    ]
  }
};
