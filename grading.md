## MVP
- [x] componentDidMount to fetch user data/followers
- [x] Display Data
- [x] style user card

## Stretch
- [ ] Form to search github
- [ ] github contribution graph

------------
score: 2
------------

Andrew - You have both package lock and yarn lock files.  Make sure to delete one of them.  If you're bootstrapping the react app, you can use the flag `--use-npm` to not install the yarn lock and only have package.lock file.  Also, I see that you're using RFC for the individual card and for the followers.  It would have been nice, if you converted them into class components for this project.  As a whole though, React is moving away from class components and into functional components.

Andy - Good job using all class components in the project.  I would have liked to see more styling in the app though.

Yasir - good job styling the project.  Look into Material UI's `makeStyles` or useStyles depending on if it's a RFC or RCC.  In addition, you have both package lock and yarn lock files.  Make sure to delete one of them.  If you're bootstrapping the react app, you can use the flag `create-react-app someName --use-npm` to not install the yarn lock and only have package.lock file.

cobrettie - no commits

kemberly - no commits for pt8.  Only previous project

tim - mvp

### Questions to ask
If I wanted to implement the stretch for searching users, how would it be implemented?