module.exports = {
  "title": "Young Web",
  "description": "www",
  "dest": "root",
  "base":"/Young-Web/docs/",
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
    ]
  ],
  "theme": "reco",
  "themeConfig": {
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
        "text": "Contact",
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
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
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
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "NTIHS-club",
        "desc": "台南高工 社團",
        "avatar": "https://cdn.discordapp.com/avatars/434364344424464385/8697da40fb26dcd4b2455c2fdc00d719.png?size=4096",
        "link": "https://github.com/Young-TW/PTIVS-club"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "young",
    "authorAvatar": "https://cdn.discordapp.com/avatars/434364344424464385/8697da40fb26dcd4b2455c2fdc00d719.png?size=4096",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}