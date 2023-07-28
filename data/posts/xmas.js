const job = {
    title: "Advent Calendar in Vue.js & Firebase",

    images: [
        `https://media.contra.com/image/upload/c_limit,fl_lossy,w_1700/v1685671593/mizuun0osawk4cx9is4o.png`,
        `https://media.contra.com/image/upload/c_limit,fl_lossy,w_1700/v1685671593/qriyqlaeexfnahil2msh.png`,
        `https://media.contra.com/image/upload/c_limit,fl_lossy,w_1700/v1685671593/slqxb7mklbk3pna1r031.png`,
        `https://media.contra.com/image/upload/c_limit,fl_lossy,w_1700/v1685671593/g0ccu5ti1eggqquzuqya.png`,
    ],

    text: `
        Here's a Vue app I did for the Travelpayouts' new year 2020-2021 promo campaign. It used Vue on the front end and Firebase on the back end. Sadly it's no longer hosted but you can check out the way it looked below. Scroll way down for videos.

        How it used to work:
        A user visits the page and it checks if they are a logged-in customer, if not -- they'd have to go log-in\register in the product and then it would redirect them back to the advent calendar app, where a new gift could be opened for every day of the campaign duration.
        Gifts live in the Firebase, each one has variable number of promo codes with links to the app dashboard where they could be activated.
    `,

    excerpt: `It was a Vue and Firebase advent calendar with a candy vibe and some sweet (pun intended) pre-rendered animations`,

    links: [
        {
            text: "Here's what it looked like in action",
            url: "https://watch.screencastify.com/v/U7fTr2IVox8NZ6Rs6tvd"
        }
    ],

    roles: [
        'FRONTEND ENGINEER',
        'FULLSTACK ENGINEER',
        'WEB DEVELOPER',
    ],

    tools: [
        'FIREBASE',
        'JAVASCRIPT',
        'VUE.JS',
    ],

    thumb: `https://media.contra.com/image/upload/c_limit,fl_lossy,w_1700/v1685671593/g0ccu5ti1eggqquzuqya.png`,
}

export default job