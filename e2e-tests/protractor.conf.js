exports.config = {
	allScriptsTimeout: 11000,
	
	specs: [
		'*.js'
	],
	
	chromeDriver: '/mnt/c/Selenium/chromedriver.exe',

	seleniumServerJar: '/mnt/c/Selenium/selenium-server-standalone-3.141.59.jar',

	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
			binary: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
		}
	},

	baseUrl: 'http://localhost:8000/',

	framework: 'jasmine',

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}
};
