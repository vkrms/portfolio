import fs from 'fs';

const postsDirectory = 'data/posts';

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.js$/, ''),
            },
        };
    });
}

// todo: dry
export function getAllPostSlugsB() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            slug: fileName.replace(/\.js$/, ''),
        };
    });
}