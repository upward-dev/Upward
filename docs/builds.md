# Building Docker Containers

If you're looking for a way to test or troubleshoot a build locally, you can use the `build-image.sh` script in the ops folder. You will need to provide an argument specifying whether you are building for the staging or production environment.

```sh
./ops/build-image.sh staging
```

The first time you build a container for either environment, the build will take longer. This is because it has to:

 * pull the base Docker image from Docker Hub
 * compress necessary files from your working directory and copy them to the Docker daemon
 * perform npm install inside the image

After the first build, with a few exceptions, builds should be able to take advantage of a cached layer that contains those steps. This should help keep the build runtime to a reasonable duration.