# Intro

Sneaky Peek exists to make previewing content changes easier when using a static site generator. Sneaky Peek will provide a live preview URL that is always accessible by your content editors. No longer will you have to teach them how to run and configure a local development server to see their content changes, or make them wait for Netlify deploy previews.

## How does it work?

The premise behind Sneaky Peek is simple and consists of three main elements:

* Running your static site generator's development server permanently in the cloud.
* Plugins that allow your static site generator to load new content from the headless CMS.
* Webhooks from your headless CMS to inform us about updates.

Most modern static site generators provide a development mode where they watch for changes and then live update when code or content changes. This works great for code changes, but doesn't always know about content changes from a headless CMS, and you need to have it running locally which isn't always practical, especially if the person updating content isn't a developer.

Sneaky Peek will run your developement server in the cloud so you can always get to it via a unique url like `https://my-site.preview.sneakypeek.app`. 

On top of this, where required we have created plugins for static site generators that allow them to refresh their content when it changes.

Finally we have built an API that allows your headless CMS to make your cloud dev server aware of content changes via webhooks so it can automaticlly reload.

We have tried to make this whole process as easy as possible, and it shouldn't take longer than 15 minutes to configure your site to work with Sneaky Peek.