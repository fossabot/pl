/*global event, fdescribe*/
/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/
import React, {Component} from 'react';
import SplitPane from 'react-split-pane';

export default class SnapToPositionExample extends Component {

  constructor (props) {
    super(props);
    const {
      defaultWidthPerc,
      minWidthPerc,
      maxWidthPerc,
      isOpen
    } = this.props.rightSplitPane.toJS();
    const size = this.gw(defaultWidthPerc);
    this.state = {
      size,
      isOpen,
      prevSize: size,
      dragging: false,
      defaultWidthPerc,
      minWidthPerc,
      maxWidthPerc
    };

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  componentDidMount() {
    this.handleDrag(this.state.prevSize);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isOpen !== nextProps.rightSplitPane.get('isOpen')) {
      // TODO
      console.log();
    }
  }
  onWindowResize (e) {
    this.handleDrag(this.state.prevSize);
  }

  handleDragStart () {
    this.setState({
      dragging: true,
    });
  }

  handleDragEnd () {
    this.setState({
      dragging: false,
    });
    setTimeout(() => {
      this.setState({ size: undefined });
    }, 0);
  }

  gw (percent) {
    const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
    const pr = (width / 100) * percent;
    return pr;
  }

  handleDrag (width) {
    const gw = this.gw;
    const {
      minWidthPerc,
      maxWidthPerc
    } = this.state;
    if (width >= gw(maxWidthPerc)) {
      this.setState({ size: gw(maxWidthPerc), prevSize: width });
    } else if (width <= gw(minWidthPerc)) {
      this.setState({ size: gw(minWidthPerc), prevSize: width });
    } else {
      this.setState({ size: undefined, prevSize: width });
    }
  }

  render () {
    const { isOpen, LeftSide, RightSide } = this.props;

    return (
      <div style={{ height: '100%' }}>
        <SplitPane
          pane1Style={{ width: '100%', height: '100%' }}
          pane2Style={{ width: '100%', height: '100%', display: this.state.isOpen ? 'block' : 'none' }}
          size={this.state.dragging ? undefined : this.state.size}
          onChange={this.handleDrag}
          onDragStarted={this.handleDragStart}
          onDragFinished={this.handleDragEnd}
        >
          <div style={{ width: '100%', height: '100%' }}>
            {LeftSide}
          </div>
          <div style={{ width: '100%', height: '100%' }}>
            {RightSide}
          </div>
        </SplitPane>
      </div>
    );
  }
}
