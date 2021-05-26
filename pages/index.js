import react from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Head from '../src/infra/components/Head';
import Typography from '../src/components/foundation/Typography';
import Header from '../src/patterns/Header';
import Footer from '../src/patterns/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
  }

`;

const fontSize = 30;

const Title = styled.h3`

  font-size: ${fontSize}px;

  a {
    color: ${(props) => {
      return props.theme.colors.primary;
    }};
    text-decoration: none;
    &:hover {
      color: #666;
    }
  }
`;

const PostCardWrapper = styled.article`
  border: 1px solid orange;
  padding: ${({theme}) => theme.spacing.big}px;
`;

function PostCard() {
  return (
    <PostCardWrapper>
      <header>
        <Title>
          <a href="" rel="bookmark" href="#">Canal JRzenon Dev</a>
        </Title>
        <small>Maio, 2021 ☕ 1 min read</small>
      </header>
      <p>Começando o css agora.</p>
    </PostCardWrapper>
  );
}

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Head title="Home - JrDev Site" />
      {/* <Header /> */}
      <main>
        <PostCard />
        {/* <Typography>
          Conteúdo unico de cada página
        </Typography> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
