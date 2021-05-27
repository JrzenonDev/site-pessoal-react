import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkHTML from 'remark-html';

export function getAllPosts() {
  const allPostsFilleNames = fs.readdirSync('./_posts');

  const posts = allPostsFilleNames.map((filename) => {

    const fileContent = fs.readFileSync(`./_posts/${filename}`, 'utf-8');
    const { content, data: metadata } = grayMatter(fileContent);
    const htmlContent = remark()
      .use(remarkHTML)
      .processSync(content)
      .toString();

    //console.log(htmlContent);

    return {
      metadata: {
        ...metadata,
        slug: filename.replace('.md', '')
      },
      content: htmlContent,
    }

  });

  //console.log(posts);

  return posts;
}