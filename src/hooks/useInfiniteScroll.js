// src/hooks/useInfiniteScroll.js
import { useEffect } from 'react';

const useInfiniteScroll = (loadMore, loading) => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight && !loading) {
                loadMore();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMore, loading]);
};

export default useInfiniteScroll;
