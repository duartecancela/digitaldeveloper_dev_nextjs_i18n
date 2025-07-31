import React from 'react'
import Link from '@/components/mdxcomponents/Link'
import Tag from '@/components/tag'
import { formatDate } from 'pliny/utils/formatDate'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import Image from '@/components/mdxcomponents/Image'

interface Post {
  slug: string
  date: string
  title: string
  summary?: string | undefined
  tags: string[]
  language: string
  draft?: boolean
  image?: string
}

interface PostListProps {
  posts: Post[]
  locale: LocaleTypes
  t: (key: string) => string
  maxDisplay: number
}

const PostList: React.FC<PostListProps> = ({ posts, locale, t, maxDisplay }) => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {!posts.length && <li>{t('noposts')}</li>}
      {posts.slice(0, maxDisplay).map((post) => {
        const { slug, date, title, summary, tags, image } = post
        const imageSrc =
          image && image.trim() !== ''
            ? `/static/images/${image}`
            : '/static/images/digitaldeveloper_dev.svg'

        return (
          <li key={slug} className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-start xl:space-y-0">
                {/* Imagem + data alinhadas em coluna */}
                <div className="flex flex-col xl:mr-4">
                  {imageSrc && (
                    <div className="mb-2">
                      <Link href={`/${locale}/blog/${slug}`} aria-label={`Ver post ${title}`}>
                        <Image
                          src={imageSrc}
                          alt={title}
                          width={192}
                          height={108}
                          className="h-auto w-full rounded-md object-cover"
                        />
                      </Link>
                    </div>
                  )}
                  <dl>
                    <dt className="sr-only">{t('pub')}</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, locale)}</time>
                    </dd>
                  </dl>
                </div>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={`/${locale}/blog/${slug}`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {title}
                        </Link>
                      </h2>
                      <ul className="flex flex-wrap">
                        {tags.map((tag: string) => (
                          <li key={tag}>
                            <Tag text={tag} />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary!.length > 149 ? `${summary!.substring(0, 149)}...` : summary}
                    </div>
                  </div>
                  <div className="text-base font-medium leading-6">
                    <Link
                      href={`/${locale}/blog/${slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`${t('more')}"${title}"`}
                    >
                      {t('more')} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </li>
        )
      })}
    </ul>
  )
}

export default PostList
