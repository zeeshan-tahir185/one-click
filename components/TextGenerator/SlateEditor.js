// Import React dependencies.
import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react'
import { jsx } from 'slate-hyperscript'
// Import the Slate editor factory.
import { createEditor, Transforms, Node } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
]

const SlateEditor = ({inputCallback, resetEditor, resetEditorFalse, backspace}) => {

  const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  if (leaf.strikethrough) {
    children = <del>{children}</del>
  }

  return <span {...attributes}>{children}</span>
}

const Element = props => {
  const { attributes, children, element } = props

  switch (element.type) {
    default:
      return <p {...attributes}>{children}</p>
    case 'quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'code':
      return (
        <pre>
          <code {...attributes}>{children}</code>
        </pre>
      )
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'heading-three':
      return <h3 {...attributes}>{children}</h3>
    case 'heading-four':
      return <h4 {...attributes}>{children}</h4>
    case 'heading-five':
      return <h5 {...attributes}>{children}</h5>
    case 'heading-six':
      return <h6 {...attributes}>{children}</h6>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    case 'link':
      return (
        <a href={element.url} {...attributes}>
          {children}
        </a>
      )
  }
}

const ELEMENT_TAGS = {
  A: el => ({ type: 'link', url: el.getAttribute('href') }),
  BLOCKQUOTE: () => ({ type: 'quote' }),
  H1: () => ({ type: 'heading-one' }),
  H2: () => ({ type: 'heading-two' }),
  H3: () => ({ type: 'heading-three' }),
  H4: () => ({ type: 'heading-four' }),
  H5: () => ({ type: 'heading-five' }),
  H6: () => ({ type: 'heading-six' }),
  IMG: el => ({ type: 'image', url: el.getAttribute('src') }),
  LI: () => ({ type: 'list-item' }),
  OL: () => ({ type: 'numbered-list' }),
  P: () => ({ type: 'paragraph' }),
  PRE: () => ({ type: 'code' }),
  UL: () => ({ type: 'bulleted-list' }),
}

const TEXT_TAGS = {
  CODE: () => ({ code: true }),
  DEL: () => ({ strikethrough: true }),
  EM: () => ({ italic: true }),
  I: () => ({ italic: true }),
  S: () => ({ strikethrough: true }),
  STRONG: () => ({ bold: true }),
  U: () => ({ underline: true }),
}

const deserialize = el => {
  if (el.nodeType === 3) {
    return el.textContent
  } else if (el.nodeType !== 1) {
    return null
  } else if (el.nodeName === 'BR') {
    return '\n'
  }

  const { nodeName } = el
  let parent = el

  if (
    nodeName === 'PRE' &&
    el.childNodes[0] &&
    el.childNodes[0].nodeName === 'CODE'
  ) {
    parent = el.childNodes[0]
  }
  let children = Array.from(parent.childNodes)
    .map(deserialize)
    .flat()

  if (children.length === 0) {
    children = [{ text: '' }]
  }

  if (el.nodeName === 'BODY') {
    return jsx('fragment', {}, children)
  }

  if (ELEMENT_TAGS[nodeName]) {
    const attrs = ELEMENT_TAGS[nodeName](el)
    return jsx('element', attrs, children)
  }

  if (TEXT_TAGS[nodeName]) {
    const attrs = TEXT_TAGS[nodeName](el)
    return children.map(child => jsx('text', attrs, child))
  }

  return children
}

const withHtml = editor => {
  const { insertData, isInline, isVoid } = editor

  editor.isInline = element => {
    return element.type === 'link' ? true : isInline(element)
  }

  editor.isVoid = element => {
    return element.type === 'image' ? true : isVoid(element)
  }

  editor.insertData = data => {
    const html = data.getData('text/html')

    if (html) {
      const parsed = new DOMParser().parseFromString(html, 'text/html')
      const fragment = deserialize(parsed.body)
      Transforms.insertFragment(editor, fragment)
      return
    }

    insertData(data)
  }

  return editor
}

const renderElement = useCallback(props => <Element {...props} />, []);
const renderLeaf = useCallback(props => <Leaf {...props} />, []);
const editor = useMemo(
    () => withHtml(withReact(withHistory(createEditor()))),
    []
)

const handlePaste = () => {
 setTimeout(() => {
     let val = document.getElementById("inputText").innerHTML;
 }, 500)
};

const handleBackSpace = () => {
 setTimeout(() => {
     let val = document.getElementById("inputText").innerHTML;
     backspace(val);
 }, 100)
};

let cnt = 0;
useEffect(() => {
  if(resetEditor === true){
    //console.log('sss');
    
          editor.children.map(item => {
        Transforms.delete(editor, { at: [0] })
      })
    
      // reset init 
      editor.children = [
      {
         type: "p",
         children: [{ text: "" }]
      }];
  resetEditorFalse();   
  
  }
  resetEditor = false;
}, [resetEditor])

  return (
    <>
      <Slate editor={editor} initialValue={initialValue}>
        <Editable
          id="inputText"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onInput={(e) => inputCallback(e.target.innerHTML)}
          onKeyDown={handleBackSpace}
          onPaste={handlePaste}
        />
      </Slate>
    </>
  )
}

export default SlateEditor;