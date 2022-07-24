### Setup && Install
run the following commands

```yarn prepare:install```

```cp .env.template .env```

set your personal API key for https://newsapi.org inside the `.env` file

### To test deeplinking: 
Note: Since the API doesn't include a unique id in the article data, i'm using a unique portion of the __article url__ data an identifier.

to run the app with deeplinking, deeplink url must start with `masulnews://`, to scroll to a spefic article, url must be similar to `masulnews://article/article-unique-portion-of-url`

#### example: 
- to automatically scroll to article with url => https://www.cnn.com/2022/07/24/media/nope-box-office-jordan-peele/index.html
- the deeplink url should be `masulnews://article/nope-box-office-jordan-peele`
- the news report article used in this test has to be included in the list of news that the can be fetched by the api endpoint `/v2/top-headlines`