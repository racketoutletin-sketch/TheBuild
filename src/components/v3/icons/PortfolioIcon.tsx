import React from 'react';

const PortfolioIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
    <polyline points="4 7 4 12 20 12 20 7"></polyline>
    <line x1="12" y1="20" x2="12" y2="12"></line>
  </svg>
);

export default PortfolioIcon;
