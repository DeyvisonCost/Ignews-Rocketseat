# Ignews-Rocketseat

<h1 align="center">

<img src="https://raw.githubusercontent.com/khalleb/ignews/main/public/images/avatar.svg" alt="rocketshoes" width="100px"/>

</h1>

<p align="center">
  <strong> IGNEWS 🌎 </strong>
  
  <br>
  <br>
  <a href="https://www.linkedin.com/in/deyvisonccosta/">
    <img alt="Made by Khalleb" src="https://img.shields.io/badge/made%20by-DeyvisonCosta-%237519C1">
  </a>
   <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>
   <img alt="" src="https://img.shields.io/github/repo-size/DeyvisonCost/Ignews-Rocketseat" />
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/DeyvisonCost/Ignews-Rocketseat" />
  <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/DeyvisonCost/Ignews-Rocketseat" />
  <img alt="Github License" src="https://img.shields.io/github/license/DeyvisonCost/Ignews-Rocketseat" />
  <img alt="GitHub Package.json Version" src="https://img.shields.io/github/package-json/v/DeyvisonCost/Ignews-Rocketseat" />
  <hr>

![ignews](https://user-images.githubusercontent.com/80866334/164944267-46906726-fade-4c6a-9943-71dfe6d141a3.png)
</p>

![newpage](https://user-images.githubusercontent.com/80866334/164946128-8ec57893-28b7-445d-a577-aa9282706013.jpg)

---

## Features

This app features all the latest tools and practices in web development!

- 🎓 [Typescript](https://www.typescriptlang.org/) — A superset for JavaScript
- ⚛️ [React Js](https://reactjs.org/) — A JavaScript library for building user interfaces
- ✡️ [Next.js](https://nextjs.org/) — A serverless framework for React JS
- 💹 [Node](https://nodejs.org/en/) — A web framework for Node Js
- 📄 [FaunaDB](https://fauna.com/) — A specific database for serverless applications 
- 💰 [Stripe](https://stripe.com/) — An online payments api
- ✨ [Prismic CMS](https://prismic.io/) — A content management system


## Getting started

1. Clone this repo using `git clone https://github.com/DeyvisonCost/Ignews-Rocketseat`
2. Move yourself to the appropriate directory: `cd Ignews-Rocketseat`<br />
3. Run `yarn` to install dependencies<br />

<br>



## configure the keys to start the server


<br>

1. Create a `.env.local` file and add the url conections:

#### STRIPE
STRIPE_API_KEY= **key** <br>
NEXT_PUBLIC_STRIPE_PUBLIC_KEY= **key** <br>
STRIPE_WEBHOOK_SECRET=  **key** <br>
STRIPE_SUCCESS_URL=http://localhost:3000/posts <br>
STRIPE_CANCEL_URL=http://localhost:3000/ 

#

#### GITHUB
GITHUB_CLIENT_ID= **key** <br>
GITHUB_CLIENT_SECRET= **key** <br>

#

#### FAUNADB
FAUNADB_KEY= **key**

#

#### PRISMIC CMS
PRISMIC_ENDPOINT= **key** <br>
PRISMIC_ACCESS_TOKEN= **key** <br>

#

2. Run `yarn dev` to start the server


## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

