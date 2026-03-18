---
sidebar_position: 6
---

# Like Comment

### <span style={{color: 'darkorange'}}>POST</span> `/post/comment/:commentId/like`

#### Description

Toggles the authenticated user's like on a comment.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name        | Type     | Required | Description |
| ----------- | -------- | -------- | ----------- |
| `commentId` | `string` | Yes      | MongoDB comment ID. |

### Success Response

```json
{
  "message": "The like was added to the comment",
  "post": {
    "_id": "66cbbea31e854f3d7995c1f0"
  }
}
```

or

```json
{
  "message": "The like was removed from the comment",
  "post": {
    "_id": "66cbbea31e854f3d7995c1f0"
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 404  | Comment or post not found |
| 401  | Missing or invalid access token |
| 500  | Server error |
