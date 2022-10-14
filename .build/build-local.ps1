$containerName = "homepage:devbuild"

Write-Host "Creating docker image..."
docker docker build -t $containerName


Write-Host "Launching docker container..."
docker run docker run -d --publish 80:3000 $containerName