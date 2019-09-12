import React from 'react';
import './index.css';
import TimeLineItem from './TimeLineItem';

let data = [
  {
      text: 'Wrote my first blog post ever on Medium',
      date: 'March 03 2017',
      category: {
          tag: 'medium',
          color: '#018f69'
      },
      link: {
          url:
              'https://www.lipsum.com/',
          text: 'Read more'
      }
  },
  {
    text: 'Wrote my first blog post ever on Medium',
    date: 'March 03 2017',
    category: {
        tag: 'medium',
        color: '#018f69'
    },
    link: {
        url:
            'https://www.lipsum.com/',
        text: 'Read more'
    }
  },
  {
    text: 'Wrote my first blog post ever on Medium',
    date: 'March 03 2017',
    category: {
        tag: 'medium',
        color: '#018f69'
    },
    link: {
        url:
            'https://www.lipsum.com/',
        text: 'Read more'
    }
  },
  {
    text: 'Wrote my first blog post ever on Medium',
    date: 'March 03 2017',
    category: {
        tag: 'medium',
        color: '#018f69'
    },
    link: {
        url:
            'https://www.lipsum.com/',
        text: 'Read more'
    }
  }
];

function App() {
  return (
    data.length > 0 && (
      <div className = "timeline-container">
        {data.map((item, index) => (
          <TimeLineItem data={item} key={index} />
        ))}
      </div>
    )
  );
}

export default App;
