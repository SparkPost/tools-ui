import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classnames from 'classnames';
import _ from 'lodash';

import { ActionLink } from 'components/button/Button';
import { CopyPopover } from 'components/popover/Popover';
import assembleRecord from '../helpers/assembleRecord';

import './RecordContainer.scss';

class RecordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
      ghostHeight: 0,
      panelWidth: 0
    };

    this.ghost = null;
    this.panel = null;
    this.handleScroll = _.throttle(this.handleScroll.bind(this), 70);
    this.handleResize = _.throttle(this.handleResize.bind(this), 600);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize(e) {
    this.setState({ panelWidth: this.ghost.getBoundingClientRect().width });
  }

  handleScroll(e) {
    const ghost = this.ghost.getBoundingClientRect();
    const panel = this.panel.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (this.state.sticky) {
      this.setState({ ghostHeight: panel.height });
      if (ghost.bottom <= panel.bottom) {
        this.setState({
          ghostHeight: 0,
          sticky: false
        });
      }
    }
    if (!this.state.sticky && windowHeight < panel.bottom + 18) {
      this.setState({
        ghostHeight: panel.height,
        sticky: true
      });
    }
  }

  render() {
    const { form } = this.props;
    const record = assembleRecord(form.values);
    const { ghostHeight, panelWidth } = this.state;

    const classes = classnames('col-xs-12 col-md-10 col-lg-7 builder-record', {
      'is-stickied': form.values.domain && !form.syncErrors.domain && this.state.sticky
    });

    return (
      <div className={classes}>
        <div className='panel panel--accent builder-record__panel' ref={(panel) => this.panel = panel} style={{ width: `${panelWidth}px`}}>
          <div className='panel__body'>
            <div className='float--right'>
              <CopyPopover stringToCopy={record}><ActionLink>Copy</ActionLink></CopyPopover>
            </div>
            <code className='marginBottom--sm'><strong>{record}</strong></code>
            {(form.values.domain && !form.syncErrors.domain) && <p className='builder-record__instruction'>Add this TXT record to your DNS, then <Link to={`/spf/inspector/${form.values.domain}`}>check out the inspector</Link> to make sure you've set it up correctly.</p>}
          </div>
        </div>
        <div className='builder-record__ghost' ref={(ghost) => this.ghost = ghost} style={{ height: `${ghostHeight}px`}}/>
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => ({ form: form.spfBuilder });
export default connect(mapStateToProps)(RecordContainer);
