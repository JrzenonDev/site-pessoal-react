import fs from 'fs';


export function getAllPosts() {
  const allPostsFilleNames = fs.readdirSync('./_posts');

  const posts = allPostsFilleNames.map((filename) => {

    const fileContent = fs.readFileSync(`./_posts/${filename}`);

    return {
      metadata: {
        slug: filename.replace('.md', '')
      },
      content: fileContent.toString(),
    }

  });

  console.log(posts);

  return [];
}