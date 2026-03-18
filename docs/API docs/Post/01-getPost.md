---
sidebar_position: 1
---

# Get Post

### <span style={{color: 'green'}}>GET</span> `/post/:postId`

#### Description

Fetches a single post by its MongoDB post ID. The response respects the post owner's visibility rules because it is built through the same visibility pipeline used elsewhere in the API.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `postId` | `string` | Yes      | MongoDB post ID. |

## Usage Example

```javascript
await axios.get("https://api.daykeeper.app/post/66cbbea31e854f3d7995c1f0", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "post fetched successfully",
  "data": {
    "_id": "66cbbea31e854f3d7995c1f0",
    "data": "My first post here",
    "privacy": "public",
    "status": "public"
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 401  | Invalid post ID |
| 404  | Post not found |
| 500  | Server error |
