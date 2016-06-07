import React from 'react';

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
  onTextChange: React.propTypes.func,
  defaultValue: React.propTypes.string,
  placeholder: React.propTypes.string,
  className: React.propTypes.string,
  inputClassName: React.propTypes.string,
  previewClassName: React.propTypes.string,
};
