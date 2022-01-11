Bootstraped with:

```
$ npx create-react-app my-app --template typescript
$ cd my-app/
$ npx sb init --use-npm
$ npm add -D loki
```

Added `src/stories/DelayedComponent.jsx` and `src/stories/DelayedComponent.stories.jsx`.

Run `$ npm run storybook` and then `$ npm run loki test`. The examples look fine in Storybook itself, but Loki reports `Fetching stories Failed fetching stories because the server is down`.
