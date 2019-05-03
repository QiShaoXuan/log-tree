# log-tree

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


