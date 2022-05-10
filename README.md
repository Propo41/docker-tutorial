# Docker-tutorial

To create the docker, go to the root dir and type:

```powershell
docker-compose up
```

To tear it down, type:

```powershell
docker-compose down
```

## Issues Faced

1. A great deal of time was spent on this [error](https://github.com/kelektiv/node.bcrypt.js/issues/824). The issue was occuring due to the package `bcrypt` since it requires peer dependencies which are not installed in alpine by default. Solution was to change from `bcrypt` to `bcryptjs` which had no dependencies whatsoever.
2. Mounted file changes was not causing a restart in nodemon. This seems to be an issue with `chokidar` in networked environments such as containers. To fix this, use --legacy-watch flag when running nodemon: ```nodemon -L server.js```
