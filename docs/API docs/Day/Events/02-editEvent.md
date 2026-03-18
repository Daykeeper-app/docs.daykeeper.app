---
sidebar_position: 2
---

# Edit Event

### <span style={{color: 'goldenrod'}}>PUT</span> `/day/event/:eventId`

#### Description

Updates an event owned by the authenticated user.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `eventId` | `string` | Yes | MongoDB event ID. |

#### BODY

At least one field must be provided.

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `title` | `string` | No | New title. |
| `description` | `string` | No | New description. |
| `privacy` | `string` | No | `public`, `private`, or `close friends`. |
| `dateStart` | `string` | No | New ISO start date/time. |
| `dateEnd` | `string` | No | New ISO end date/time. |

## Usage Example

```javascript
await axios.put(
  "https://api.daykeeper.app/day/event/67d9c0d4cc9e4db02fca1001",
  {
    title: "Dinner and drinks",
    dateEnd: "2026-03-18T22:00:00.000Z"
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
  "message": "Day Event updated successfully",
  "event": {
    "_id": "67d9c0d4cc9e4db02fca1001",
    "title": "Dinner and drinks"
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Invalid event ID or no fields to update |
| 401  | Missing or invalid access token |
| 404  | Event not found |
| 500  | Server error |
