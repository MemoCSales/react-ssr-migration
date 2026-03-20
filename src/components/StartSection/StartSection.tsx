import { Button } from '@rescui/button';
import { useTextStyles } from '@rescui/typography';
import cn from 'classnames';

import './StartSection.module.scss';

function StartSectionContent() {
  const textCn = useTextStyles();
  return (
    <div className="start-section">
      <p className={textCn('rs-text-2')}>How about to try?</p>
      <div className="kto-grid kto-offset-top-48">
        <h2 className={cn(textCn('rs-hero'), 'kto-col-10 kto-col-md-12')}>
          Start using Kotlin today!<br />
          Build your first app in your favorite IDE
        </h2>
      </div>
      <div className="kto-offset-top-48">
        <Button mode="rock" size="l" href="/docs/getting-started.html">
          Get started
        </Button>
      </div>
    </div>
  );
}

export function StartSection() {
  return (
    <StartSectionContent />
  );
}
