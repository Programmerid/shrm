import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const contentData = [
  { id: 1, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 2, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 3, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 4, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 5, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 6, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 7, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 8, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 9, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 10, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 11, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 12, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 13, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 14, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 15, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 16, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 17, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 18, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 19, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 20, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 21, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 22, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 23, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 24, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 25, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 26, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 27, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 28, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 29, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 30, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 31, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 32, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 33, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 34, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 35, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 36, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 37, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 38, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 39, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
  { id: 40, logo: './images/icons/logo.svg', title: 'ResumeMaker', description: 'Capture your ideas & craft texts with AIs touch', category: 'Performance Management', tags: ['Recruiting'] },
  { id: 41, logo: './images/icons/logo2.svg', title: 'Prompty AI', description: 'No-code platform for Generative AI Apps and Workflows', category: 'Workspace Planning', tags: ['GPT', 'Recruiting'] },
  { id: 42, logo: './images/icons/logo3.svg', title: 'VEED GPT 2.0', description: 'The best way to create pro-level videos using only text.', category: 'Workspace Planning', tags: ['GPT', 'iOS'] },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Количество элементов на странице

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
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={currentPage === 1}
          >
            Предыдущая
          </button>
          {totalPages <= 5 ? (
            Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))
          ) : (
            <>
              {currentPage > 3 && <span>...</span>}
              {Array.from({ length: 5 }, (_, i) => {
                let pageNum = currentPage - 2 + i;
                return (
                  pageNum <= totalPages && pageNum > 0 && (
                    <button
                      key={pageNum}
                      onClick={() => paginate(pageNum)}
                      className={currentPage === pageNum ? 'active' : ''}
                    >
                      {pageNum}
                    </button>
                  )
                );
              })}
              {currentPage < totalPages - 2 && <span>...</span>}
            </>
          )}
          <button
            onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
            disabled={currentPage === totalPages}
          >
            Следующая
          </button>
        </div>
      )}
    </div>
  );
};

export default App;