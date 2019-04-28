---
templateKey: blog-post
title: 'How to do a Pomodoro App with React, Prisma and Gatby Part 1'
date: 2019-04-27T22:46:52.444Z
description: >-
  The first part of a series of mini tutorials for developing a simple Pomodoro
  app using Gatsby, Prisma and React
---
## Goals

* Use the app for count the work time and rest time.
* Keep a log of the worked pomodoros

We'll use Gatsby CLI if you don't have installed yet just type:

<?prettify linenums=1?>

```
npm install -g gatsby-cli
```

And then we'll create our new project with:

<?prettify linenums=1?>

```
gatsby new gatsby-pomodoro-react
```

and place inside our new project directory

<?prettify linenums=1?>

```
cd gatsby-pomodoro-react
```

also we'll install this packages:

<?prettify linenums=1?>

```
npm install --save styled-components gatsby-plugin-typography react-typography typography
```

If everything is correct you should see the next screen in [ http://localhost:8000/](http://localhost:8000/)

![gatsby](/img/deepinscreenshot_seleccionar-área_20190427174631.png "gatsby")

We'll  modify `gatsby-config.js`

<?prettify linenums=1?>

```
module.exports = {
siteMetadata: {
    title: 'Gatsby Default Starter',
},
plugins: [
+ {
+  resolve: `gatsby-plugin-typography`,
+  options: {
+    pathToConfigModule: `src/utils/typography`,
+  }
+ }
],
}
```

Where:
**pathToConfigModule**: (string) The path to the file in which you export your typography configuration.

and paste this into `typography.js` :

<?prettify linenums=1?>

```
import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Roboto",
      styles: ["300","400"],
    },
    {
      name: "Lato",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: ["Lato"],
  bodyFontFamily: ["Roboto"],
})

export default typography
```

Delete `layout.css` from the components folder, because we will use styled components and typography to styles our app

also delete de importation from `layout.js`

<?prettify linenums?>

```
...
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header
- import "./layout.css
...
```

We need to modify our `index.js` file to look like this

<?prettify linenums=1?>

```
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default IndexPage
```

and modify `gatsby-config.js` file for get the correct title and description of the app

<?prettify linenums=1?>

```
siteMetadata: {
    title: `Pomodoro APP`,
    description: `A simple pomodoro app Created in Gatsby`,
    author: `@Lu1sLu1s`,
  },
```

At the end we re run our `gastby develop` script ans we'll see this

![pomodoro app](/img/deepinscreenshot_seleccionar-área_20190428163007.png)
