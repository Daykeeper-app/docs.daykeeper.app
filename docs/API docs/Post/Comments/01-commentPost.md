---
sidebar_position: 1
---

# Comment Post

### <span style={{color: 'darkorange'}}>POST</span> `/post/:postId/comment`

#### Description

Creates a new top-level comment on a post.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `postId` | `string` | Yes      | MongoDB post ID. |

#### BODY

| Name      | Type     | Required | Description |
| --------- | -------- | -------- | ----------- |
| `comment` | `string` | Yes      | Comment text. |
| `gif`     | `string` | No       | Giphy GIF ID. |

## Usage Example

```javascript
await axios.post(
  "https://api.daykeeper.app/post/66cbbea31e854f3d7995c1f0/comment",
  {
    comment: "Nice post",
    gif: "EoVWPQErq3RPo6EZah"
  },
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
)
```

### Success Response

```json
{
  "message": "Comment created successfully",
  "post": {
    "_id": "66cbbea31e854f3d7995c1f0"
  },
  "comment": {
    "_id": "66ef265c8f073b81cb3b3900",
    "comment": "Nice post"
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Comment missing |
| 404  | Post not found |
| 413  | Comment too long |
| 500  | Server error |
