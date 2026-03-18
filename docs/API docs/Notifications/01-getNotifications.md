---
sidebar_position: 1
---

# Get Notifications

### <span style={{color: 'darkgreen'}}>GET</span> `/notifications`

#### Description

Returns the authenticated user's notifications, including the unread counters.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### QUERY PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `page` | `number` | No | Page number. Defaults to `1`. |
| `maxPageSize` | `number` | No | Page size. The API caps it at the shared max page size. |
| `read` | `boolean` | No | Optional filter for read or unread notifications. Accepts common truthy and falsy strings. |

## Usage Example

```javascript
await axios.get("https://api.daykeeper.app/notifications?read=false", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "notifications fetched successfully",
  "data": [
    {
      "_id": "67d9d8abcc9e4db02fca3001",
      "type": "post_like",
      "seen": false,
      "route": "/post/67d9c0d4cc9e4db02fca1001"
    }
  ],
  "page": 1,
  "totalPages": 1,
  "unreadCount": 4,
  "hasUnread": true
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 500  | Server error |
