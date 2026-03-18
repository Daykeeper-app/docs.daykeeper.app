---
sidebar_position: 6
---

# Like Post

### <span style={{color: 'darkorange'}}>POST</span> `/post/:postId/like`

#### Description

Toggles the authenticated user's like on a post.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `postId` | `string` | Yes      | MongoDB post ID. |

## Usage Example

```javascript
await axios.post(
  "https://api.daykeeper.app/post/66cbbea31e854f3d7995c1f0/like",
  {},
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
  "message": "Post liked successfully",
  "post": {
    "_id": "66cbbea31e854f3d7995c1f0"
  }
}
```

or

```json
{
  "message": "Post unliked successfully",
  "post": {
    "_id": "66cbbea31e854f3d7995c1f0"
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 404  | Post not found |
| 500  | Server error |
