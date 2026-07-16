import styled from "styled-components";

export const SupportPage = styled.main`
  color: #151515;
  .container { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
  .eyebrow { display: block; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; }

  .support-hero { position: relative; display: flex; height: calc(100svh - 160px); min-height: 520px; max-height: 700px; align-items: end; overflow: hidden; background-position: center; background-size: cover; }
  .support-hero::before { position: absolute; inset: 0; content: ""; background: rgba(0,0,0,.34); }
  .hero-inner { position: relative; z-index: 1; width: min(1120px, calc(100% - 40px)); margin: 0 auto; padding-bottom: 70px; color: #fff; animation: support-enter .75s ease both; }
  .hero-inner .eyebrow { color: #ddb4da; }
  .hero-inner h1 { max-width: 760px; margin: 14px 0 22px; font-size: 66px; font-weight: 600; line-height: 1.02; }
  .hero-inner p { max-width: 660px; color: rgba(255,255,255,.8); font-size: 18px; line-height: 1.62; }
  @keyframes support-enter { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  .hero-cta { display: inline-flex; align-items: center; gap: 12px; margin-top: 30px; padding: 13px 18px; color: #151515; font-size: 14px; font-weight: 600; background: #fff; border-radius: 6px; transition: color .25s ease, background .25s ease, transform .25s ease; }
  .hero-cta:hover, .hero-cta:focus-visible { color: #fff; background: var(--accent); transform: translateY(-2px); }

  .support-intro { display: grid; grid-template-columns: .9fr 1.1fr; gap: 100px; padding-top: 112px; padding-bottom: 112px; }
  .support-intro h2, .section-heading h2 { max-width: 700px; margin-top: 13px; font-size: 46px; font-weight: 600; line-height: 1.1; }
  .intro-copy { display: grid; gap: 22px; color: #5e5e5e; font-size: 17px; line-height: 1.7; }

  .care-section { padding: 104px 0; background: #f4f4f4; }
  .section-heading { margin-bottom: 52px; }
  .section-heading.split { display: grid; grid-template-columns: 1.2fr .8fr; gap: 70px; align-items: end; }
  .section-heading.split > p { color: #666; font-size: 16px; line-height: 1.65; }
  .care-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; overflow: hidden; background: #d5d5d5; border: 1px solid #d5d5d5; border-radius: 8px; }
  .care-grid article { min-height: 235px; padding: 27px; background: #fff; }
  .care-grid article > span { color: var(--accent); font-size: 11px; font-weight: 700; }
  .care-grid h3 { margin: 46px 0 10px; font-size: 20px; font-weight: 600; }
  .care-grid p { color: #656565; font-size: 14px; line-height: 1.6; }

  .confidence { display: grid; grid-template-columns: 1fr .9fr; gap: 90px; align-items: center; padding-top: 112px; padding-bottom: 112px; }
  .confidence-copy h2 { margin: 13px 0 18px; font-size: 45px; font-weight: 600; line-height: 1.1; }
  .confidence-copy > p { color: #626262; font-size: 17px; line-height: 1.65; }
  .confidence-copy ul { display: grid; gap: 13px; margin-top: 30px; list-style: none; }
  .confidence-copy li { display: flex; gap: 11px; align-items: flex-start; font-size: 14px; line-height: 1.5; }
  .confidence-copy li svg { margin-top: 4px; color: var(--accent); font-size: 11px; }
  .quality-panel { overflow: hidden; border: 1px solid #dedede; border-radius: 8px; }
  .quality-panel div { display: grid; grid-template-columns: 40px 1fr; gap: 7px 16px; padding: 24px; border-bottom: 1px solid #dedede; transition: background .25s ease; }
  .quality-panel div:last-child { border-bottom: 0; }
  .quality-panel div:hover { background: #f6f6f6; }
  .quality-panel div > span { grid-row: 1 / 3; color: var(--accent); font-size: 11px; font-weight: 700; }
  .quality-panel strong { font-size: 18px; font-weight: 600; }
  .quality-panel p { color: #6a6a6a; font-size: 13px; line-height: 1.5; }

  .support-rhythm { padding: 104px 0; color: #fff; background: #101011; }
  .support-rhythm .eyebrow { color: #c18ebe; }
  .support-rhythm ol { display: grid; grid-template-columns: repeat(4, 1fr); list-style: none; border-top: 1px solid #38383b; }
  .support-rhythm li { min-height: 245px; padding: 25px 24px 24px 0; border-right: 1px solid #38383b; }
  .support-rhythm li + li { padding-left: 24px; }
  .support-rhythm li:last-child { border-right: 0; }
  .support-rhythm li > span { color: #858589; font-size: 12px; }
  .support-rhythm h3 { margin: 54px 0 11px; font-size: 21px; font-weight: 500; }
  .support-rhythm li p { color: #a4a4a8; font-size: 14px; line-height: 1.6; }

  .support-options { padding-top: 112px; padding-bottom: 112px; }
  .options-list { border-top: 1px solid #d5d5d5; }
  .options-list article { display: grid; grid-template-columns: .7fr 1fr .75fr; gap: 50px; align-items: start; padding: 34px 0; border-bottom: 1px solid #d5d5d5; }
  .option-title { display: flex; gap: 18px; align-items: baseline; }
  .option-title span { color: var(--accent); font-size: 11px; font-weight: 700; }
  .option-title h3 { font-size: 22px; font-weight: 600; }
  .options-list article > p { color: #626262; font-size: 14px; line-height: 1.65; }
  .options-list ul { display: flex; flex-wrap: wrap; gap: 7px; list-style: none; }
  .options-list li { padding: 6px 9px; color: #555; font-size: 11px; font-weight: 600; background: #f2f2f2; border-radius: 4px; }

  .support-faq { padding: 104px 0; background: #f4f4f4; }
  .faq-layout { display: grid; grid-template-columns: .75fr 1.25fr; gap: 90px; }
  .faq-heading { position: sticky; top: 130px; align-self: start; }
  .faq-heading h2 { margin: 13px 0 17px; font-size: 42px; font-weight: 600; line-height: 1.1; }
  .faq-heading p { color: #666; font-size: 15px; line-height: 1.65; }
  .faq-list { border-top: 1px solid #ccc; }
  .faq-list details { border-bottom: 1px solid #ccc; }
  .faq-list summary { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 24px 0; font-size: 17px; font-weight: 600; cursor: pointer; list-style: none; }
  .faq-list summary::-webkit-details-marker { display: none; }
  .faq-list summary span { font-size: 24px; font-weight: 300; transition: transform .25s ease; }
  .faq-list details[open] summary span { transform: rotate(45deg); }
  .faq-list details p { max-width: 650px; padding: 0 38px 25px 0; color: #626262; font-size: 14px; line-height: 1.7; }

  .support-cta { display: flex; align-items: end; justify-content: space-between; gap: 60px; padding-top: 104px; padding-bottom: 104px; }
  .support-cta h2 { max-width: 720px; margin-top: 13px; font-size: 46px; font-weight: 600; line-height: 1.1; }
  .support-cta > a { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 12px; padding: 14px 20px; color: #fff; font-size: 14px; font-weight: 600; background: #151515; border-radius: 6px; transition: transform .25s ease; }
  .support-cta > a:hover, .support-cta > a:focus-visible { transform: translateY(-3px); }

  @media (prefers-reduced-motion: reduce) { .hero-inner { animation: none; } }

  @media (max-width: 900px) {
    .hero-inner h1 { font-size: 54px; }
    .support-intro, .confidence, .faq-layout { grid-template-columns: 1fr; gap: 45px; }
    .section-heading.split { grid-template-columns: 1fr; gap: 20px; }
    .care-grid { grid-template-columns: 1fr 1fr; }
    .support-rhythm ol { grid-template-columns: 1fr 1fr; }
    .support-rhythm li:nth-child(2) { border-right: 0; }
    .support-rhythm li:nth-child(n + 3) { border-top: 1px solid #38383b; }
    .options-list article { grid-template-columns: .75fr 1.25fr; gap: 22px 40px; }
    .options-list ul { grid-column: 2; }
    .faq-heading { position: static; }
    .support-cta { align-items: flex-start; flex-direction: column; }
  }

  @media (max-width: 640px) {
    .container, .hero-inner { width: calc(100% - 32px); }
    .support-hero { height: calc(100svh - 150px); min-height: 480px; background-position: 60% center; }
    .hero-inner { padding-bottom: 48px; }
    .hero-inner h1 { font-size: 42px; }
    .hero-inner p { font-size: 16px; }
    .support-intro, .confidence, .support-options { padding-top: 72px; padding-bottom: 72px; }
    .support-intro h2, .section-heading h2, .confidence-copy h2, .support-cta h2 { font-size: 34px; }
    .care-section, .support-rhythm, .support-faq { padding: 72px 0; }
    .care-grid { grid-template-columns: 1fr; }
    .care-grid article { min-height: 205px; }
    .support-rhythm ol { grid-template-columns: 1fr; }
    .support-rhythm li, .support-rhythm li + li { min-height: 0; padding: 24px 0 28px; border-right: 0; border-top: 1px solid #38383b; }
    .support-rhythm h3 { margin-top: 30px; }
    .options-list article { grid-template-columns: 1fr; gap: 16px; padding: 28px 0; }
    .options-list ul { grid-column: 1; }
    .faq-heading h2 { font-size: 34px; }
    .faq-list summary { font-size: 15px; }
    .support-cta { padding-top: 72px; padding-bottom: 72px; }
    .support-cta > a { width: 100%; justify-content: center; }
  }
`;
