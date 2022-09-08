import React from 'react';

const Breadcrumbs = () => {
  const datas = [
    {
      id: 1,
      name: 'Home',
      link: '/'
    },
    {
      id: 2,
      name: 'Restaurant',
      link: '/restaurant'
    },
    {
      id: 3,
      name: 'Bubur Yoyong',
      link: '/buburyoyong'
    }
  ];
  return (
    <nav>
      <ul>
        {datas.map((data) => {
          return <li>{data.name}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
