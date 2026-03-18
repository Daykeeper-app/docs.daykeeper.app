---
sidebar_position: 6
---

# Respond Follow Request

### <span style={{color: 'darkorange'}}>POST</span> `/:username/respond_follow`

#### Description

Accepts or denies a pending follow request. This route only works for private accounts.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `username` | `string` | Yes      | Username of the requester. |

#### BODY

| Name       | Type      | Required | Description |
| ---------- | --------- | -------- | ----------- |
| `response` | `boolean` | No       | `true` accepts the request. `false` or omission denies it. |

## Usage Example

```javascript
await axios.post(
  "https://api.daykeeper.app/johndoe/respond_follow",
  { response: true },
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
)
```

### Success Response

```json
{ "message": "You accepted johndoe's request" }
```

or

```json
{ "message": "You denied johndoe's request" }
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 403  | Account is not private |
| 404  | User not found or no pending request exists |
| 500  | Server error |
