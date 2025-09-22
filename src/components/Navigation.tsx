import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav style={{ padding: '5px', backgroundColor: '#f0f0f0' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
            首页
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;