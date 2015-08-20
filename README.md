Playground to learn and experiment with the node webdriverio package 

# Running Selenium Hub and Node(s) Using Docker

1. start hub (clients connect to this)

		$ docker run -d -P --name selenium-hub -e GRID_TIMEOUT=10000 selenium/hub

2. start chrome node (hub delegates work to it)

		$ docker run -d --link selenium-hub:hub selenium/node-chrome

Get host and port for "selenium-hub" container and use them in your client.

![](http://static-content-01.s3-website-us-east-1.amazonaws.com//Kitematic_1B862C7B.png)

Example client config

```js
var options = {
	host: "192.168.99.100",
	port: 32768,
	desiredCapabilities: {
		browserName: 'chrome'
	}
};
```

see [`index.js`](index.js)
