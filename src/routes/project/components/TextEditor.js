import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, ContentState, RichUtils, getVisibleSelectionRect, convertToRaw, convertFromRaw } from 'draft-js'
import createCounterPlugin from 'draft-js-counter-plugin';

const counterPlugin = createCounterPlugin();
const { CharCounter, WordCounter, LineCounter, CustomCounter } = counterPlugin;
const plugins = [counterPlugin];


class StyleButton extends Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'toolbarItem';
    if (this.props.active) {
      className += ' active';
    }
    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const styleTypes = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Strikethrough', style: 'STRIKETHROUGH'}
];

const condensedStyleTypes = [
  {label: 'B', style: 'BOLD'},
  {label: 'I', style: 'ITALIC'},
  {label: 'U', style: 'UNDERLINE'},
  {label: 'S', style: 'STRIKETHROUGH'}
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="InlineStyleControls">
      {!props.condensed ?
        styleTypes.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )
      :
      condensedStyleTypes.map(type =>
      <StyleButton
        key={type.label}
        active={currentStyle.has(type.style)}
        label={type.label}
        onToggle={props.onToggle}
        style={type.style}
      />
    )}
    </div>
  );
};


export default class TextEditor extends Component {
  constructor(props) {
    super(props);

    const contentState = convertFromRaw(this.props.content);

    this.state = {
      editorState: EditorState.createWithContent(contentState),
      styles: { top: -999, opacity: 0 }
    };

    console.log(contentState)
    console.log(this.state.editorState)

    this.focus = () => this.refs.editor.focus();

    this.onChange = (editorState) => {
      this.setState({ editorState });
      const contentState = editorState.getCurrentContent();
      const editorContentRaw = convertToRaw(contentState);

      // save content to database
      this.props.save({ editorContent: editorContentRaw });
    }

    this.toggleBlockType = (blockType) => {
      this.onChange(
        RichUtils.toggleBlockType(
          this.state.editorState,
          blockType
        )
      );
    }

    this.toggleInlineStyle = (inlineStyle) => {
      this.onChange(
        RichUtils.toggleInlineStyle(
          this.state.editorState,
          inlineStyle
        )
      );
    }

    this.handleKeyCommand = (command, editorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }

    this.displayContextualMenu = () => {
      const selectedText = getVisibleSelectionRect(window);
      const toolbar = this.refs.toolbar.getBoundingClientRect()
      const toolbarParent = this.refs.toolbarParent.getBoundingClientRect()

      if (selectedText !== null && selectedText.width > 2) {
        this.setState({
          styles: {
            top: selectedText.top - toolbarParent.top - toolbar['height']*1.25,
            left: selectedText.left -toolbarParent.left - toolbar['width']/2 + selectedText.width/2,
            opacity: 1
          }
        });
      } else {
        this.setState({ styles: { top: -999, opacity: 0 }})
      }
    }
  }

  save() {
    const editorState = this.state;
    this.props.save({
      textArea: editorState
    });
  }

  averageReadingTime(str) {
    const wordArray = str.match(/\S+/g);  // matches words according to whitespace
    return wordArray ? (new Date((wordArray.length/3) * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0] : "00:00:00"
  }

  render() {
    const { editorState, styles } = this.state;

    return (
      <div className='TextEditor' ref='toolbarParent'>
        <div className="ContextualToolbar" style={styles} ref='toolbar'>
          <InlineStyleControls condensed
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
        </div>
        <h1>Script</h1>
        <div className='content' onMouseUp={this.displayContextualMenu}>
          <div className='Editor' onClick={this.focus}>
            <Editor
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              placeholder="Start writing here..."
              plugins={plugins}
              ref="editor"
              spellCheck={true}
            />
          </div>
          <div className="Toolbar">
            <InlineStyleControls
              editorState={editorState}
              onToggle={this.toggleInlineStyle}
            />
            <div className="stats">
              <div><CharCounter /> characters</div>
              <div><WordCounter /> words</div>
              <div><LineCounter /> lines</div>
              <div>Reading time{" "}<CustomCounter countFunction={this.averageReadingTime} /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
