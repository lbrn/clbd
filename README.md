# CLBD website

[![Netlify Status](https://api.netlify.com/api/v1/badges/0ab31ad8-3dbd-4498-ab16-735112a570d5/deploy-status)](https://app.netlify.com/sites/clbd/deploys)

## deployment steps:

1. yarn install
2. yarn build
3. deploy build folder

## local dev steps:

1. yarn install
2. yarn start

### Key dependencies

- typescript: Typesafe JS(https://www.typescriptlang.org/)
- react: ui library/framework(https://reactjs.org/)
- styling: material ui(https://material-ui.com/)
- router: Reach Router(https://reach.tech/router/)
- moment: time handling(https://momentjs.com/)


### Maintenance:

All data is in the /src/data directory\n
Custom types are in the /types directory\n

To update any section, update the info in the data folder
- people groups: /data/people.ts
- articles: /data/articles.ts
- individual people: /data/peopleData.ts
- seminars: /data/seminars.ts

Because of typescript, all data has required formats.  You can view the format for any given file in the types directory.

