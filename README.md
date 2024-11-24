


npm install, to install dependencies
npm run cy:open, to run test
choose e2e test, 
select a feature you want to run


assumptions
1. There is a single game Book of Dead. If there are a new games appaear with similar title, such as Book of Dead Part 2, it will show
two games at least. We need to decide which game to choose to play, it might be always first, or we expect to play games only if
there is only one game in the search result

I didn't work with BDD before, I had to analyze and using examples I now have up and running service.

Encountered difficulties,
When searching games, the result is not immediate, I had to add interceptor, adding some delay untill the client gets response
That was not enough, the next command starts immediately and it gets old dom, still not refrehsed, so I had to add 1 second wait 
to delay next command. It was added in `HomePage.search` method

TODO
How to ensure game loaded succesfully? Maybe intercept requests
