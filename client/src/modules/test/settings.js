import Button from './components/button';
import {topButtonsGroup} from './../../helpers/panes';
export default {
  moduleName: 'test',
  routes: [`/test`, `/administration/test`],
  config: {
    title: 'Тестовый модуль',
    image: '', // TODO
    buttons: [
      {
        createType: 'link',
        pane: topButtonsGroup,
        icon: 'download',
        accessRoles: ['*'],
        link: {
          getPath: (location) => {
            // в сложных случаях может потребоваться location (поэтому это функция)
            return '/test';
          },
          tooltip: 'открыть тестовый модуль'
        }
      },
      {
        createType: 'component',
        accessRoles: ['*'],
        component: Button,
        pane: topButtonsGroup,
        tooltip: 'открыть тестовый модуль'
      }
    ]
  }
};
