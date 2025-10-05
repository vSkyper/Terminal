import classes from './Content.module.scss';
import { DOMManager, ConfigManager } from '../../../../../../utils';

// Constants for better maintainability
const QUOTES = {
  first:
    "How's business? Boomin. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key. Surround yourself with angels. To be successful you've got to work hard, to make history, simple, you've got to make it. You smart, you loyal, you a genius. Fan luv. Find peace, life is like a water fall, you've gotta flow. It's on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. You smart, you loyal, you a genius.",
  second:
    "In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. Another one. A major key, never panic. Don't panic, when it gets crazy and rough, don't panic, stay calm. Another one.",
} as const;

const ELEMENT_IDS = {
  quoteOne: 'quote-one',
  quoteTwo: 'quote-two',
} as const;

export default function Content(): string {
  const initializeTypewriter = async (): Promise<void> => {
    const domManager = DOMManager.getInstance();
    const configManager = ConfigManager.getInstance();

    const typewriterSettings = configManager.getSetting('typewriter');

    const quoteOne = domManager.querySelector<HTMLLIElement>(
      `#${ELEMENT_IDS.quoteOne}`
    );
    const quoteTwo = domManager.querySelector<HTMLLIElement>(
      `#${ELEMENT_IDS.quoteTwo}`
    );

    if (!quoteOne || !quoteTwo) {
      console.warn('Content: Typewriter elements not found');
      return;
    }

    // Type first quote
    for (let i = 0; i <= QUOTES.first.length; i++) {
      domManager.setContent(quoteOne, QUOTES.first.substring(0, i));
      await new Promise((resolve) =>
        setTimeout(resolve, typewriterSettings.delay)
      );
    }

    // Type second quote
    for (let i = 0; i <= QUOTES.second.length; i++) {
      domManager.setContent(quoteTwo, QUOTES.second.substring(0, i));
      await new Promise((resolve) =>
        setTimeout(resolve, typewriterSettings.delay)
      );
    }
  };

  // Initialize typewriter effect when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTypewriter);
  } else {
    // DOM is already loaded
    setTimeout(initializeTypewriter, 0);
  }

  const currentYear = new Date().getFullYear();

  return /* HTML */ `
    <div>A terminal-looking page (c) ${currentYear}</div>
    <ul class=${classes.wrapper}>
      <li class=${classes.title}>&gt; Wheat toast, water</li>
      <li class=${classes.content}>
        You smart, you loyal, you a genius. The first of the month is coming, we
        have to get money, we have no choice.
      </li>
      <li class=${classes.title}>&gt; Khaled you smell good</li>
      <li class=${classes.content} id="${ELEMENT_IDS.quoteOne}"></li>
      <li class=${classes.title}>&gt; Celebrate success right</li>
      <li class=${classes.content}>
        Always remember in the jungle there's a lot of they in there, after you
        overcome they, you will make it to paradise.
        <a href="/#" class=${classes.link}> The key is to drink </a>
        coconut, fresh coconut, trust me. To succeed you must believe. When you
        believe, you will succeed. How's business? Boomin.
      </li>
      <li class=${classes.title}>&gt; A major key, never panic</li>
      <li class=${classes.content} id="${ELEMENT_IDS.quoteTwo}"></li>
      <li class=${classes.title}>&gt; How's business?</li>
      <li class=${classes.content}>
        They don't want us to eat. The key is to drink coconut, fresh coconut,
        trust me. We don't see them, we will never see them. They don't want us
        to eat. Let me be clear, you have to make it through the jungle to make
        it to paradise, that's the key, Lion!
      </li>
    </ul>
  `;
}
