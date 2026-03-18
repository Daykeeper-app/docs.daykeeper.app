---
sidebar_position: 2
---

# Get Post Comments

### <span style={{color: 'darkgreen'}}>GET</span> `/post/:postId/comments`

#### Description

Returns a paginated list of top-level comments for a post.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `postId` | `string` | Yes      | MongoDB post ID. |

#### QUERY PARAMS

| Name          | Type     | Required | Description |
| ------------- | -------- | -------- | ----------- |
| `page`        | `number` | No       | Page number. Default is `1`. |
| `maxPageSize` | `number` | No       | Page size. Maximum is `20`. |

### Success Response

```json
{
  "message": "Post Comments fetched successfully",
  "data": [
    {
      "_id": "66ef265c8f073b81cb3b3900",
      "comment": "Nice post",
      "likesCount": 1,
      "repliesCount": 2,
      "userLiked": false
    }
  ],
  "page": 1,
  "pageSize": 1,
  "maxPageSize": 20,
  "totalPages": 1,
  "totalCount": 1
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Invalid post ID or missing auth |
| 404  | Post not found |
| 500  | Server error |
