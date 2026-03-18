---
sidebar_position: 2
---

# Get User Posts

### <span style={{color: 'green'}}>GET</span> `/:username/posts`

#### Description

Returns a paginated list of posts for a specific user. This route lives under the user router, but it remains part of the post domain.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `username` | `string` | Yes      | Username or user ID. |

#### QUERY PARAMS

| Name          | Type     | Required | Description |
| ------------- | -------- | -------- | ----------- |
| `page`        | `number` | No       | Page number. Default is `1`. |
| `maxPageSize` | `number` | No       | Page size. Maximum is `20`. |
| `order`       | `string` | No       | `recent` or `relevant`. |

## Usage Example

```javascript
await axios.get("https://api.daykeeper.app/johndoe/posts?page=1", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "user's posts fetched successfully",
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
| 402  | Blocked relationship |
| 404  | User not found |
| 409  | Private account route not accessible to viewer |
| 500  | Server error |
