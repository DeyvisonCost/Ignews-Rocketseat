/* eslint-disable @next/next/no-title-in-document-head */
// eslint-disable-next-line @next/next/no-document-import-in-page
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client'
import Head  from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
            <time>18 de março de 2022</time>
          <a href="">
            <strong>title post</strong>
            <p>text post</p>
          </a>
            <time>18 de março de 2022</time>
          <a href="">
            <strong>title post</strong>
            <p>text post</p>
          </a>
            <time>18 de março de 2022</time>
          <a href="">
            <strong>title post</strong>
            <p>text post</p>
          </a>
            <time>18 de março de 2022</time>
          <a href="">
            <strong>title post</strong>
            <p>text post</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async() => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'post')
    ], {
        fetch: ['post.title', 'post.content'],
        pageSize: 100,
    })

    console.log(response);

    return {
        props: {

        }
    }
}
