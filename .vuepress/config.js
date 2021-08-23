module.exports = {
  "title": "Young Web",
  "description": "Young's website",
  "dest": "build",
  "base": "/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "./public/rou.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "meta",
      {
        "property": "og:title",
        "content": "Young web"
      }
    ],
    [
      "meta",
      {
        "property": "og:url",
        "content": "https://Young-TW.github.io/public"
      }
    ],
    [
      "meta",
      {
        "property": "og:image",
        "content": ""
      }
    ],
    [
      "meta",
      {
        "property": "og:description",
        "content": "Young web"
      }
    ],
    [
      "meta",
      {
        "property": "og:site_name",
        "content": "Young web"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "noFoundPageByTencent": false,
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Github",
        "icon": "reco-github",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Young-TW",
            "icon": "reco-github"
          }
        ]
      },
      {
        "text": "Facebook",
        "link": "https://www.facebook.com/young20050727",
        "icon": "reco-facebook"
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "Github",
        "desc": "My Github URL",
        "email": "young20050727@gmail.com",
        "link": "https://github.com/Young-TW"
      },
      {
        "title": "NTIHS-club",
        "desc": "NTIHS club website",
        "avatar": "/NTIHS-logo.png",
        "link": "https://ntihs-it.github.io/"
      }
    ],
    "logo": "/rou-square.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Young",
    "authorAvatar": "/rou-square.jpg",
    "record": "xxxx",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}