---
sidebar_position: 3
---

# Get Comment By ID

### <span style={{color: 'darkgreen'}}>GET</span> `/post/comment/:commentId`

#### Description

Returns a single comment by ID.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name        | Type     | Required | Description |
| ----------- | -------- | -------- | ----------- |
| `commentId` | `string` | Yes      | MongoDB comment ID. |

### Success Response

```json
{
  "message": "Comment fetched successfully",
  "data": {
    "_id": "66ef265c8f073b81cb3b3900",
    "postId": "66cbbea31e854f3d7995c1f0",
    "comment": "Nice post"
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Invalid comment ID or missing auth |
| 404  | Comment or post not found |
| 500  | Server error |
