import reducer from './reducer';
import actions from './actions';
import {list} from './../../helpers/panes';
import toggleButton from './toggleButton';

export default {
  ...{
    reducer,
    actions,
    config: {
      buttons: [
        {
          createType: 'component',
          accessRoles: ['*'],
          component: toggleButton,
          pane: list.topButtonsGroup,
          tooltip: 'открыть/скрыть правую панель'
        }
      ]
    }
  },
};
