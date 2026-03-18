---
sidebar_position: 4
---

# Get Comment Replies

### <span style={{color: 'darkgreen'}}>GET</span> `/post/comment/:commentId/replies`

#### Description

Returns a paginated list of replies for a comment.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name        | Type     | Required | Description |
| ----------- | -------- | -------- | ----------- |
| `commentId` | `string` | Yes      | MongoDB parent comment ID. |

#### QUERY PARAMS

| Name          | Type     | Required | Description |
| ------------- | -------- | -------- | ----------- |
| `page`        | `number` | No       | Page number. Default is `1`. |
| `maxPageSize` | `number` | No       | Page size. Maximum is `20`. |

### Success Response

```json
{
  "message": "Comment Replies fetched successfully",
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
| 401  | Invalid comment ID or missing auth |
| 404  | Comment or post not found |
| 500  | Server error |
