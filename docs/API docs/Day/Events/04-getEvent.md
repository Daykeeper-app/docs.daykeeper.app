---
sidebar_position: 4
---

# Get Event

### <span style={{color: 'darkgreen'}}>GET</span> `/day/event/:eventId`

#### Description

Returns a single event if the authenticated viewer is allowed to access it.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `eventId` | `string` | Yes | MongoDB event ID. |

## Usage Example

```javascript
await axios.get(
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
  "message": "event fetched successfully",
  "data": {
    "_id": "67d9c0d4cc9e4db02fca1001",
    "title": "Dinner with friends",
    "privacy": "close friends"
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Invalid event ID |
| 401  | Missing or invalid access token |
| 404  | Event not found or not visible to the viewer |
| 500  | Server error |
