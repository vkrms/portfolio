export type Job = {
    created?: string;
    client: string;
    title: string;
    images: string[];
    text: string;
    excerpt: string;
    links?: {
        text: string;
        url: string;
    }[];
    roles: string[];
    tools: string[];
    thumb: string;
    years: string;
};
