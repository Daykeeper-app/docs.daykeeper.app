---
sidebar_position: 2
---

# Get Rekognition Job Status

### <span style={{color: 'darkgreen'}}>GET</span> `/webhooks/rekognition/status/:jobId`

#### Description

Returns moderation job status details for a Rekognition job ID.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `jobId` | `string` | Yes | Rekognition job ID. |

## Usage Example

```javascript
await axios.get(
  "https://api.daykeeper.app/webhooks/rekognition/status/1234567890abcdef",
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
  "message": "Job Status fetched successfully",
  "data": {
    "status": "SUCCEEDED",
    "labels": []
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 500  | Server error |
