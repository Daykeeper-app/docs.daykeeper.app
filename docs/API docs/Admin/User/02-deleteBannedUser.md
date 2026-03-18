---
sidebar_position: 2
---

# Delete Banned User

### <span style={{color: 'darkred'}}>DELETE</span> `/admin/:username`

#### Description

Permanently deletes a banned user when the retention and ownership rules are satisfied.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Requires Admin Role: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `username` | `string` | Yes      | Username of the banned user. |

#### BODY

| Name      | Type     | Required | Description |
| --------- | -------- | -------- | ----------- |
| `message` | `string` | No       | Additional deletion message sent by email. |

### Success Response

```json
{
  "message": "Banned user deleted successfully"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 402  | User is not an admin |
| 403  | User is not banned or cannot be deleted yet |
| 404  | User or ban history not found |
| 500  | Server error |
