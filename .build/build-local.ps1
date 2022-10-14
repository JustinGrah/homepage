$containerName = "homepage:devbuild"

# Creating the docker image with the name "hompage:devbuild"
Write-Host "Creating docker image..."
try {
    docker docker build -t $containerName
} catch {
    Write-Error "Error in building docker container"
    exit
}

# Launching the docker container
Write-Host "Launching docker container..."
try {
    docker run docker run -d --publish 80:3000 $containerName
}

