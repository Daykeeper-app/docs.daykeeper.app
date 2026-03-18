---
sidebar_position: 2
---

# Get Reported Elements

### <span style={{color: 'darkgreen'}}>GET</span> `/admin/reports`

#### Description

Returns paginated reported elements for moderation review.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Requires Admin Role: <span style={{color: 'green'}}>true</span>

#### QUERY PARAMS

| Name          | Type     | Required | Description |
| ------------- | -------- | -------- | ----------- |
| `type`        | `string` | No       | `post` or `user`. Defaults to `post`. |
| `page`        | `number` | No       | Page number. Default is `1`. |
| `maxPageSize` | `number` | No       | Page size. Maximum is `20`. |

### Success Response

```json
{
  "message": "reported posts fetched successfully",
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
| 401  | Missing or invalid access token |
| 402  | User is not an admin |
| 500  | Server error |
