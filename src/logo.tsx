import * as React from 'react';

export const Logo: React.StatelessComponent<{}> = () => {
    return (
        <div className="dt-flag-logo">
            <svg width="18" viewBox="0 0 202 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M201.5 93V62H170.5V31H139.5V124C139.5 158.177 167.323 186 201.5 186V155C184.372 155 170.5 141.127 170.5 124V93H201.5Z" fill="#fff" />
                <path d="M93 0V124C93 141.128 79.1275 155 62 155C44.8725 155 31 141.128 31 124C31 106.872 44.8725 93 62 93H77.5V62H62C27.8225 62 0 89.8225 0 124C0 158.177 27.8225 186 62 186C96.1775 186 124 158.177 124 124V0H93Z" fill="#fff" />
            </svg>
        </div>
    );
};

export default Logo;