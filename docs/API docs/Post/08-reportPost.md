---
sidebar_position: 8
---

# Report Post

### <span style={{color: 'darkorange'}}>POST</span> `/post/:postId/report`

#### Description

Reports a post for moderator review.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `postId` | `string` | Yes      | MongoDB post ID. |

#### BODY

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `reason` | `string` | No       | Report reason. |

## Usage Example

```javascript
await axios.post(
  "https://api.daykeeper.app/post/66cbbea31e854f3d7995c1f0/report",
  { reason: "Spam" },
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
  "message": "Post reported successfully",
  "reason": "Spam"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 404  | Post not found |
| 409  | Already reported by the same user |
| 413  | Reason too long |
| 500  | Server error |
