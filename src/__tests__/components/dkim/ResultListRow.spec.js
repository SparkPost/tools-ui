import React from 'react';
import renderer from 'react-test-renderer';

import ResultListRow from 'pages/dkim/components/ResultListRow';

describe('ResultListRow component', () => {

  const testDate = 'Sun Jan 01 2017 00:00:00 GMT+0000 (UTC)';

  test('should render', () => {
    expect(renderer.create(<ResultListRow id={5} subject='subject' result={true} header_from='some@email.com' received={testDate} email='some@email.com' />)).toMatchSnapshot();
  });

});
