---
sidebar_position: 3
---

# Create Post

### <span style={{color: 'darkorange'}}>POST</span> `/post/create`

#### Description

Creates a new post with optional media, emotion metadata, and privacy. Uploaded media can leave the post in `pending` status if moderation has not finished yet.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### BODY (`multipart/form-data`)

| Name      | Type     | Required | Description |
| --------- | -------- | -------- | ----------- |
| `data`    | `string` | Yes      | Post text. |
| `files`   | `file[]` | No       | Up to 5 image or video files. |
| `privacy` | `string` | No       | `public`, `private`, or `close friends`. |
| `emotion` | `number` | No       | Integer from `0` to `100`. |

## Usage Example

```javascript
const formData = new FormData()
formData.append("data", "My first post here")
formData.append("privacy", "public")
formData.append("files", file)

await axios.post("https://api.daykeeper.app/post/create", formData, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "multipart/form-data",
  },
})
```

### Success Response

```json
{
  "message": "post created successfully",
  "post": {
    "_id": "66ca560de464036ce909f08a",
    "status": "public"
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Missing `data`, invalid privacy, or invalid emotion |
| 413  | Text too long |
| 401  | Missing or invalid access token |
| 500  | Server error |
