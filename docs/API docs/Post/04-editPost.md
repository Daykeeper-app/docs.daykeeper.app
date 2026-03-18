---
sidebar_position: 4
---

# Edit Post

### <span style={{color: 'darkblue'}}>PUT</span> `/post/:postId`

#### Description

Updates a post owned by the authenticated user. You can change text, privacy, emotion, and attached media.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `postId` | `string` | Yes      | MongoDB post ID. |

#### BODY (`multipart/form-data`)

| Name           | Type       | Required | Description |
| -------------- | ---------- | -------- | ----------- |
| `data`         | `string`   | No       | New post text. |
| `privacy`      | `string`   | No       | `public`, `private`, `close friends`, or `close_friends`. |
| `emotion`      | `number`   | No       | Integer from `0` to `100`. |
| `files`        | `file[]`   | No       | New media to add, up to the route upload limit. |
| `keepMediaIds` | `string[]` | No       | IDs of media that should remain attached to the post. |

## Usage Example

```javascript
const formData = new FormData()
formData.append("data", "Edited text")
formData.append("keepMediaIds", JSON.stringify(["66ca560de464036ce909f08b"]))

await axios.put("https://api.daykeeper.app/post/66ca560de464036ce909f08a", formData, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "multipart/form-data",
  },
})
```

### Success Response

```json
{
  "message": "post updated successfully"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Invalid data, privacy, or emotion |
| 401  | Missing or invalid access token |
| 404  | Post not found |
| 413  | Text too long |
| 500  | Server error |
