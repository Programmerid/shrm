import React from 'react';

const MainContent = ({ currentItems }) => {
  return (
    <div className="main-content">
      {currentItems.map(item => (
        <div key={item.id} className="content-block">
          <img src={item.logo} alt="Логотип" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <div>
            {item.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;