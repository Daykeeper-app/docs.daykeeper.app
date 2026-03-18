---
sidebar_position: 15
---

# Report User

### <span style={{color: 'darkorange'}}>POST</span> `/:username/report`

#### Description

Reports a user for admin review.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `username` | `string` | Yes      | Target username. |

#### BODY

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `reason` | `string` | No       | Report reason. Maximum length is controlled by the API constants. |

## Usage Example

```javascript
await axios.post(
  "https://api.daykeeper.app/johndoe/report",
  { reason: "Harassment" },
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
  "message": "johndoe Reported Successfully",
  "reason": "Harassment"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 402  | Target user is banned |
| 404  | User not found |
| 409  | User already reported by the same reporter |
| 413  | Reason too long |
| 500  | Server error |
