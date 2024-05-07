# MySinglife common components

This package contains all common components being used in MySinglife customer portal.

This project was bootstrapped with [Vite](https://vitejs.dev/guide/).

# How to install

## Local

* Create file `C:\Users\<GitLab username>\.npmrc`
* Follow this article for setting up registry for msl-components: [Install module @mysinglife/msl-components](https://singlife.atlassian.net/wiki/spaces/WD/pages/29305899085/How+to+install+module+mysinglife+msl-components)
* Run `npm install @mysinglife/msl-components` in your project

## Pipeline

Add these 2 lines before `npm ci` or `npm install`
```
- echo "@mysinglife:registry=https://${CI_SERVER_HOST}/api/v4/projects/2672/packages/npm/">.npmrc
- echo "//${CI_SERVER_HOST}/api/v4/projects/2672/packages/npm/:_authToken=${CI_JOB_TOKEN}">.npmrc
```

Reference https://gitlab.tooling.prd.intranet.singlife.com/mysinglife/collections/collections-portal/-/blob/master/.gitlab-ci.yml#L25

# Coding convention

https://singlife.atlassian.net/wiki/spaces/WD/pages/29214016073/Frontend+coding+convention

# Available scripts

## Build package

```
npm run build
```

## Bump version

```
# Bumps the patch number like 0.0.0 -> 0.0.1
npm version patch
# Bumps the patch number like 0.0.x -> 0.1.0
npm version minor
# Bumps the patch number like 0.x.y -> 1.0.0
npm version major
```

## Preview package

```
npm pack --dry-run
```

## Run storybook

```
npm run storybook
```

## Run test

```
npm test
```
