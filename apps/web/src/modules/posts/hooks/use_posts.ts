import { useState } from "react";
import { fetchMorePostsAction } from "../utils/fetch_more_posts_action";
import { Post } from "../utils/fetch_posts";
import { HOME_PAGE_POSTS_PER_PAGE } from "@/utils/constants";

export const usePosts = (initialPosts: Post[]) => {
    const [posts, setPosts] = useState(initialPosts);
    const [currentPage, setCurrentPage] = useState(1);
    const [isAllLoaded, setIsAllLoaded] = useState(false);
    
    const handleFetchMorePosts = async () => {
        const posts = await fetchMorePostsAction({
            offset: Math.max(0, currentPage * HOME_PAGE_POSTS_PER_PAGE),
            limit: HOME_PAGE_POSTS_PER_PAGE,
        });

        setCurrentPage((prev) => prev + 1)
        setPosts((currentPosts) => [...currentPosts, ...posts]);

        if (posts.length === 0 || posts.length < HOME_PAGE_POSTS_PER_PAGE) {
            setIsAllLoaded(true)
        }
    };

    return {
        posts,
        isAllLoaded,
        handleFetchMorePosts
    }
}