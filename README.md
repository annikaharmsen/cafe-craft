# Café Craft

A full-stack cafe and roastery website built with Laravel and React, featuring a dynamic menu system, blog posts, and image management capabilities.

## Demo

**Live Site:** https://cafe-craft.annikaharmsen.com

**Screenshots:**
<img alt="screenshot of home page" src="cafe-craft.annikaharmsen.com.png" height="1000" />
<img alt="screenshot of menu page" src="cafe-craft.annikaharmsen.com_menu.png" height="1000" />

## Overview

Café Craft is a modern web application designed for a fictional coffee shop and roastery. It showcases a responsive menu system with categorized items, a blog for sharing updates and stories, and a clean, user-friendly interface. Built as a learning project to explore full-stack development with Laravel and React using Inertia.js.

## Features

- **Dynamic Menu System**: Categorized menu items with multiple size options and pricing
- **Blog Posts**: Share cafe updates, coffee stories, and announcements
- **Image Management**: Dedicated image model with relationships to menu items and posts
- **Authentication**: Secure user authentication with Laravel Breeze
- **Responsive Design**: Mobile-first design using Tailwind CSS 4
- **Admin Dashboard**: Manage menu categories, items, and blog posts
- **Database Seeding**: Pre-populated demo data using Faker for quick setup
- **Modern UI Components**: Radix UI primitives and custom React components

## Tech Stack

### Backend

- **Laravel 12** - PHP web framework
- **PHP 8.2+** - Server-side language
- **Inertia.js 2** - Modern monolith architecture connecting Laravel and React
- **SQLite/MySQL** - Testing/production database

### Frontend

- **React 19** - UI library
- **TypeScript 5.7** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite 7** - Fast build tool and dev server
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **FontAwesome** - Additional icon set

### Development Tools

- **Laravel Pint** - PHP code style fixer
- **ESLint & Prettier** - JavaScript/TypeScript linting and formatting
- **PHPUnit** - PHP testing framework
- **Concurrently** - Run multiple dev commands simultaneously

## Installation

### Prerequisites

- PHP 8.2 or higher
- Composer
- Node.js 18+ and npm
- SQLite (or MySQL/PostgreSQL if preferred)

### Setup

1. Clone the repository:

```bash
git clone <your-repository-url>
cd cafe-craft
```

2. Install PHP dependencies:

```bash
composer install
```

3. Install Node.js dependencies:

```bash
npm install
```

4. Create environment file:

```bash
cp .env.example .env
```

5. Generate application key:

```bash
php artisan key:generate
```

6. Configure your database in `.env`:

```env
DB_CONNECTION=sqlite
# DB_DATABASE=/absolute/path/to/database.sqlite

# Or use MySQL/PostgreSQL:
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=cafe_craft
# DB_USERNAME=your_username
# DB_PASSWORD=your_password
```

7. Run migrations and seed the database:

```bash
php artisan migrate --seed
```

8. Link storage directory:

```bash
php artisan storage:link
```

## Usage

### Development

Start the development server with all necessary processes (Laravel server, queue worker, logs, and Vite):

```bash
composer dev
```

This runs:

- Laravel development server on http://localhost:8000
- Vite dev server for hot module replacement
- Queue worker for background jobs
- Laravel Pail for real-time logs

Alternatively, run processes individually:

```bash
# Terminal 1 - Laravel server
php artisan serve

# Terminal 2 - Vite dev server
npm run dev

# Terminal 3 (optional) - Queue worker
php artisan queue:listen
```

### Building for Production

```bash
npm run build
```

For Server-Side Rendering (SSR):

```bash
composer dev:ssr
```

### Testing

Run PHP tests:

```bash
composer test
```

### Code Quality

Format JavaScript/TypeScript code:

```bash
npm run format
```

Lint JavaScript/TypeScript code:

```bash
npm run lint
```

Fix PHP code style:

```bash
./vendor/bin/pint
```

## Project Structure

```
cafe-craft/
├── app/
│   └── Models/          # Eloquent models (User, MenuItem, MenuCategory, Post, Image)
├── database/
│   ├── migrations/      # Database schema migrations
│   └── seeders/         # Database seeders with Faker
├── resources/
│   └── js/
│       ├── components/  # React components
│       ├── layouts/     # Page layouts
│       └── Pages/       # Inertia.js pages (home, menu, dashboard)
├── routes/
│   ├── web.php         # Web routes
│   └── auth.php        # Authentication routes
└── public/
    └── storage/        # Publicly accessible storage (linked)
```

## Database Schema

### Core Models

- **User**: Authentication and user management
- **MenuCategory**: Menu sections (e.g., Coffee, Pastries, Sandwiches)
- **MenuItem**: Individual menu items with pricing tiers (small, medium, large)
- **Post**: Blog posts and updates
- **Image**: Centralized image storage with polymorphic relationships

### Relationships

- MenuCategory → hasMany → MenuItem
- MenuCategory → belongsTo → Image
- MenuItem → belongsTo → MenuCategory
- MenuItem → belongsTo → Image
- Post → belongsTo → Image

## Contributing

Contributions are welcome! This is an open-source learning project, and I'd love to collaborate with other developers.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines

- Follow the existing code style (use Pint for PHP, Prettier for JavaScript/TypeScript)
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

- Built with [Laravel](https://laravel.com) and [React](https://react.dev)
- UI components from [Radix UI](https://www.radix-ui.com)
- Icons from [Lucide](https://lucide.dev) and [FontAwesome](https://fontawesome.com)
- Demo images from [Pixabay](https://pixabay.com)

---

**Note**: This is a portfolio and learning project created to demonstrate full-stack development skills with Laravel, React, and Inertia.js.
