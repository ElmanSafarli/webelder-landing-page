import styled from "styled-components";

export const ServiceLanding = styled.main`
  --service-accent: ${(props) => props.$accent || "#9a4497"};
  --service-soft: ${(props) => props.$soft || "#f8f4f8"};
  color: #151515;

  .container {
    width: min(1120px, calc(100% - 40px));
    margin: 0 auto;
  }

  .eyebrow {
    color: var(--service-accent);
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
    gap: 72px;
    align-items: center;
    min-height: 650px;
    padding: 88px 0 104px;
  }

  .hero-copy h1 {
    max-width: 700px;
    margin: 18px 0 24px;
    font-size: clamp(46px, 6vw, 76px);
    font-weight: 600;
    line-height: 1.02;
  }

  .hero-copy > p {
    max-width: 620px;
    color: #5e5e5e;
    font-size: 19px;
    line-height: 1.65;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
  }

  .primary-link,
  .text-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    font-weight: 600;
    transition: transform 0.25s ease, background 0.25s ease;
  }

  .primary-link {
    padding: 13px 22px;
    color: #fff;
    background: #151515;
    border-radius: 6px;
  }

  .primary-link:hover { transform: translateY(-2px); }
  .text-link { padding: 13px 8px; color: #151515; }

  .hero-visual {
    position: relative;
    min-height: 420px;
    overflow: hidden;
    background: var(--service-soft);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }

  .web-console { padding: 22px; background: #10131b; color: #fff; }
  .console-top { display: flex; align-items: center; gap: 7px; padding-bottom: 18px; border-bottom: 1px solid #292e3b; }
  .console-top i { width: 8px; height: 8px; background: #5a6170; border-radius: 50%; }
  .console-top span { margin-left: auto; color: #8891a4; font-size: 11px; }
  .console-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding-top: 28px; }
  .metric, .chart, .deploy { padding: 20px; background: #191e29; border: 1px solid #292f3d; border-radius: 6px; }
  .metric small, .deploy small { display: block; color: #8f98aa; font-size: 11px; }
  .metric strong { display: block; margin: 10px 0; font-size: 30px; }
  .metric span { color: #73d3aa; font-size: 11px; }
  .chart { grid-column: span 2; display: flex; height: 120px; align-items: end; gap: 12px; }
  .chart span { flex: 1; height: 38%; background: #3d63dd; border-radius: 3px 3px 0 0; }
  .chart span:nth-child(2), .chart span:nth-child(5) { height: 72%; }
  .chart span:nth-child(3) { height: 52%; } .chart span:nth-child(4) { height: 86%; } .chart span:nth-child(6) { height: 95%; }
  .deploy { grid-column: span 2; display: grid; gap: 6px; }
  .deploy b { font-size: 14px; } .deploy em { color: #73d3aa; font-size: 11px; font-style: normal; }

  .design-board { display: grid; grid-template-columns: 118px 1fr; background: #f5f1f3; }
  .board-tools { display: flex; flex-direction: column; gap: 10px; padding: 22px 14px; background: #fff; border-right: 1px solid #ddd7da; }
  .board-tools b { margin-bottom: 18px; font-size: 12px; }
  .board-tools span { padding: 8px; color: #777; font-size: 10px; border-radius: 4px; }
  .board-tools .active { color: #9a3154; background: #ffe7ef; }
  .board-canvas { position: relative; display: flex; gap: 18px; align-items: center; justify-content: center; padding: 24px; }
  .frame { width: 132px; height: 250px; padding: 16px; background: #fff; border-radius: 12px; box-shadow: 0 14px 32px rgba(70,40,50,.12); }
  .frame.one { display: flex; flex-direction: column; gap: 12px; }
  .frame.one i { width: 32px; height: 32px; background: #d64f78; border-radius: 8px; }
  .frame.one strong { margin-top: 8px; font-size: 12px; }
  .frame.one span { height: 8px; background: #eee; border-radius: 3px; }
  .frame.one button { margin-top: auto; padding: 8px; color: #fff; font-size: 9px; background: #1c1c1c; border: 0; border-radius: 4px; }
  .frame.two { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; align-content: start; }
  .frame.two div { height: 72px; background: #ffdfe9; border-radius: 6px; }
  .frame.two div:first-child { grid-column: span 2; height: 92px; background: #252229; }
  .cursor { position: absolute; right: 18px; bottom: 58px; padding: 7px 10px; color: #fff; font-size: 9px; background: #d64f78; border-radius: 3px; }

  .brand-kit { background: #dcefe8; }
  .brand-mark { position: absolute; top: 30px; left: 30px; display: flex; align-items: center; gap: 12px; }
  .brand-mark i { display: grid; width: 42px; height: 42px; place-items: center; color: #fff; font-size: 20px; font-style: normal; font-weight: 800; background: #173f35; }
  .brand-mark span { color: #31564d; font-size: 11px; font-weight: 700; text-transform: uppercase; }
  .brand-card { position: absolute; padding: 20px; border-radius: 6px; box-shadow: 0 18px 36px rgba(26,75,62,.14); }
  .brand-card small, .brand-type small { display: block; margin-bottom: 18px; font-size: 10px; text-transform: uppercase; }
  .brand-card.dark { top: 105px; left: 30px; width: 46%; height: 150px; color: #fff; background: #173f35; transform: rotate(-3deg); }
  .brand-card.dark strong { font-size: 58px; }
  .brand-card.light { top: 125px; right: 26px; width: 42%; height: 145px; background: #fff; transform: rotate(4deg); }
  .brand-card.light div { display: flex; gap: 8px; }
  .brand-card.light i { width: 30px; height: 30px; background: #173f35; border-radius: 50%; }
  .brand-card.light i:nth-child(2) { background: #168466; } .brand-card.light i:nth-child(3) { background: #bfe2d6; }
  .brand-type { position: absolute; right: 42px; bottom: 28px; width: 68%; padding: 18px 22px; background: #f8fffc; border-radius: 6px; box-shadow: 0 14px 28px rgba(26,75,62,.12); }
  .brand-type small { margin-bottom: 5px; } .brand-type b { margin-right: 16px; font-size: 38px; } .brand-type span { color: #52736a; font-size: 11px; }

  .section { padding: 104px 0; }
  .section.soft { background: var(--service-soft); }

  .section-heading {
    display: flex;
    justify-content: space-between;
    gap: 48px;
    align-items: end;
    margin-bottom: 52px;
  }

  .section-heading h2 {
    max-width: 610px;
    margin-top: 12px;
    font-size: clamp(34px, 4vw, 50px);
    font-weight: 600;
    line-height: 1.1;
  }

  .section-heading > p {
    max-width: 430px;
    color: #666;
    font-size: 17px;
    line-height: 1.6;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    overflow: hidden;
    background: #dedede;
    border: 1px solid #dedede;
    border-radius: 8px;
  }

  .feature {
    min-height: 220px;
    padding: 28px;
    background: #fff;
  }

  .feature-index {
    display: block;
    margin-bottom: 42px;
    color: var(--service-accent);
    font-size: 13px;
    font-weight: 700;
  }

  .feature h3 { margin-bottom: 10px; font-size: 20px; font-weight: 600; }
  .feature p { color: #666; line-height: 1.6; }

  .process-list { border-top: 1px solid #d8d8d8; }
  .process-row {
    display: grid;
    grid-template-columns: 72px 0.55fr 1fr;
    gap: 28px;
    padding: 30px 0;
    border-bottom: 1px solid #d8d8d8;
  }
  .process-row > span { color: var(--service-accent); font-weight: 700; }
  .process-row h3 { font-size: 22px; font-weight: 600; }
  .process-row p { color: #666; line-height: 1.6; }

  .pill-list { display: flex; flex-wrap: wrap; gap: 10px; }
  .pill-list span {
    padding: 10px 14px;
    color: #444;
    font-size: 14px;
    font-weight: 600;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .cta-band {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    padding: 56px;
    color: #fff;
    background: #151515;
    border-radius: 8px;
  }
  .cta-band h2 { max-width: 650px; font-size: clamp(32px, 4vw, 48px); line-height: 1.12; }
  .cta-band .primary-link { flex: 0 0 auto; color: #151515; background: #fff; }

  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; min-height: 0; gap: 48px; }
    .hero-visual { min-height: 360px; }
    .feature-grid { grid-template-columns: 1fr 1fr; }
    .section-heading { align-items: start; flex-direction: column; gap: 18px; }
  }

  @media (max-width: 640px) {
    .container { width: min(100% - 32px, 1120px); }
    .hero { padding: 64px 0 72px; }
    .hero-copy h1 { font-size: 43px; }
    .hero-copy > p { font-size: 17px; }
    .hero-visual { min-height: 300px; }
    .design-board { grid-template-columns: 80px 1fr; }
    .board-tools { padding: 16px 8px; }
    .board-canvas { gap: 8px; padding: 12px; }
    .frame { width: 104px; height: 210px; padding: 12px; }
    .section { padding: 72px 0; }
    .feature-grid { grid-template-columns: 1fr; }
    .feature { min-height: 190px; }
    .process-row { grid-template-columns: 42px 1fr; gap: 16px; }
    .process-row p { grid-column: 2; }
    .cta-band { align-items: flex-start; flex-direction: column; padding: 36px 26px; }
  }
`;
