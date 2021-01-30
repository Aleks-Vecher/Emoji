import React, {useEffect, useState} from 'react'
import EmojiRow from '../EmojiRow'
import axios from "axios";
import PropTypes from 'prop-types'



const EmojiContainer = ({text, url}) => {
  const [dataEmoji, setDataEmoji] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setDataEmoji(result.data);
      setIsLoaded(true);
    }

    fetchData()
    // fetch('https://raw.githubusercontent.com/sulemanof/js-lectures/master/react/emojiList.json')
    //     .then(res => res.json())
    //     .then(data => {
    //       setIsLoaded(true)
    //       setDataEmoji(data)
    //     })
  }, [url])

  if (!isLoaded) {
    return <p>Loading...</p>
  } else {
    let content = [];
    for (let el of dataEmoji) {
      if (el.title.toLowerCase().includes(`${text}`.toLowerCase())) {
        content = [...content, el]
      }
      if (content.length >= 15) break;
    }
    return (
        content.map((item, index) => <EmojiRow title={item.title} symbol={item.symbol} key={index}/>
        ))
  }
}

EmojiContainer.propTypes = {
  text: PropTypes.string
}

export default EmojiContainer
