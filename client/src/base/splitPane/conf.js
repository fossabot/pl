import * as reducers from './reducers';
import * as actions from './actions';
import {list} from './../../helpers/panes';
import toggleButton from './toggleButton';

export default {
  ...{
    reducers,
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
