---
sidebar_position: 1
---

# Create Event

### <span style={{color: 'darkorange'}}>POST</span> `/day/event`

#### Description

Creates a day event for the authenticated user.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### BODY

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `title` | `string` | Yes | Event title. |
| `description` | `string` | No | Optional event description. |
| `privacy` | `string` | No | `public`, `private`, or `close friends`. |
| `dateStart` | `string` | Yes | Start date/time as an ISO string. |
| `dateEnd` | `string` | Yes | End date/time as an ISO string. Must be after `dateStart`. |
| `placeId` | `string` | No | Optional place reference stored with the event. |

## Usage Example

```javascript
await axios.post(
  "https://api.daykeeper.app/day/event",
  {
    title: "Dinner with friends",
    description: "At the new place downtown",
    privacy: "close friends",
    dateStart: "2026-03-18T19:00:00.000Z",
    dateEnd: "2026-03-18T21:00:00.000Z"
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
  "message": "Day Event created successfully",
  "data": {
    "_id": "67d9c0d4cc9e4db02fca1001",
    "title": "Dinner with friends",
    "description": "At the new place downtown",
    "privacy": "close friends",
    "dateStart": "2026-03-18T15:00:00-04:00",
    "dateEnd": "2026-03-18T17:00:00-04:00"
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Missing or invalid required fields |
| 401  | Missing or invalid access token |
| 413  | Title or description too long |
| 500  | Server error |
