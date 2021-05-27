import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { getAllPosts } from '../scripts/blog/getAllPosts';

import Head from '../src/infra/components/Head';
import Typography from '../src/components/foundation/Typography';
import Header from '../src/patterns/Header';
import Footer from '../src/patterns/Footer';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: ${({ theme }) => theme.colors.primary};
  }
  * {
    font-family: sans-serif;
    color: #333;
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 700px;
    margin: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5
  a {
    color: var(--primary);
  }
  button,
  a {
    transition: opacity .3s;
    &:focus,
    &:hover {
      opacity: .5;
    }
  }

  .postsContainer {
    h1 {
      font-size: 2em;
      background-color: var(--primary);
      color: #fff;
      padding: 3px 5px;
      margin: 0;
      display: inline-block;
    }
  }
  .postsContainer__post {
    a {
      color: inherit;
      font-weight: bold;
      text-decoration: none;
    }
  }
  .headerContainer {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-bottom: 32px;
    img {
      max-width: 50px;
      border-radius: 100%;
      margin-right: 16px;
    }
    h1 {
      margin: 0;
    }
  }
`;

// const fontSize = 30;
// const Title = styled.h3`
//   font-size: ${fontSize}px;
//   a {
//     color: ${(props) => {
//       return props.theme.colors.primary;
//     }};
//     text-decoration: none;
//     &:hover {
//       color: #666;
//     }
//   }
// `;

// const PostCardWrapper = styled.article`
//   border: 1px solid orange;
//   padding: ${({theme}) => theme.spacing.big}px;
// `;

// function PostCard() {
//   return (
//     <PostCardWrapper>
//       <header>
//         <Title>
//           <a href="" rel="bookmark" href="#">Canal JRzenon Dev</a>
//         </Title>
//         <small>Maio, 2021 ☕ 1 min read</small>
//       </header>
//       <p>Começando o css agora.</p>
//     </PostCardWrapper>
//   );
// }

// principal function
export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Head title="Home - JrDev Site" />
      {/* <Header /> */}

      <header className="headerContainer">
        <img src="https://github.com/JrzenonDev.png" alt="" />
        <h1>JrDev Blog's</h1>
      </header>

      <section className="postsContainer">
        <h1>Posts</h1>

        <article className="postsContainer__post">
          <h2>
            <a href="">
            </a>
          </h2>
          <p></p>
        </article>

      </section>

      {/* <main> */}
        {/* <PostCard /> */}
        {/* <Typography>
          Conteúdo unico de cada página
        </Typography> */}
      {/* </main> */}
      {/* <Footer /> */}



    </div>
  );
}


//

export async function getStaticProps() {

const posts = getAllPosts();

  return {
    props: {
      posts
    }
  }

}