import React from 'react';
import { shallow } from 'enzyme';
import { MarkdownPreview } from '../index';
import { expect } from 'chai';
const { describe, it } = global;

describe('MarkdownPreview', () => {
  it('should display markdown', () => {
    const text = '# Title';
    const wrapper = shallow(<MarkdownPreview value={text} />);
    expect(wrapper.html()).to.be.equal('<div><h1 id="title">Title</h1>\n</div>');
  });
});
