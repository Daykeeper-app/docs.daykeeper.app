---
sidebar_position: 2
---

# Get Notifications Without Media Review

### <span style={{color: 'darkgreen'}}>GET</span> `/notifications/without-media-review`

#### Description

Returns the authenticated user's notifications excluding media-review items.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### QUERY PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `page` | `number` | No | Page number. Defaults to `1`. |
| `maxPageSize` | `number` | No | Page size. The API caps it at the shared max page size. |
| `read` | `boolean` | No | Optional filter for read or unread notifications. |

## Usage Example

```javascript
await axios.get(
  "https://api.daykeeper.app/notifications/without-media-review?page=1",
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
)
```

### Success Response

```json
{
  "message": "notifications fetched successfully",
  "data": [],
  "page": 1,
  "totalPages": 0,
  "unreadCount": 4,
  "hasUnread": true
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 500  | Server error |
