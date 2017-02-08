import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ActionLink } from 'components/button/Button';
import { IpRange } from '../components/FormElements';

// This needs to be a container to be able to listen to prefix toggles
class IpRangesContainer extends Component {
  render() {
    const { fields, ips } = this.props;
    return (
      <div>
        {fields.map((host, index) => <IpRange key={index} host={host} prefix={ips[index].type} index={index} onRemove={() => fields.remove(index)}/>)}
        <div className='panel__body panel__body--forceBorder clearfix'>
          <div className='float--right'>
            <ActionLink onClick={() => fields.push({ type: 'ip4' })}>Add Network Range</ActionLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => ({ ips: form.spfBuilder.values.ip });
export default connect(mapStateToProps)(IpRangesContainer);
