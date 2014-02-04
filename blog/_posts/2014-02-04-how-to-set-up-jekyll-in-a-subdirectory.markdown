---
layout: post
title:  "How to set up Jekyll in a subdirectory"
date:   2014-02-04 13:14:58
author: alex
---

[Jekyll][jekyll-link] is an awesome static site generator that is great for creating blogs with. I have used it in the past and it is very easy and straightforward to use. Naturally, I have decided to use it for the Croissant blog. Since the website already existed, I only wanted to use Jekyll for the blog section and for it to live in the `www.croissant.io/blog` subdirectory. This post will go over exactly how I got it to work. I am going to assume you already have [Jekyll installed on your computer][jekyll-install].

1. First, let's create a new Jekyll site. Navigate to the root directory of where you store your website's files locally and in your terminal run the `jekyll new blog` command. `blog` in that command is going to be the placeholder of our Jekyll site name for this post. You can name it whatever you want, it doesn't matter.

  `cd` into `blog` (the root of your Jekyll site) and run the `jekyll serve` command. This will generate the site and run a development server. You can check out how the site looks by going to `http://localhost:4000` in your web browser. You'll see the default template, styling and an already created blog post. Pretty nifty.

2. Now that we have the site created and generated, it's time to set it up so it is accessible from a subdirectory. Open the newly created `_config.yml` file in your text editor and add this line at the end:

  `permalink: /blog/:title`

  Two things to note on this step. The `blog` part here does matter. This will be the name of the subdirectory where people will access your Jekyll blog or site. I set it up as `blog` and therefore my Jekyll site will be accessible at `www.croissant.io/blog`.

  The other thing is the `:title` at the end. This will be how your blog post's permalinks are constructed. I personally don't like dates to be included in my post URLs, so I just left the permalink to be the title of the post. More information on how to construct permalinks can be found on the [Jekyll permalink documentation page][jekyll-permalinks].

3. Create a new folder named after your chosen subdirectory in the root of your Jekyll site next to the `_layout`, `_posts`, and `_site` folders. In my case, it would be `blog`. Move both the `css` folder and `index.html` into the newly created folder. Go back to the root of your Jekyll site and run `jekyll serve` to regenerate the site. Check it out in your web browser. You should be getting a 403 Forbidden error. Try going to `http://localhost:4000/subdirectory` or in my case `http://localhost:4000/blog`. You should be able to see your Jekyll site again, but with no styling. Time to fix that.

4. Open up `default.html` located in the `_layouts` folder in your text editor. Find the following lines:

  `<link rel="stylesheet" href="/css/syntax.css">`

  `<link rel="stylesheet" href="/css/main.css">`

  and change both of them to have `/subdirectory` in front of `/css`. So, in my case:

  `<link rel="stylesheet" href="/blog/css/syntax.css">`

  `<link rel="stylesheet" href="/blog/css/main.css">`

  Now go back to the Jekyll root, run `jekyll serve` and check out the site. The pages should be styled as normal. We're done setting up Jekyll!

5. The last thing you have to do is push the generated site up to your web host. You will find these generated files in the `_site` folder. Your Jekyll site folder structure should look something similar to this:

  ```
  - blog (named at step 1)
  - - _layouts
  - - - default.html
  - - - post.html
  - - _posts
  - - _site
  - - - blog (named at step 2)
  - - - - css
  - - - - index.html
  - - blog (named at step 2)
  - - _config.yml
  ```

  Connect to your web host via FTP, SHH or their own GUI (I use [Filezilla][filezilla-link]). Copy the subdirectory folder (in my case, `blog`) inside the `_site` folder to your existing website's root directory. We're done! You should now be able to access your Jekyll site from your desired subdirectory such as `www.yourwebsite.com/subdirectory`.

6. Whenever you make changes to your Jekyll site, you will have to re-generate using the `jekyll serve` command. Double check how your site looks like locally via your browser to make sure everything is ok. When you are satisfied, repeat step 5 to copy the generated files to your web host.

Styling the site and creating posts and pages is a whole other topic that deserves its own blog post. The CSS files for styling can be found in the `/subdirectory/css/` folder in your Jekyll site root directory. New blog posts go in the `_posts` folder. An existing post you can use as a template should be there from when we first generated the site. Check out the [Jekyll documentation][jekyll-documentation] for more information on how to use Jekyll.

[jekyll-link]:    http://jekyllrb.com
[jekyll-install]: http://jekyllrb.com/docs/installation/
[jekyll-permalinks]: http://jekyllrb.com/docs/permalinks/
[filezilla-link]: http://filezilla-project.org/
[jekyll-documentation]: http://jekyllrb.com/docs/home/
