---
sidebar_position: 1
---

# Welcome to DayKeeper

DayKeeper is an open-source social network with a journal-style experience. This documentation covers the DayKeeper API endpoints used for authentication, feed discovery, posting, user relationships, sessions, notifications, media access, moderation, analytics, and day-based resources.

## What you will find here

- Setup instructions for running the API locally.
- Endpoint references grouped by feature area.
- Request parameter tables and example payloads.
- Response and error examples for the main API flows.

## Main sections

- [Getting Started](/docs/API%20docs/gettingStarted)
- [How to Read](/docs/API%20docs/howToRead)
- [Authentication](/docs/category/auth)
- [Feed and Search](/docs/category/feed-and-search)
- [Posts](/docs/category/post)
- [Users](/docs/category/user)
- [Day](/docs/category/day)
- [Sessions](/docs/category/sessions)
- [Notifications](/docs/category/notifications)
- [Media](/docs/category/media)
- [System](/docs/category/system)
- [Analytics](/docs/category/analytics)
- [Admin](/docs/category/admin)

## Repositories

- [DayKeeper API](https://github.com/luciano655dev/daykeeper-api)
- [DayKeeper App](https://github.com/luciano655dev/daykeeper-app)
- [DayKeeper Docs](https://github.com/luciano655dev/daykeeper-docs)

## Notes

- Most endpoints documented here are authenticated.
- Protected routes generally expect `Authorization: Bearer <access_token>`.
- If you are starting locally, begin with the getting started guide before testing endpoints.
