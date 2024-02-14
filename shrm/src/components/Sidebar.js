import React from 'react';

const Sidebar = ({ setSearchTerm, setSelectedCategory, setSelectedTag }) => {
  return (
    <div className="sidebar">
      {/* Фильтр по поиску */}
      <input
        type="text"
        placeholder="Поиск..."
        onChange={e => setSearchTerm(e.target.value)}
      />
      {/* Фильтр по категориям */}
      <select onChange={e => setSelectedCategory(e.target.value)}>
        <option value="">Все категории</option>
        <option value="Категория 1">Категория 1</option>
        <option value="Категория 2">Категория 2</option>
      </select>
      {/* Фильтр по тегам */}
      <select onChange={e => setSelectedTag(e.target.value)}>
        <option value="">Все теги</option>
        <option value="тег1">тег1</option>
        <option value="тег2">тег2</option>
        <option value="тег3">тег3</option>
      </select>
    </div>
  );
};

export default Sidebar;

