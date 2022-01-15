# Convusic Website

This is the website for [@ConvusicApp](https://www.convusic.app).

It is a single-page, client-side web app built with [React.js](https://reactjs.org), hosted on [Cloudflare Pages](https://pages.cloudflare.com).
React has matured a lot since I last dabbled with it in 2018, and there are now a number of new frameworks better optimized for this usecase, like [Gatsby](https://www.gatsbyjs.com).

However, I didn't feel like learning a new tool, so this project was bootstrapped with [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html) instead.

CRA has also matured since I last used it, and support for TypeScript and CSS preprocessors like SASS no longer require third party script packages. This project uses both.

Large parts of the site's design are inspired by [Amplosion](https://www.amplosion.app).

At some point, I will rewrite this site using [next.js](https://nextjs.org) because apparently that's what all the cool kids are doing, but I probably won't have the time in the near future. The [incomplete version](https://github.com/vsanthanam/convusic-site-next) is here for your perusal.

## Development  

Getting Started

```
$ git clone <this repo>
$ cd /path/to/repo
$ npm start
```

Run the (nonexistant) tests

```
$ cd /path/to/repo
$ npm test
```

Deploy to GitHub Pages

```
$ cd /path/to/repo
$ npm run deploy
```

## Some Neat Details

- The website supports dark mode
- The app previews are client specific. You'll see an iPad if you open it on an iPad, a Mac if you open it on a Mac, etc.
- The music app service icons are randomly selected everytime the home page component is mounted.
