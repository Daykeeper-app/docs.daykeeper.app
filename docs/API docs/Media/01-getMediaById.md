---
sidebar_position: 1
---

# Get Media By ID

### <span style={{color: 'darkgreen'}}>GET</span> `/media/:mediaId`

#### Description

Returns a public media document if the authenticated viewer is allowed to access the resource it belongs to.

If the media belongs to a post, the API also checks post visibility against the current viewer.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `mediaId` | `string` | Yes | Media ID. |

## Usage Example

```javascript
await axios.get(
  "https://api.daykeeper.app/media/67d9dc91cc9e4db02fca3501",
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
  "message": "Media fetched successfully",
  "media": {
    "_id": "67d9dc91cc9e4db02fca3501",
    "status": "public"
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 404  | Media not found or not visible to the viewer |
| 413  | Media ID too long |
| 500  | Server error |
