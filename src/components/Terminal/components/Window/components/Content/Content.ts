import classes from './Content.module.scss';

export default function Content() {
  const q_1: string =
    "How's business? Boomin. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key. Surround yourself with angels. To be successful you've got to work hard, to make history, simple, you've got to make it. You smart, you loyal, you a genius. Fan luv. Find peace, life is like a water fall, you've gotta flow. It's on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. You smart, you loyal, you a genius.";

  const q_2: string =
    "In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. Another one. A major key, never panic. Don't panic, when it gets crazy and rough, don't panic, stay calm. Another one.";

  const typeWriter = async () => {
    const quoteOne = document.querySelector<HTMLLIElement>('#quote-one');
    const quoteTwo = document.querySelector<HTMLLIElement>('#quote-two');

    if (!quoteOne || !quoteTwo) return;

    for (let i = 0; i <= q_1.length; i++) {
      quoteOne.innerHTML = q_1.substring(0, i);
      await new Promise((r) => setTimeout(r, 5));
    }

    for (let i = 0; i <= q_2.length; i++) {
      quoteTwo.innerHTML = q_2.substring(0, i);
      await new Promise((r) => setTimeout(r, 5));
    }
  };

  (function () {
    addEventListener('load', () => {
      typeWriter();
    });
  })();

  return /* HTML */ `
    <div>A terminal-looking page (c) ${new Date().getFullYear()}</div>
    <ul class=${classes.wrapper}>
      <li class=${classes.title}>&gt; Wheat toast, water</li>
      <li class=${classes.content}>
        You smart, you loyal, you a genius. The first of the month is coming, we
        have to get money, we have no choice.
      </li>
      <li class=${classes.title}>&gt; Khaled you smell good</li>
      <li class=${classes.content} id="quote-one"></li>
      <li class=${classes.title}>&gt; Celebrate success right</li>
      <li class=${classes.content}>
        Always remember in the jungle there's a lot of they in there, after you
        overcome they, you will make it to paradise.
        <a href="/#" class=${classes.link}> The key is to drink </a>
        coconut, fresh coconut, trust me. To succeed you must believe. When you
        believe, you will succeed. How's business? Boomin.
      </li>
      <li class=${classes.title}>&gt; A major key, never panic</li>
      <li class=${classes.content} id="quote-two"></li>
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
