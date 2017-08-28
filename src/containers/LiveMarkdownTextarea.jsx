import React from 'react';
import PropTypes from 'prop-types';

import { MarkdownPreview, MarkdownInput } from '../components';

export default class LiveMarkdownTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue ? props.defaultValue : '',
    };
  }
  handleTextChange(e) {
    this.setState({ value: e.target.value });
    if (this.props.onTextChange) {
      this.props.onTextChange(e.target.value);
    }
  }
  clear() {
    this.setState({ value: '' });
  }
  render() {
    const {
      placeholder,
      className,
      inputClassName,
      previewClassName,
    } = this.props;
    const { value } = this.state;
    return (
      <section className={className}>
        <MarkdownInput
          placeholder={placeholder}
          onChange={this.handleTextChange.bind(this)}
          value={value}
          className={inputClassName}
        />

        <MarkdownPreview
          value={value}
          className={previewClassName}
        />
      </section>
    );
  }
}

LiveMarkdownTextarea.propTypes = {
  onTextChange: PropTypes.func,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  previewClassName: PropTypes.string,
};
