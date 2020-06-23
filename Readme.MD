# ReactJS + Parcel + Docker
`Include Hot-reloading`

A template ReactJS app with [Parcel Bundler](https://parceljs.org)
Running on Docker.

**What's inside?**

* `parcel-bundler`
* `react`
* `react-dom`
* `babel-core`
* `babel-preset-react`
* `babel-preset-env`
* `node-scss`

## Getting started

Clone and install deps

```
git clone here
cd reactjs-parcel-docker-sww
docker-compose build
docker-compose up -d 
docker exec -it react-parcel-sww ash
npm run start
```

Then open `http://localhost:1236` and edit `index.js` and press save. Parcel will automagically hot reload you files whenever you make changes.