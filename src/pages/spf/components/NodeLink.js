import React from 'react';
import { connect } from 'react-redux';
import Icon from 'components/Icon';
import { expandAll } from 'actions/spf';

const NodeLink = (props) => {
  const { expandAll, id } = props;

  const handleClick = (e) => {
    e.preventDefault();

    expandAll(id);

    // Timeout makes sure react is dont rendering before attempting to scroll
    setTimeout(() => {
      const el = document.getElementById(id);
      el && window.scroll(0, el.getBoundingClientRect().top + window.scrollY - 100); // -100 compensates for the nav bar
    }, 0);
  };

  return (
    <a className='spf-resultsErrors__find' href={`#${id}`} onClick={handleClick}>Find in SPF record <Icon name='search'/></a>
  );
};

export default connect(null, { expandAll })(NodeLink);
