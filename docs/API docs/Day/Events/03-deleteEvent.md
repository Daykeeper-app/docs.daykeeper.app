---
sidebar_position: 3
---

# Delete Event

### <span style={{color: 'darkred'}}>DELETE</span> `/day/event/:eventId`

#### Description

Soft-deletes an event by ID.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `eventId` | `string` | Yes | MongoDB event ID. |

## Usage Example

```javascript
await axios.delete(
  "https://api.daykeeper.app/day/event/67d9c0d4cc9e4db02fca1001",
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
  "message": "Day Event deleted successfully"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Invalid event ID |
| 401  | Missing or invalid access token |
| 404  | Event not found |
| 500  | Server error |
