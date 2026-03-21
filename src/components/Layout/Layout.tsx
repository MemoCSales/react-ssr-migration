import { ReactNode } from 'react';

import './Layout.scss';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

interface ContainerProps {
  children: ReactNode;
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`kto-layout-section ${className}`.trim()}>
      {children}
    </section>
  );
}

export function Container({ children }: ContainerProps) {
  return (<div className="kto-layout-container">
    {children}
  </div>
  )
}