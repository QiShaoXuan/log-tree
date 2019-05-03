# console-log-tree

Log the tree of an array or object

## Example

#### Input

```js
[
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
```

#### Output

```html
├── photos
│   ├── summer
│   │   └── june
│   │       └── windsurf.jpg
│   └── winter
│       └── january
│           ├── ski.png
│           └── snowboard.jpg
└── doc
```

## Use

```bash
npm install console-log-tree
```

```js
const logTree = require('console-log-tree')

const tree = {...}

const treeStr = logTree.parse(tree)

console.log(treeStr)

// OR

logTree.log(tree)
```


