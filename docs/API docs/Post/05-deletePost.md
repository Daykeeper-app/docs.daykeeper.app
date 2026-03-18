---
sidebar_position: 5
---

# Delete Post

### <span style={{color: 'darkred'}}>DELETE</span> `/post/:postId`

#### Description

Soft-deletes a post owned by the authenticated user and triggers cleanup for likes, comments, reports, and media links.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `postId` | `string` | Yes      | MongoDB post ID. |

## Usage Example

```javascript
await axios.delete("https://api.daykeeper.app/post/66ca560de464036ce909f08a", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "Post deleted successfully"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 401  | Invalid post ID |
| 404  | Post not found or not owned by the user |
| 500  | Server error |
