export interface Blog{
    id: string;
    title: string;
    description: string;
    publish_date: string;
    author_name: string;
    blog_image: string;
    total_likes: string;
}

export interface Product{
    id: string,
    title: string;
    description: string;
    image: string;
    price: number;
}