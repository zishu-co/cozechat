import React from 'react';
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div>
      <h1>首页</h1>
      <p><Link to="/agent/7550884491460345856">智能客服</Link></p>
      <p><Link to="/agent/7550598865406132224">文件名检查</Link></p>
    </div>
  );
};

export default Home;