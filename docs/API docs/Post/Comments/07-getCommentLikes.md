---
sidebar_position: 7
---

# Get Comment Likes

### <span style={{color: 'darkgreen'}}>GET</span> `/post/comment/:commentId/likes`

#### Description

Returns a paginated list of users who liked a comment.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name        | Type     | Required | Description |
| ----------- | -------- | -------- | ----------- |
| `commentId` | `string` | Yes      | MongoDB comment ID. |

#### QUERY PARAMS

| Name          | Type     | Required | Description |
| ------------- | -------- | -------- | ----------- |
| `page`        | `number` | No       | Page number. Default is `1`. |
| `maxPageSize` | `number` | No       | Page size. Maximum is `20`. |

### Success Response

```json
{
  "message": "Comment Likes fetched successfully",
  "commentId": "66ef265c8f073b81cb3b3900",
  "data": [],
  "page": 1,
  "pageSize": 0,
  "maxPageSize": 20,
  "totalPages": 0,
  "totalCount": 0
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 404  | Comment or post not found |
| 401  | Missing or invalid access token |
| 500  | Server error |
