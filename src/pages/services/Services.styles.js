import styled from "styled-components";

export const Page = styled.main`
  color: #141414;

  .container {
    width: min(1120px, calc(100% - 40px));
    margin: 0 auto;
  }

  .eyebrow {
    display: block;
    color: var(--accent);
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .services-hero {
    position: relative;
    display: flex;
    height: calc(100svh - 160px);
    min-height: 500px;
    max-height: 680px;
    align-items: end;
    overflow: hidden;
    background-position: center;
    background-size: cover;

    &::before {
      position: absolute;
      inset: 0;
      content: "";
      background: rgba(0, 0, 0, 0.64);
    }
  }

  .hero-content {
    position: relative;
    z-index: 1;
    width: min(1120px, calc(100% - 40px));
    margin: 0 auto;
    padding-bottom: 72px;
    color: #fff;

    .eyebrow { color: #e2b2df; }

    h1 {
      max-width: 780px;
      margin: 15px 0 22px;
      font-size: 66px;
      font-weight: 600;
      line-height: 1.03;
    }

    p {
      max-width: 660px;
      color: rgba(255, 255, 255, 0.78);
      font-size: 18px;
      line-height: 1.6;
    }
  }

  .hero-link,
  .detail-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;

    svg { transition: transform 0.25s ease; }
    &:hover svg, &:focus-visible svg { transform: translateX(4px); }
  }

  .hero-link {
    margin-top: 30px;
    padding: 13px 18px;
    color: #141414;
    background: #fff;
    border-radius: 6px;
  }

  .overview { padding: 104px 0 72px; }

  .overview-heading {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 72px;
    align-items: end;

    h2 {
      max-width: 680px;
      margin-top: 13px;
      font-size: 46px;
      font-weight: 600;
      line-height: 1.1;
    }

    > p { color: #666; font-size: 17px; line-height: 1.65; }
  }

  .service-jump {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 56px;
    border-top: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;

    a {
      display: flex;
      min-height: 88px;
      align-items: center;
      gap: 14px;
      padding: 20px 24px;
      color: #222;
      font-size: 15px;
      font-weight: 600;
      border-right: 1px solid #d7d7d7;
      transition: color 0.25s ease, background 0.25s ease;

      &:last-child { border-right: 0; }
      span { color: var(--accent); font-size: 11px; }
      &:hover, &:focus-visible { color: #fff; background: #151515; }
    }
  }

  .service-showcase { padding-bottom: 104px; }

  .service-row {
    display: grid;
    grid-template-columns: 1.08fr 0.92fr;
    gap: 80px;
    align-items: center;
    padding-top: 88px;
    padding-bottom: 88px;
    scroll-margin-top: 110px;
    border-bottom: 1px solid #dedede;

    &:nth-child(even) .service-media { order: 2; }
    &:nth-child(even) .service-copy { order: 1; }
  }

  .service-media {
    position: relative;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #eee;
    border-radius: 8px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.55s cubic-bezier(0.2, 0.7, 0.2, 1);
    }

    > span {
      position: absolute;
      top: 18px;
      left: 18px;
      padding: 7px 11px;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      background: rgba(0, 0, 0, 0.72);
      border-radius: 4px;
      backdrop-filter: blur(8px);
    }

    &:hover img { transform: scale(1.035); }
  }

  .service-number { color: var(--accent); font-size: 12px; font-weight: 700; }

  .service-copy {
    h2 { margin: 13px 0 16px; font-size: 38px; font-weight: 600; line-height: 1.12; }
    .service-description { color: #555; font-size: 17px; line-height: 1.6; }
    .service-answers {
      display: grid;
      gap: 14px;
      margin: 22px 0 26px;

      div { padding: 15px 16px; background: #f6f6f6; border-radius: 6px; }
      span { display: block; margin-bottom: 5px; color: var(--accent); font-size: 10px; font-weight: 700; text-transform: uppercase; }
      p { color: #444; font-size: 13px; line-height: 1.5; }
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px 18px;
      margin-bottom: 28px;
      list-style: none;
    }

    li {
      display: flex;
      gap: 9px;
      align-items: flex-start;
      font-size: 13px;
      line-height: 1.45;
      svg { margin-top: 4px; color: var(--accent); font-size: 10px; }
    }
  }

  .detail-link { color: #141414; font-size: 14px; }

  .process-section { padding: 104px 0; color: #fff; background: #111; }

  .process-heading {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    align-items: end;
    margin-bottom: 58px;

    .eyebrow { color: #c18ebe; }
    h2 { max-width: 700px; font-size: 44px; font-weight: 500; line-height: 1.1; }
  }

  .process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid #3a3a3a;

    article { min-height: 250px; padding: 25px 24px 20px 0; border-right: 1px solid #3a3a3a; }
    article + article { padding-left: 24px; }
    article:last-child { border-right: 0; }
    span { color: #8b8b8f; font-size: 12px; }
    h3 { margin: 58px 0 12px; font-size: 22px; font-weight: 500; }
    p { color: #a9a9ad; font-size: 14px; line-height: 1.6; }
  }

  .services-cta {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 56px;
    padding-top: 104px;
    padding-bottom: 104px;

    h2 { max-width: 760px; margin-top: 13px; font-size: 45px; font-weight: 600; line-height: 1.1; }
    > a {
      display: inline-flex;
      flex: 0 0 auto;
      align-items: center;
      gap: 12px;
      padding: 14px 20px;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      background: #151515;
      border-radius: 6px;
      transition: transform 0.25s ease;
      &:hover, &:focus-visible { transform: translateY(-3px); }
    }
  }

  @media (max-width: 900px) {
    .hero-content h1 { font-size: 54px; }
    .overview-heading { grid-template-columns: 1fr; gap: 20px; }
    .service-row { grid-template-columns: 1fr; gap: 40px; }
    .service-row:nth-child(even) .service-media,
    .service-row:nth-child(even) .service-copy { order: initial; }
    .process-grid { grid-template-columns: 1fr 1fr; }
    .process-grid article:nth-child(2) { border-right: 0; }
    .process-grid article:nth-child(n + 3) { border-top: 1px solid #3a3a3a; }
    .services-cta { align-items: flex-start; flex-direction: column; }
  }

  @media (max-width: 640px) {
    .container, .hero-content { width: calc(100% - 32px); }
    .services-hero { height: calc(100svh - 150px); min-height: 480px; }
    .hero-content { padding-bottom: 48px; }
    .hero-content h1 { font-size: 42px; }
    .hero-content p { font-size: 16px; }
    .overview { padding: 72px 0 48px; }
    .overview-heading h2 { font-size: 34px; }
    .service-jump { grid-template-columns: 1fr; margin-top: 40px; }
    .service-jump a { min-height: 64px; border-right: 0; border-bottom: 1px solid #d7d7d7; }
    .service-jump a:last-child { border-bottom: 0; }
    .service-showcase { padding-bottom: 72px; }
    .service-row { gap: 28px; padding-top: 64px; padding-bottom: 64px; }
    .service-copy h2 { font-size: 31px; }
    .service-copy ul { grid-template-columns: 1fr; }
    .process-section { padding: 72px 0; }
    .process-heading { align-items: flex-start; flex-direction: column; }
    .process-heading h2 { font-size: 34px; }
    .process-grid { grid-template-columns: 1fr; }
    .process-grid article, .process-grid article + article { min-height: 0; padding: 24px 0 28px; border-right: 0; border-top: 1px solid #3a3a3a; }
    .process-grid h3 { margin-top: 30px; }
    .services-cta { padding-top: 72px; padding-bottom: 72px; }
    .services-cta h2 { font-size: 34px; }
    .services-cta > a { width: 100%; justify-content: center; }
  }
`;
