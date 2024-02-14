import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

// Данные для тестирования
const contentData = [
  { id: 1, logo: './images/icons/logo.svg', title: 'Новость 1', description: 'Описание новости 1', category: 'Категория 1', tags: ['тег1', 'тег2'] },
  { id: 2, logo: './images/icons/logo2.svg', title: 'Новость 2', description: 'Описание новости 2', category: 'Категория 2', tags: ['тег2', 'тег3'] },
  { id: 3, logo: './images/icons/logo3.svg', title: 'Новость 3', description: 'Описание новости 3', category: 'Категория 1', tags: ['тег1', 'тег3'] },
  // Добавьте больше данных при необходимости
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Количество элементов на странице

  // Функция для фильтрации поиска
  const filteredContent = contentData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Функция для фильтрации по категориям
  const filteredByCategory = selectedCategory
    ? filteredContent.filter(item => item.category === selectedCategory)
    : filteredContent;

  // Функция для фильтрации по тегам
  const filteredByTag = selectedTag
    ? filteredByCategory.filter(item => item.tags.includes(selectedTag))
    : filteredByCategory;

  // Расчет количества страниц
  const totalPages = Math.ceil(filteredByTag.length / itemsPerPage);

  // Получение элементов текущей страницы
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredByTag.slice(indexOfFirstItem, indexOfLastItem);

  // Функция для изменения страницы
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="app-container">
      <Sidebar
        setSearchTerm={setSearchTerm}
        setSelectedCategory={setSelectedCategory}
        setSelectedTag={setSelectedTag}
      />
      <MainContent currentItems={currentItems} />
      {/* Пагинация */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Предыдущая
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Следующая
        </button>
      </div>
    </div>
  );
};

export default App;