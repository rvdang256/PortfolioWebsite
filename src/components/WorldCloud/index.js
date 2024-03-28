import React, { useEffect } from 'react'
import TagCloud from 'TagCloud';
import './index.scss';


const container = '.content';
const texts = [
  'Python', 'React', 'CSS', 'HTML',
  'Java', 'R', 'C', 'JavaScript',
  'SQL', 'Git', 'TensorFlow',
  'FireBase', 'Solidity',
];
const options = {
  radius: 300,
  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  // interact with cursor move on mouse out
  keep: true
};

const WordCloud = () => {
  // to render wordcloud each time the page is reloaded
  useEffect(() => {
    TagCloud(container, texts, options);
  })

  return (
    <div className='text-sphere'>
      
      <span className="content"></span>
    </div>
  )
}

export default WordCloud;