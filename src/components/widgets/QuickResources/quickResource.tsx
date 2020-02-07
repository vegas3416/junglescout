import React from 'react';
import './quickResources.scss';

interface QuickProps {
  //Profile logo will probably be an image from
  items: Array<any>;
}

const QuickResources: React.FC<QuickProps> = props => {
  const { items } = props;

  return (
    <div className='quickResources'>
      <div>test</div>
    </div>
  );
};

export default QuickResources;
