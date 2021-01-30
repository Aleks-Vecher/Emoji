import React, { useState, useRef} from 'react'
import EmojiContainer from "../EmojiCOntainer";



const Form = () => {
  const url = 'https://raw.githubusercontent.com/sulemanof/js-lectures/master/react/emojiList.json'
  const [text, textState] = useState('')
  const textInput = useRef('')
  console.log(textInput.current.value)
  return (
      <>
        <form>
          <input ref={textInput} onChange={ ({target}) => textState(target.value)}/>
        </form>
        <EmojiContainer text={text} url={url}/>
      </>
);
}
export default Form
