---
sidebar_position: 1
---

# Get Device Sessions

### <span style={{color: 'darkgreen'}}>GET</span> `/sessions`

#### Description

Returns the authenticated user's active refresh-token sessions.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### QUERY PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `page` | `number` | No | Page number. Defaults to `1`. |
| `maxPageSize` | `number` | No | Page size. The API caps it at the shared max page size. |

## Usage Example

```javascript
await axios.get("https://api.daykeeper.app/sessions?page=1", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "sessions fetched successfully",
  "data": [
    {
      "id": "67d9d1f6cc9e4db02fca2001",
      "deviceId": "web",
      "ip": "127.0.0.1",
      "userAgent": "Mozilla/5.0",
      "status": "active"
    }
  ],
  "page": 1,
  "pageSize": 1,
  "totalPages": 1,
  "totalCount": 1
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 500  | Server error |
