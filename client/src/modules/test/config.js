import {list} from './../../helpers/panes';

export default {
  moduleName: 'test',
  routes: [`/test`, `/administration/test`],
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
          getPath: (location) => {
            // в сложных случаях может потребоваться location (поэтому это функция)
            return '/test';
          },
          tooltip: 'открыть тестовый модуль'
        }
      }
    ]
  }
};
