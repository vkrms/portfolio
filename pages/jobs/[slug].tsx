import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import cn from 'classnames'

import style from '@/styles/job.module.scss';
import { getAllPostSlugs } from '../../lib/posts';
import Video from '../../components/video';

// Return a list of possible values for slug
export async function getStaticPaths() {
    const result = {
        paths: getAllPostSlugs(),
        fallback: false,
    };
    return result
}

export async function getStaticProps({ params }) {
    const bar = await import(`/data/posts/${params.slug}`)
        .then(data => data.default)
        .catch(err => console.log({ err }))

    console.log({ bar })

    return {
        props: {
            params,
            bar,
        },
    };
}

const pillsFor = (arr: string[]) => (
    <div className={style.pills}>
        {
            arr?.map((text, i) => (
                <div key={i} className={style.pill}>{text}</div>
            ))
        }
    </div>
)

type MetaGridProps = {
    title: string;
    content: React.ReactNode;
};

class MetaGrid extends React.Component<MetaGridProps> {
    render() {
        const { title, content } = this.props;
        return (
            <>
                <div className={cn(style.grid__col)}>
                    <b className={style.meta__title}>{title}:</b>
                </div>
                <div className={cn(style.grid__col)}>{content}</div>
            </>
        );
    }
}

export default function Job({ bar, params }) {
    // console.log({ bar })

    const metaItems = [
        { title: 'Client', content: bar.client ?? '' },
        { title: 'Roles', content: pillsFor(bar.roles) },
        { title: 'Tools', content: pillsFor(bar.tools) },
        { title: 'When', content: bar.years },
    ];

    return (
        <article className={style.job}>
            <header className={style.header}>
                <Link href="/" className={style.back} title="go back" />
            </header>


            <h1 className={style.title}>{bar.title}</h1>
            {/* <h2 className={style.title}>{params.slug}</h2> */}

            <div className={style.grid}>
                {metaItems.map((item) => (
                    <MetaGrid key={item.title} title={item.title} content={item.content} />
                ))}
            </div>


            <div className={style.content}>
                <div className={style.text}
                    dangerouslySetInnerHTML={{ __html: bar.text }}
                />

                <div className={style.links}>
                    {
                        bar.links?.map((link, i) => (
                            <div className={style.link} key={i}>
                                <span>{link.text}</span>
                                <a
                                    href={link.url}
                                    target="_blank"
                                >
                                    {link.linkText}
                                </a>
                            </div>
                        ))
                    }
                </div>

                <section className='images'>
                    {
                        bar.images?.map((image: string) => (
                            <div className={style.image__wrapper} key={image}>
                                <Image
                                    src={image}
                                    alt=""
                                    width={700}
                                    height={526}
                                    className={style.image}
                                />
                            </div>
                        ))
                    }
                </section>

                <section className='videos'>
                    {
                        bar.videos?.map((src: string) => (
                            <div className={style.image__wrapper} key={src}>
                                <Video src={src} />
                            </div>
                        ))
                    }
                </section>
            </div>
        </article>
    )
}
