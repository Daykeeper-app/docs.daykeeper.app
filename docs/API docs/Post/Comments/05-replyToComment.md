---
sidebar_position: 5
---

# Reply To Comment

### <span style={{color: 'darkorange'}}>POST</span> `/post/comment/:commentId/reply`

#### Description

Creates a reply to an existing comment. Internally this uses the same comment creation flow as post comments, but attaches the new comment to a parent comment.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name        | Type     | Required | Description |
| ----------- | -------- | -------- | ----------- |
| `commentId` | `string` | Yes      | Parent comment ID. |

#### BODY

| Name      | Type     | Required | Description |
| --------- | -------- | -------- | ----------- |
| `comment` | `string` | Yes      | Reply text. |
| `gif`     | `string` | No       | Giphy GIF ID. |

### Success Response

```json
{
  "message": "Comment created successfully",
  "post": {
    "_id": "66cbbea31e854f3d7995c1f0"
  },
  "comment": {
    "_id": "66ef265c8f073b81cb3b3901",
    "parentCommentId": "66ef265c8f073b81cb3b3900"
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Comment missing |
| 401  | Invalid comment ID |
| 404  | Comment or post not found |
| 413  | Comment too long |
| 500  | Server error |
