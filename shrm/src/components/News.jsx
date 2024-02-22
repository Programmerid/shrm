import React, { useState } from 'react';

const News = ({ news, selectedTags }) => {
  const [expandedNewsId, setExpandedNewsId] = useState(null);

  const toggleNews = (id) => {
    if (expandedNewsId === id) {
      setExpandedNewsId(null);
    } else {
      setExpandedNewsId(id);
    }
  };

  const filteredNews = news.filter(item => {
    // Если нет выбранных тегов, отображаем все новости
    if (selectedTags.length === 0) return true;
    // Если у новости есть хотя бы один выбранный тег, отображаем ее
    return item.tags.some(tag => selectedTags.includes(tag));
  });

  return (
    <div className="news">
      {news.map((item) => (
        <div className="news-item" key={item.id}>
          <div className="news-header" onClick={() => toggleNews(item.id)}>
            <img src={item.logo} alt="logo" />
            <h3>{item.title}</h3>
          </div>
          <p>{item.description}</p>
          <div className="news-tags">
            {item.tags.map((tag, index) => (
              <span key={index} className={selectedTags.includes(tag) ? 'selected' : ''}>#{tag}</span>
            ))}
          </div>
          {expandedNewsId === item.id && (
            <div className="expanded-news">
              <h4>{item.expandedTitle}</h4>
              <p>{item.expandedDescription}</p>
              <div className="news-images">
                {item.images.map((image, index) => (
                  <img key={index} src={image} alt="news" />
                ))}
              </div>
            </div>
          )}
          <button onClick={() => toggleNews(item.id)} className="learn-more-btn">
            {expandedNewsId === item.id ? 'Less' : 'Learn More'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default News;
