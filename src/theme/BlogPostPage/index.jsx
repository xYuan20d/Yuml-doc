import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import CommentCard from '@site/src/components/CommentCard';

export default function BlogPostPageWrapper(props) {
  return (
    <>
      <BlogPostPage {...props} />
      <CommentCard />
    </>
  );
}