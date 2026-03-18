---
sidebar_position: 3
---

# Get Banned Elements

### <span style={{color: 'darkgreen'}}>GET</span> `/admin/bans`

#### Description

Returns paginated banned elements for the selected entity type.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Requires Admin Role: <span style={{color: 'green'}}>true</span>

#### QUERY PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `type`     | `string` | No       | `post` or `user`. Defaults to `post`. |
| `page`     | `number` | No       | Page number. Default is `1`. |
| `pageSize` | `number` | No       | Page size. Maximum is `20`. |

### Success Response

```json
{
  "message": "banned posts fetched successfully",
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
