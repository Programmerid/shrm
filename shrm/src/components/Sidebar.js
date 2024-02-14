import React, { useState } from 'react';

const Sidebar = ({ setSearchTerm, setSelectedCategory, selectedTag, setSelectedTag }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
      setSelectedTag(tag);
    }
  };

  const handleTagClose = (tag) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
    setSelectedTag('');
  };

  return (
    <div className="sidebar">
      {/* Фильтр по поиску */}
      <p>Find your product</p>
      <input
        type="text"
        placeholder="Поиск..."
        onChange={e => setSearchTerm(e.target.value)}
      />

      {/* Фильтр по категориям */}
      <p>Category</p>
      <select onChange={e => setSelectedCategory(e.target.value)}>
        <option value="Workspace Planning">Workspace Planning</option>
        <option value="Employee Engagement">Employee Engagement</option>
        <option value="Total Rewards">Total Rewards</option>
        <option value="Performance Management">Performance Management</option>
        <option value="HR Operation">HR Operation</option>
      </select>

      {/* Фильтр по тегам */}
      <div className="tag-filter">
        <h3>Фильтр по тегам:</h3>
        <div className="selected-tags">
          {selectedTags.map(tag => (
            <span key={tag} className="tag">
              {tag}
              <button onClick={() => handleTagClose(tag)}>x</button>
            </span>
          ))}
        </div>
        <div className="tags">
          <span>Теги:</span>
          <button onClick={() => handleTagClick('iOS')}>iOS</button>
          <button onClick={() => handleTagClick('GPT')}>GPT</button>
          <button onClick={() => handleTagClick('Recruiting')}>Recruiting</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
