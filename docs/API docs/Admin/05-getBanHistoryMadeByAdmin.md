---
sidebar_position: 5
---

# Get Ban History Made By Admin

### <span style={{color: 'darkgreen'}}>GET</span> `/admin/banHistoryByAdmin/:username`

#### Description

Returns paginated ban-history items created by a specific admin account.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Requires Admin Role: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `username` | `string` | Yes      | Admin username. |

#### QUERY PARAMS

| Name          | Type     | Required | Description |
| ------------- | -------- | -------- | ----------- |
| `type`        | `string` | No       | `post` or `user`. Defaults to `post`. |
| `page`        | `number` | No       | Page number. Default is `1`. |
| `maxPageSize` | `number` | No       | Page size. Maximum is `20`. |

### Success Response

```json
{
  "message": "banned posts by luciano fetched successfully",
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
| 404  | User not found |
| 500  | Server error |
