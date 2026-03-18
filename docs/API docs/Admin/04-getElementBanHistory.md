---
sidebar_position: 4
---

# Get Element Ban History

### <span style={{color: 'darkgreen'}}>GET</span> `/admin/banHistory/:elementId`

#### Description

Returns paginated ban-history records for a specific user or post.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Requires Admin Role: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name        | Type     | Required | Description |
| ----------- | -------- | -------- | ----------- |
| `elementId` | `string` | Yes      | MongoDB user or post ID. |

#### QUERY PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `page`     | `number` | No       | Page number. Default is `1`. |
| `pageSize` | `number` | No       | Page size. Maximum is `20`. |

### Success Response

```json
{
  "message": "66c4ac9f1cfe0795199a733e Ban History fetched successfully",
  "data": [],
  "page": 1,
  "pageSize": 0,
  "maxPageSize": 20,
  "totalPages": 0,
  "totalCount": 0,
  "element": null
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Invalid element ID or missing auth |
| 402  | User is not an admin |
| 500  | Server error |
