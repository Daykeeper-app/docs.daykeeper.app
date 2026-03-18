---
sidebar_position: 10
---

# Get Follow Requests

### <span style={{color: 'darkgreen'}}>GET</span> `/follow_requests`

#### Description

Returns a paginated list of pending follow requests received by the authenticated user.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### QUERY PARAMS

| Name          | Type     | Required | Description |
| ------------- | -------- | -------- | ----------- |
| `page`        | `number` | No       | Page number. Default is `1`. |
| `maxPageSize` | `number` | No       | Page size. Maximum is `20`. |

## Usage Example

```javascript
await axios.get("https://api.daykeeper.app/follow_requests", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "Follow Requests fetched successfully",
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
| 500  | Server error |
