import React from 'react';
import './miniWidget.scss';
import Icon from '@indeed/frontend-components-react/components/Icon';

interface miniProp {
  data: MiniData;
}

export interface MiniData {
  number?: String;
  scale?: Number;
  scaleValue?: String;
  description: String;
}

const MiniWidget: React.FC<miniProp> = props => {
  const { data } = props;
  return (
    <div className='miniWidget'>
      {data.number && (
        <div className='value_data'>
          <span className='number'>{data.number}</span>
          {data.scale && (
            <span className='scale'>
              <Icon
                title='caret'
                size='md'
                type={`${data.scale > 0 ? 'arrow-drop-up' : 'arrow-drop-down'}`}
              />
              <span className='scale_text'>{data.scaleValue}</span>
            </span>
          )}
        </div>
      )}
      <div className={`value_label ${data.scale ? '' : 'no-scale'}`}>
        <span className={`${data.number ? '' : 'description-only'}`}>
          {data.description}
        </span>
      </div>
    </div>
  );
};

export default MiniWidget;
