import {list} from './../../helpers/panes';
import {getFirstParam} from './../../helpers/routes';

export default {
  moduleName: 'test',
  routes: [`/map/test`, `/administration/test`],
  config: {
    title: 'Тестовый модуль',
    image: '', // TODO
    buttons: [
      {
        createType: 'link',
        pane: list.topRightButtonsGroup,
        icon: 'gift',
        accessRoles: ['*'],
        rightPaneOpeningRequired: true,
        link: {
          getPath: (pathname) => {
            // в сложных случаях может потребоваться location (поэтому это функция)
            return `${getFirstParam(pathname)}/test`;
          },
          tooltip: 'открыть тестовый модуль'
        }
      }
    ]
  }
};
