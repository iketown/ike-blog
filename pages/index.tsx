import styled from "styled-components";
import { Button } from "semantic-ui-react";
import Link from "next/link";

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <StyledContainer>
    <div>
      <h1>ike.town</h1>
    </div>
    <div>
      <Link href="/blog">
        <Button>Blog</Button>
      </Link>
      <Button>Projects</Button>
    </div>
  </StyledContainer>
);
export default Home;
