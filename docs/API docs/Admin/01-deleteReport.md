---
sidebar_position: 1
---

# Delete Report

### <span style={{color: 'darkred'}}>DELETE</span> `/admin/report/:reportId`

#### Description

Deletes a report by its report ID.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Requires Admin Role: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `reportId` | `string` | Yes      | MongoDB report ID. |

## Usage Example

```javascript
await axios.delete("https://api.daykeeper.app/admin/report/66f1b247998df28960dbaa63", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "Report deleted successfully"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 402  | User is not an admin |
| 404  | Report not found |
| 500  | Server error |
