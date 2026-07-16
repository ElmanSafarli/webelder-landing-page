import styled from "styled-components";

export const CompanyPage = styled.main`
  color: #151515;

  .container { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
  .eyebrow { display: block; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; }

  .company-hero {
    position: relative;
    display: flex;
    height: calc(100svh - 160px);
    min-height: 520px;
    max-height: 700px;
    align-items: end;
    overflow: hidden;
    background-position: center;
    background-size: cover;

    &::before { position: absolute; inset: 0; content: ""; background: rgba(0, 0, 0, 0.35); }
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    width: min(1120px, calc(100% - 40px));
    margin: 0 auto;
    padding-bottom: 70px;
    color: #fff;
    animation: hero-enter 0.75s ease both;

    .eyebrow { color: #ddb4da; }
    h1 { max-width: 760px; margin: 14px 0 22px; font-size: 66px; font-weight: 600; line-height: 1.02; }
    p { max-width: 670px; color: rgba(255,255,255,.78); font-size: 18px; line-height: 1.62; }
  }

  @keyframes hero-enter { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 30px;
    padding: 13px 18px;
    color: #151515;
    font-size: 14px;
    font-weight: 600;
    background: #fff;
    border-radius: 6px;
    transition: color .25s ease, background .25s ease, transform .25s ease;
    &:hover, &:focus-visible { color: #fff; background: var(--accent); transform: translateY(-2px); }
  }

  .intro { display: grid; grid-template-columns: .9fr 1.1fr; gap: 100px; padding-top: 112px; padding-bottom: 112px; }
  .intro-title h2, .section-heading h2 { max-width: 690px; margin-top: 13px; font-size: 46px; font-weight: 600; line-height: 1.1; }
  .intro-copy { display: grid; gap: 22px; color: #595959; font-size: 17px; line-height: 1.7; }

  .principles { padding: 104px 0; background: #f4f4f4; }
  .section-heading { margin-bottom: 52px; }
  .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #cecece; }
  .values-grid article { min-height: 265px; padding: 25px 30px 28px 0; border-right: 1px solid #cecece; }
  .values-grid article + article { padding-left: 30px; }
  .values-grid article:last-child { border-right: 0; }
  .values-grid article > span { color: var(--accent); font-size: 12px; font-weight: 700; }
  .values-grid h3 { margin: 62px 0 12px; font-size: 24px; font-weight: 600; }
  .values-grid p { color: #656565; font-size: 15px; line-height: 1.65; }

  .partnership { display: grid; grid-template-columns: 1fr .85fr; gap: 90px; align-items: center; padding-top: 112px; padding-bottom: 112px; }
  .partnership-copy h2 { margin: 13px 0 18px; font-size: 46px; font-weight: 600; line-height: 1.1; }
  .partnership-copy > p { color: #626262; font-size: 17px; line-height: 1.65; }
  .partnership-copy ul { display: grid; gap: 13px; margin-top: 30px; list-style: none; }
  .partnership-copy li { display: flex; gap: 12px; align-items: flex-start; font-size: 14px; line-height: 1.5; }
  .partnership-copy li svg { margin-top: 4px; color: var(--accent); font-size: 11px; }

  .commitment { display: grid; grid-template-columns: 1fr 1fr; overflow: hidden; background: #dedede; gap: 1px; border: 1px solid #dedede; border-radius: 8px; }
  .commitment div { display: flex; min-height: 180px; flex-direction: column; justify-content: space-between; padding: 26px; background: #fff; }
  .commitment div:last-child { grid-column: 1 / -1; min-height: 145px; }
  .commitment strong { font-size: 38px; font-weight: 600; }
  .commitment span { color: #6b6b6b; font-size: 13px; }

  .directions { padding: 104px 0; color: #fff; background: #101011; }
  .directions .eyebrow { color: #c18ebe; }
  .section-heading.split { display: grid; grid-template-columns: 1.2fr .8fr; gap: 70px; align-items: end; }
  .section-heading.split > p { color: #a4a4a8; font-size: 16px; line-height: 1.6; }
  .directions-list { border-top: 1px solid #38383b; }
  .directions-list a { display: grid; grid-template-columns: 60px .75fr 1fr 30px; gap: 24px; align-items: center; min-height: 125px; color: #fff; border-bottom: 1px solid #38383b; transition: padding .3s ease, background .3s ease; }
  .directions-list a:hover, .directions-list a:focus-visible { padding: 0 18px; background: #19191b; }
  .directions-list a > span { color: #858589; font-size: 12px; }
  .directions-list h3 { font-size: 22px; font-weight: 500; }
  .directions-list p { color: #a4a4a8; font-size: 14px; line-height: 1.55; }

  .company-process { padding-top: 112px; padding-bottom: 112px; }
  .company-process ol { display: grid; grid-template-columns: repeat(4, 1fr); list-style: none; border-top: 1px solid #d6d6d6; }
  .company-process li { min-height: 245px; padding: 25px 24px 24px 0; border-right: 1px solid #d6d6d6; }
  .company-process li + li { padding-left: 24px; }
  .company-process li:last-child { border-right: 0; }
  .company-process li > span { color: var(--accent); font-size: 12px; font-weight: 700; }
  .company-process h3 { margin: 54px 0 11px; font-size: 21px; font-weight: 600; }
  .company-process p { color: #676767; font-size: 14px; line-height: 1.6; }

  .faq-section { padding: 104px 0; background: #f4f4f4; }
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

  .company-cta { display: flex; align-items: end; justify-content: space-between; gap: 60px; padding-top: 104px; padding-bottom: 104px; }
  .company-cta h2 { max-width: 730px; margin-top: 13px; font-size: 46px; font-weight: 600; line-height: 1.1; }
  .company-cta > a { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 12px; padding: 14px 20px; color: #fff; font-size: 14px; font-weight: 600; background: #151515; border-radius: 6px; transition: transform .25s ease; }
  .company-cta > a:hover, .company-cta > a:focus-visible { transform: translateY(-3px); }

  @media (prefers-reduced-motion: reduce) { .hero-inner { animation: none; } * { scroll-behavior: auto !important; } }

  @media (max-width: 900px) {
    .hero-inner h1 { font-size: 54px; }
    .intro, .partnership, .faq-layout { grid-template-columns: 1fr; gap: 45px; }
    .values-grid { grid-template-columns: 1fr 1fr; }
    .values-grid article:nth-child(2) { border-right: 0; }
    .values-grid article:last-child { border-top: 1px solid #cecece; }
    .section-heading.split { grid-template-columns: 1fr; gap: 20px; }
    .directions-list a { grid-template-columns: 50px .7fr 1fr 24px; }
    .company-process ol { grid-template-columns: 1fr 1fr; }
    .company-process li:nth-child(2) { border-right: 0; }
    .company-process li:nth-child(n + 3) { border-top: 1px solid #d6d6d6; }
    .faq-heading { position: static; }
    .company-cta { align-items: flex-start; flex-direction: column; }
  }

  @media (max-width: 640px) {
    .container, .hero-inner { width: calc(100% - 32px); }
    .company-hero { height: calc(100svh - 150px); min-height: 480px; background-position: 58% center; }
    .hero-inner { padding-bottom: 48px; }
    .hero-inner h1 { font-size: 42px; }
    .hero-inner p { font-size: 16px; }
    .intro, .partnership, .company-process { padding-top: 72px; padding-bottom: 72px; }
    .intro-title h2, .section-heading h2, .partnership-copy h2, .company-cta h2 { font-size: 34px; }
    .principles, .directions, .faq-section { padding: 72px 0; }
    .values-grid { grid-template-columns: 1fr; }
    .values-grid article, .values-grid article + article { min-height: 0; padding: 25px 0 30px; border-right: 0; border-top: 1px solid #cecece; }
    .values-grid h3 { margin-top: 34px; }
    .commitment div { min-height: 150px; padding: 20px; }
    .directions-list a { grid-template-columns: 34px 1fr 22px; gap: 12px; padding: 22px 0; }
    .directions-list a:hover, .directions-list a:focus-visible { padding: 22px 10px; }
    .directions-list h3 { font-size: 19px; }
    .directions-list p { grid-column: 2 / 4; }
    .directions-list svg { grid-column: 3; grid-row: 1; }
    .company-process ol { grid-template-columns: 1fr; }
    .company-process li, .company-process li + li { min-height: 0; padding: 24px 0 28px; border-right: 0; border-top: 1px solid #d6d6d6; }
    .company-process h3 { margin-top: 30px; }
    .faq-heading h2 { font-size: 34px; }
    .faq-list summary { font-size: 15px; }
    .company-cta { padding-top: 72px; padding-bottom: 72px; }
    .company-cta > a { width: 100%; justify-content: center; }
  }
`;
