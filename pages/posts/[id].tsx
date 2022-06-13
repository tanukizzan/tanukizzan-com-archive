import { GetServerSideProps } from 'next';
import type { Article } from '../../types/article';
import { client } from '../../libs/client';

type Props = {
  article: Article;
};

export default function Article({ article }: Props) {
  return (
    <>
      <div className="w-4/5 max-w-3xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <img
            className="shadow-lg h-full w-full object-cover aspect-video rounded-md"
            src={article.eye_catch.url}
          />
          <div className="mt-8">
            <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold">
              {article.title}
            </div>
          </div>
          {article.tag && (
            <div className="flex items-center justify-start mt-4 mb-4">
              <div className="px-4 py-2 bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700">
                # {article.tag}
              </div>
            </div>
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: `${article.body}`,
            }}
          />
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