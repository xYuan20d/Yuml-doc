import React from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import CommentCard from '@site/src/components/CommentCard'; // ✅ 添加这一行

// apply a bottom margin in list view
function useContainerClassName() {
  const {isBlogPostPage} = useBlogPost();
  return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}

export default function BlogPostItem({children, className}) {
  const containerClassName = useContainerClassName();
  const {isBlogPostPage} = useBlogPost();

  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>

      {isBlogPostPage && <CommentCard />} {/* ✅ 仅详情页加载评论组件 */}

      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
