import { useState } from "react";
import { fetchMoreUserPostsAction } from "../utils/fetch_more_user_posts_action";
import { UserWithPosts } from "../utils/fetch_user_posts";
import { PROFILE_PAGE_POSTS_PER_PAGE } from "@/utils/constants";

export const usePosts = (userId: number, initialPosts: UserWithPosts['posts']) => {
    const [posts, setPosts] = useState(initialPosts);
    const [currentPage, setCurrentPage] = useState(1);
    const [isAllLoaded, setIsAllLoaded] = useState(false);
    
    const handleFetchMorePosts = async () => {
        const userWithPosts = await fetchMoreUserPostsAction({
            userId,
            offset: Math.max(0, currentPage * PROFILE_PAGE_POSTS_PER_PAGE),
            limit: PROFILE_PAGE_POSTS_PER_PAGE,
        });

        setCurrentPage((prev) => prev + 1)
        setPosts((currentPosts) => [...currentPosts, ...userWithPosts.posts]);

        if (userWithPosts.posts.length === 0 || userWithPosts.posts.length < PROFILE_PAGE_POSTS_PER_PAGE) {
            setIsAllLoaded(true)
        }
    };

    return {
        posts,
        isAllLoaded,
        handleFetchMorePosts
    }
}