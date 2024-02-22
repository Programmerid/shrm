import React, { useState, useEffect } from 'react';
import HeaderCatalog from '../components/HeaderCatalog';
import Sidebar from '../components/Sidebar';
import News from '../components/News';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

const CatalogPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  
    const tempNewsData = [
      {
        id: 1,
        title: 'ResumeMaker',
        description: 'Capture your ideas & craft texts with AIs touch',
        logo: 'logo1.png',
        tags: ['Workspace Planning', 'From $9.99', 'Hiring'],
        expandedTitle: 'What is ResumeMaker.Online?',
        expandedDescription: 'ResumeMaker.Online lets you create a stunning and error-free resume in just minutes, with the help of our new AI-Powered Writing Assistant — no sign-up required!',
        images: ['image1.jpg', 'image2.jpg']
      },
      {
        id: 2,
        title: 'Prompty AI',
        description: 'No-code platform for Generative AI Apps and Workflows',
        logo: 'logo1.png',
        tags: ['Workspace Planning', 'From $9.99', 'Hiring'],
        expandedTitle: 'Expanded Title 1',
        expandedDescription: 'Expanded Description 1',
        images: ['image1.jpg', 'image2.jpg']
      },
      {
        id: 3,
        title: 'VEED GPT 2.0',
        description: 'The best way to create pro-level videos using only text.',
        logo: 'logo1.png',
        tags: ['Workspace Planning', 'From $9.99', 'Hiring'],
        expandedTitle: 'Expanded Title 1',
        expandedDescription: 'Expanded Description 1',
        images: ['image1.jpg', 'image2.jpg']
      },
      {
        id: 4,
        title: 'ResumeMaker',
        description: 'No-code platform for Generative AI Apps and Workflows',
        logo: 'logo1.png',
        tags: ['Workspace Planning', 'From $9.99', 'Hiring'],
        expandedTitle: 'Expanded Title 1',
        expandedDescription: 'Expanded Description 1',
        images: ['image1.jpg', 'image2.jpg']
      },
      {
        id: 5,
        title: 'Prompty AI',
        description: 'The best way to create pro-level videos using only text.',
        logo: 'logo1.png',
        tags: ['Workspace Planning', 'From $9.99', 'Hiring'],
        expandedTitle: 'Expanded Title 1',
        expandedDescription: 'Expanded Description 1',
        images: ['image1.jpg', 'image2.jpg']
      },
      {
        id: 6,
        title: 'VEED GPT 2.0',
        description: 'No-code platform for Generative AI Apps and Workflows',
        logo: 'logo1.png',
        tags: ['Workspace Planning', 'From $9.99', 'Hiring'],
        expandedTitle: 'Expanded Title 1',
        expandedDescription: 'Expanded Description 1',
        images: ['image1.jpg', 'image2.jpg']
      },
      {
        id: 7,
        title: 'ResumeMaker',
        description: 'No-code platform for Generative AI Apps and Workflows',
        logo: 'logo1.png',
        tags: ['Workspace Planning', 'From $9.99', 'Hiring'],
        expandedTitle: 'Expanded Title 1',
        expandedDescription: 'Expanded Description 1',
        images: ['image1.jpg', 'image2.jpg']
      },
      {
        id: 8,
        title: 'Prompty AI',
        description: 'No-code platform for Generative AI Apps and Workflows',
        logo: 'logo1.png',
        tags: ['Workspace Planning', 'From $9.99', 'Hiring'],
        expandedTitle: 'Expanded Title 1',
        expandedDescription: 'Expanded Description 1',
        images: ['image1.jpg', 'image2.jpg']
      },
      // Остальные новости...
    ];
  
    const handleSearch = (term) => {
      setSearchTerm(term);
      setCurrentPage(1); // Сброс текущей страницы при поиске
    };
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      setCurrentPage(1); // Сброс текущей страницы при выборе категории
    };
  
    const handleTagClick = (tag) => {
      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
      setCurrentPage(1); // Сброс текущей страницы при выборе тега
    };
  
    // Фильтрация новостей в соответствии с текущими настройками поиска, категории и выбранными тегами
    const filteredNews = tempNewsData.filter(item => {
      if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      if (selectedCategory && item.tags.indexOf(selectedCategory) === -1) {
        return false;
      }
      if (selectedTags.length > 0 && !selectedTags.every(tag => item.tags.includes(tag))) {
        return false;
      }
      return true;
    });
  
    // Пагинация
    const newsPerPage = 7; // Обновлено количество новостей на странице
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
      <div>
        <HeaderCatalog />
        <div className="catalog-page">
          <Sidebar
            handleSearch={handleSearch}
            handleCategoryChange={handleCategoryChange}
            handleTagClick={handleTagClick}
            categories={['Workspace Planning', 'Employee Engagement', 'Total Rewards', 'Performance Management', 'HR Operation']}
            selectedTags={selectedTags}
          />
          <News news={currentNews} selectedTags={selectedTags} />
          <Pagination
            newsPerPage={newsPerPage}
            totalNews={filteredNews.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        <Footer />
      </div>
      </div>
      
    );
  };

export {CatalogPage};
