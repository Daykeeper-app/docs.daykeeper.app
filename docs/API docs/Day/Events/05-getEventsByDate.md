---
sidebar_position: 5
---

# Get Events By Date

### <span style={{color: 'darkgreen'}}>GET</span> `/day/event/:username/:date`

#### Description

Returns a paginated list of a user's events for a specific day.

The `date` route param expects `DD-MM-YYYY`. If it is invalid, the API falls back to the viewer's current day and returns `usedDate` as `null`.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `username` | `string` | Yes | Target username. |
| `date` | `string` | Yes | Day in `DD-MM-YYYY` format. |

#### QUERY PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `page` | `number` | No | Page number. Defaults to `1`. |
| `maxPageSize` | `number` | No | Page size. The API caps it at the shared max page size. |
| `order` | `string` | No | Optional sort mode. Defaults to `relevant`. |

## Usage Example

```javascript
await axios.get(
  "https://api.daykeeper.app/day/event/johndoe/18-03-2026?page=1&maxPageSize=10",
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
  "message": "events fetched successfully",
  "usedDate": "18-03-2026",
  "page": 1,
  "pages": 1,
  "data": [
    {
      "_id": "67d9c0d4cc9e4db02fca1001",
      "title": "Dinner with friends"
    }
  ]
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 404  | User not found |
| 500  | Server error |
