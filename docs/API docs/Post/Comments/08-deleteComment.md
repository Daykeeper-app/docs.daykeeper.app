---
sidebar_position: 8
---

# Delete Comment

### <span style={{color: 'darkred'}}>DELETE</span> `/post/comment/:commentId`

#### Description

Soft-deletes a comment. A user can delete their own comment, or the post owner can delete it when the post owner's account is private.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name        | Type     | Required | Description |
| ----------- | -------- | -------- | ----------- |
| `commentId` | `string` | Yes      | MongoDB comment ID. |

### Success Response

```json
{
  "message": "Comment deleted successfully",
  "post": {
    "_id": "66cbbea31e854f3d7995c1f0"
  },
  "comment": {
    "_id": "66ef265c8f073b81cb3b3900",
    "status": "deleted"
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 403  | Not allowed to delete this comment |
| 404  | Comment or post not found |
| 401  | Missing or invalid access token |
| 500  | Server error |
