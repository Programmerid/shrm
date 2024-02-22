import React, { useState } from 'react';

const Sidebar = ({ handleSearch, handleCategoryChange, categories, handleTagClick, selectedTags }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    handleCategoryChange(category);
    setIsSelectOpen(false); // Закрываем селект после выбора категории
  };

  const additionalTags = ['From $9.99', 'Hiring', 'Career', 'Resume tool', 'Recruiting'];
  const additionalCategories = ['Workspace Planning', 'Employee Engagement', 'Total Rewards', 'Performance Management', 'HR Operation'];

  return (
    <div className="sidebar">
      <div className="sidebar-search">
        <p>Find your product</p>
        <input type="text" placeholder="Search News" onChange={(e) => handleSearch(e.target.value)} />
      </div>
      
      <div className="sidebar-select">
        <p>Category</p>
        <div className="sidebar-select-wrap">
          <div className="sidebar-select-header" onClick={toggleSelect}>
            {selectedCategory || 'Select Category'}
            <span className={isSelectOpen ? 'arrow-up' : 'arrow-down'}></span>
          </div>
          {isSelectOpen && (
            <ul className="sidebar-select-list">
              {additionalCategories.map((category, index) => (
                <li key={index} onClick={() => handleCategorySelect(category)}>{category}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="tags">
        <h4>Tags</h4>
        {selectedTags.map((tag, index) => (
          <span key={index} className="tag" onClick={() => handleTagClick(tag)}>{tag}</span>
        ))}
        {additionalTags.map((tag, index) => (
          <span key={index} className="tag" onClick={() => handleTagClick(tag)}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
