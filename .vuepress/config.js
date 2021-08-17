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
        "content": "https://cdn.discordapp.com/avatars/458988300418416640/31d2892e691d2c983dc6851d8a94472d.png?size=4096"
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
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Young-TW",
            "icon": "reco-github"
          }
        ]
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
        "desc": "台南高工 社團網站",
        "avatar": "https://cdn.discordapp.com/avatars/434364344424464385/8697da40fb26dcd4b2455c2fdc00d719.png?size=4096",
        "link": "https://ntihs-it.github.io/"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Young",
    "authorAvatar": "https://cdn.discordapp.com/avatars/434364344424464385/8697da40fb26dcd4b2455c2fdc00d719.png?size=4096",
    "record": "xxxx",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}