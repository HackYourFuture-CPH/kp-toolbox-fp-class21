import React from 'react';
import { CategoryList } from './CategoryList';

import './category.css';

export const JustAParentComponent = () => {
  return (
    <div className="just-a-parent-container">
      <CategoryList />
    </div>
  );
};
