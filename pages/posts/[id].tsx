import Head from 'next/head'
import { GetServerSideProps } from 'next';
import type { Article } from '../../types/article';
import { client } from '../../libs/client';
import Date from '../../components/Date';
import { BiTime } from 'react-icons/bi';
import { BiCategory } from 'react-icons/bi';
import { TwitterShareButton, FacebookShareButton, LineShareButton, HatenaShareButton, PocketShareButton, TwitterIcon, FacebookIcon, LineIcon, HatenaIcon, PocketIcon } from "react-share";
import styles from '../../styles/Article.module.css'

type Props = {
  article: Article
};

export default function Article({ article }: Props) {
  return (
    <>
      <Head>
        <title>{article.title} | tanukizzan</title>
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content={`https://tanukizzan.com/posts/${article.id}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.eye_catch.url} />
      </Head>
      <div className="pad w-3/5 max-w-2xl m-auto">
        <div className="padBtn"></div>
        <img src={article.eye_catch.url} className={styles.padImg} />
      </div>
      <div className="w-4/5 max-w-3xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="my-10">
            <div className={styles.title}>
              {article.title}
            </div>
            {article.publishedAt && (
              <div className={styles.category}>
                <p><BiTime />
                  <span><Date dateString={article.publishedAt} /></span></p>
              </div>
            )}
            {article.category && (
              <div className={styles.category}>
                <p><BiCategory />
                  <span>{article.category.name}</span></p>
              </div>
            )}
          </div>
          <div
            className={styles.article}
            dangerouslySetInnerHTML={{
              __html: `${article.body}`,
            }}
          />
          <div className={styles.shareBtn}>
            <TwitterShareButton url={`https://tanukizzan.com/posts/${article.id}`} title={article.title}>
              <TwitterIcon size={50} round={true} />
            </TwitterShareButton>
            <FacebookShareButton url={`https://tanukizzan.com/posts/${article.id}`} quote={article.title}>
              <FacebookIcon size={50} round={true} />
            </FacebookShareButton>
            <LineShareButton url={`https://tanukizzan.com/posts/${article.id}`} title={article.title}>
              <LineIcon size={50} round={true} />
            </LineShareButton>
            <HatenaShareButton url={`https://tanukizzan.com/posts/${article.id}`} title={article.title}>
              <HatenaIcon size={50} round={true} />
            </HatenaShareButton>
            <PocketShareButton url={`https://tanukizzan.com/posts/${article.id}`} title={article.title}>
              <PocketIcon size={50} round={true} />
            </PocketShareButton>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'articles',
    contentId: idExceptArray,
  });

  return {
    props: {
      article: data,
    },
  };
};