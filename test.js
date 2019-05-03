const tree = {
  name:'tree',
  children:[
    {
      name: 'first',
      children: [
        {
          name: 'first-first',
        },
        {
          name: 'first-second',
          children: [
            {
              name: 'first-second-first',
              children: [
                {
                  name: 'first-second-first-first'
                }
              ]
            }
          ]
        },
        {
          name: 'first-third',
          children: [
            {
              name: 'first-third-first'
            }, {
              name: 'first-third-second'
            }, {
              name: 'first-third-third'
            }
          ]
        }
      ]
    }
  ]
}

const tree2 = [
  {
    "name": "photos",
    "children": [
      {
        "name": "summer",
        "children": [
          {
            "name": "june",
            "children": [
              {
                "name": "windsurf.jpg",
              }
            ]
          }
        ]
      },
      {
        "name": "winter",
        "children": [
          {
            "name": "january",
            "children": [
              {
                "name": "ski.png",
              },
              {
                "name": "snowboard.jpg",
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name":'doc'
  }
]

const logTree = require('./dist/index')

logTree.log(tree)

console.log('----------')

const parseTree = logTree.parse(tree2)
console.log(parseTree)

