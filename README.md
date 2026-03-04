# 🔗 LinkHub Backend

A powerful, production-ready REST API for managing user profiles and links - a complete Linktree clone backend solution.

## 🚀 Live API
**Base URL:** `https://linkhub-lxbu.onrender.com`

## 📋 Table of Contents
- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [API Documentation](#-api-documentation)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database Schema](#-database-schema)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview
LinkHub Backend is a robust API service that powers a Linktree-like platform. It handles user authentication, profile management, link CRUD operations, and public profile viewing. Built with scalability and security in mind, it serves as the backbone for any link-in-bio application.

## 💻 Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcryptjs for password hashing
- **Validation:** express-validator
- **CORS:** Enabled for cross-origin requests
- **Deployment:** Render

## ✨ Features

### ✅ Implemented
- **User Authentication**
  - Secure registration with password hashing
  - JWT-based login system
  - Token expiration and refresh ready

- **Profile Management**
  - Custom display names and bios
  - Profile picture support
  - Theme preferences (light/dark/blue)
  - Username availability checking

- **Link Management**
  - Full CRUD operations
  - Drag-and-drop reordering
  - Active/inactive link toggling
  - Click tracking analytics
  - Custom icons per link

- **Public Profiles**
  - Unique URLs for each user (`/api/profile/[username]`)
  - Public view of user's active links
  - No authentication required

- **Security Features**
  - Password hashing with bcrypt
  - JWT token authentication
  - Input validation and sanitization
  - Protected routes middleware
  - CORS properly configured

### 🔜 Planned Features
- Email verification
- Password reset functionality
- Rate limiting
- Analytics dashboard
- Custom domains support
- Social media integration
- QR code generation
- Bulk link operations

## 📚 API Documentation

### Authentication Endpoints

#### Register New User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}