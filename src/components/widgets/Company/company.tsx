import React from 'react';
import './company.scss';

interface CompanyProps {
  //Profile logo will probably be an image url for prototype only is it being hard-coded
  logo?: String;
  name?: String;
  //Is this company a premium user or not. (ie. "Featured Employer")
  type?: String;
}

const Company: React.FC<CompanyProps> = props => {
  const { logo, name, type } = props;

  return (
    <div className='company'>
      {logo && <img className="company-logo" src={require(`../../../images/${logo}`)} />}
      {name && !logo && <span className='company-name'>{name}</span>}
      {type === 'featured' && <img className="company-badge" src={require(`../../../images/${type}.png`)} />}
    </div>
  );
};

export default Company;
