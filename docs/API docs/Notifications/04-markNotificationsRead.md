---
sidebar_position: 4
---

# Mark Notifications Read

### <span style={{color: 'goldenrod'}}>PATCH</span> `/notifications/read`

#### Description

Marks selected notifications as read, or marks every unread notification as read.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### BODY

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `ids` | `string[]` | No | Notification IDs to mark as read. Required unless `all` is `true`. |
| `all` | `boolean` | No | When `true`, marks every unread notification as read. |

## Usage Example

```javascript
await axios.patch(
  "https://api.daykeeper.app/notifications/read",
  {
    ids: ["67d9d8abcc9e4db02fca3001"]
  },
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
  "message": "notifications updated successfully",
  "matched": 1,
  "modified": 1,
  "unreadCount": 3,
  "hasUnread": true
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | `ids` missing when `all` is not `true` |
| 401  | Missing or invalid access token |
| 500  | Server error |
