---
sidebar_position: 2
---

# Delete Banned Post

### <span style={{color: 'darkred'}}>DELETE</span> `/admin/post/:postId`

#### Description

Permanently deletes a banned post when the retention and admin-ownership rules are satisfied.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Requires Admin Role: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `postId` | `string` | Yes      | MongoDB post ID. |

#### BODY

| Name      | Type     | Required | Description |
| --------- | -------- | -------- | ----------- |
| `message` | `string` | No       | Additional deletion message sent by email. |

### Success Response

```json
{
  "message": "Post deleted successfully"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 402  | User is not an admin |
| 403  | Post is not banned or cannot be deleted yet |
| 404  | Post or ban history not found |
| 413  | Message too long |
| 500  | Server error |
