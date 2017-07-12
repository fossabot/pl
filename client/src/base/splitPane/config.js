import ToggleButton from './components/toggleButton';
import {list} from './../../helpers/panes';

export default {
  moduleName: 'splitPane',
  config: {
    title: 'Split панель',
    image: '', // TODO
    buttons: [
      {
        createType: 'component',
        accessRoles: ['*'],
        component: ToggleButton,
        pane: list.topButtonsGroup,
        tooltip: 'открыть/скрыть правую панель'
      }
    ]
  }
}
