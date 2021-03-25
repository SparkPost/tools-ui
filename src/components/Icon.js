import React from 'react';
import classNames from 'classnames';

const iconPrefix = 'fa-';

const mapPropsToClasses = ({ name, size, extras = [] }) => (
  classNames('fa', {
    [`${iconPrefix}${name}`]: name,
    [`${iconPrefix}${size}`]: size
  }, extras)
);

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => <i className={mapPropsToClasses(props)} />;
