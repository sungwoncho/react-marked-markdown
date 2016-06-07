import React from 'react';

export default class MarkdownInput extends React.Component {
  render() {
    const { onChange, value, placeholder, className } = this.props;
    return (
      <textarea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        ref="textareaRef"
        className={className}
      />
    );
  }
}

MarkdownInput.propTypes = {
  onChange: React.propTypes.func,
  value: React.propTypes.string,
  placeholder: React.propTypes.string,
  className: React.propTypes.string,
};
