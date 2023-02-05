run:
	docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:8081 -e CHOKIDAR_USEPOLLING=true todolist:dev
stop:
	docker stop todolist
clean:
	docker container prune