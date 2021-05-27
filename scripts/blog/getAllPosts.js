import fs from 'fs';
import grayMatter from 'gray-matter';

export function getAllPosts() {
  const allPostsFilleNames = fs.readdirSync('./_posts');

  const posts = allPostsFilleNames.map((filename) => {

    const fileContent = fs.readFileSync(`./_posts/${filename}`, 'utf-8');
    const { content, data: metadata } = grayMatter(fileContent);

    return {
      metadata: {
        ...metadata,
        slug: filename.replace('.md', '')
      },
      content: content,
    }

  });

  console.log(posts);

  return [];
}