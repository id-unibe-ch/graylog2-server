import React from 'react';
import { mount } from 'wrappedEnzyme';
import 'helpers/mocking/react-dom_mock';

import ContentPack from 'logic/content-packs/ContentPack';
import ContentPackPreview from 'components/content-packs/ContentPackPreview';

describe('<ContentPackPreview />', () => {
  it('should render with empty content pack', () => {
    const contentPack = ContentPack.builder().id('dead-beef').build();
    const wrapper = mount(<ContentPackPreview contentPack={contentPack} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with filled content pack', () => {
    const contentPack = ContentPack.builder()
      .id('dead-beef')
      .name('name')
      .summary('summary')
      .description('descr')
      .vendor('vendor')
      .url('http://example.com')
      .build();

    const wrapper = mount(<ContentPackPreview contentPack={contentPack} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onSave when creating a content pack', () => {
    const contentPack = ContentPack.builder()
      .id('dead-beef')
      .name('name')
      .summary('summary')
      .description('descr')
      .vendor('vendor')
      .url('http://example.com')
      .build();

    const onSave = jest.fn();
    const wrapper = mount(<ContentPackPreview contentPack={contentPack} onSave={onSave} />);
    wrapper.find('button#create').simulate('click');
    expect(onSave.mock.calls.length).toBe(1);
  });
});
