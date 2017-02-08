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
      sticky: true
    };

    this.ghost = null;
    this.panel = null;
    this.handleScroll = _.throttle(this.handleScroll.bind(this), 200);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    const ghostTop = this.ghost.getBoundingClientRect().top;
    const panelTop = this.panel.getBoundingClientRect().top;
    const panelBottom = this.panel.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (this.state.sticky && ghostTop <= panelTop) {
      this.setState({ sticky: false });
    } else if (!this.state.sticky && windowHeight < panelBottom + 18) {
      this.setState({ sticky: true });
    }
  }

  render() {
    const { form } = this.props;
    const record = assembleRecord(form.values);

    const classes = classnames('col-xs-12 col-md-10 col-lg-7 builder-record', {
      'is-stickied': this.state.sticky
    });

    return (
      <div className={classes}>
        <div className='panel panel--accent builder-record__panel' ref={(panel) => this.panel = panel}>
          <div className='panel__body'>
            <div className='float--right'>
              <CopyPopover stringToCopy={record}><ActionLink>Copy</ActionLink></CopyPopover>
            </div>
            <h4 className='marginBottom--xs'>Go to your DNS Provider and Add this TXT Record</h4>
            <code className='marginBottom--xs'>{record}</code>
            <p>Once added to your DNS, <Link to='/spf/inspector'>inspect your SPF record</Link> to make sure it is valid.</p>
          </div>
        </div>
        <div className='builder-record__ghost' ref={(ghost) => this.ghost = ghost} />
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => ({ form: form.spfBuilder });
export default connect(mapStateToProps)(RecordContainer);
