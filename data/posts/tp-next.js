const job = {
    created: '2022-06-15',

    slug: "tp-next",

    title: "Landing Page With Scroll Animation in Next.js & GSAP",

    text: `
            Travelpayouts' new homepage began with some fun circle animations. The circles were tied to scroll position with GSAP ScrollTrigger. It took some time & effort to implement -- they had to move through various sections and get fixed relative to some static content 😮‍💨 
            I've managed and I'm still proud of it, though in the end the animation had to be scraped because of the inconsistent performance on various platforms and screen sizes.The site now has a simplified version, which is rather nice too.
        `,

    excerpt: `Also featuring Contentful cloud CMS, so almost everything is editable by a non-developer.`,

    tools: [
        'Next.js',
        'Contentful',
        'TypeScript',
        'GSAP'
    ],

    roles: [
        'frontend engineer',
        'backend engineer',
        'full-stack engineer',
        'web developer',
    ],

    images: [
        // from the public folder
        '/screens/a.png',
        '/screens/b.png',
        '/screens/c.png',
        '/screens/d.png',
    ],


    vids: [
        {
            linkText: 'Video demo',
            url: '/tp-next-home.webm',
        }
    ],

    client: 'Travelpayouts',

    years: '2022 -- 2023',

    links: [
        {
            text: 'Visit at: ',
            linkText: 'travelpayouts.com',
            url: 'https://travelpayouts.com/',
        },        
    ],


    thumb: "https://images.ctfassets.net/xukg0egbaz3u/4TjEfbF7lRO97JCltRcOGF/329cf7f9658ebb6ed5f1fa53ffeab889/EN_Facebook_OG_1200x630.png?fm=webp&w=800",
}

export default job