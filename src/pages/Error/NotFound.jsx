import styled from "styled-components";
import { Link } from "react-router-dom";

import { Navbar, Footer } from "../../widgets";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="content">
          <h1>404</h1>
          <h2>Page not found</h2>
          <p>The page you are looking for doesn’t exist or has been moved.</p>

          <Link to="/">Go back home</Link>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default NotFound;
const Wrapper = styled.main`
  min-height: calc(100vh - 160px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;

  .content {
    text-align: center;
    max-width: 480px;
  }

  h1 {
    font-size: 96px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  h2 {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: var(--gray);
    margin-bottom: 32px;
  }

  a {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 24px;
    text-decoration: none;

    font-size: 14px;
    font-weight: 500;
    color: var(--white);
    background: #333333;

    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;
