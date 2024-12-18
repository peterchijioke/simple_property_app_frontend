
# Frontend Property Listing App

This is a frontend application built using **Next.js 15**, which is a React-based framework for building web applications. This app displays a list of properties and includes a pagination component to navigate through multiple pages of properties.

## Features

- Property listing with details such as name, address, price, and type.
- Pagination for browsing through large sets of property data.
- Responsive design for optimal viewing on mobile devices.

## Tech Stack

- **Next.js 15** - A React framework for server-rendered and statically generated web apps.
- **React** - A JavaScript library for building user interfaces.
- **Tailwind CSS** - A utility-first CSS framework for creating custom designs quickly.
- **TypeScript** - A statically typed superset of JavaScript that adds optional types to the language.
- **SWR** - A React hook for data fetching, caching, and revalidation.
- **Shadcn UI** - A utility-first design system for building modern UIs.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **pnpm**: [Install pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and go to `http://localhost:3000` to see the application in action.

## Project Structure

Here's an overview of the project structure:

```
/pages
  /index.tsx               # Home page that lists properties
  /[id].tsx                 # Page to view a single property
/components
  /PropertyCard.tsx         # Displays a single property
  /PaginationComponent.tsx  # Handles pagination for property list
/services
  /getListing.ts            # Service to fetch property data from API
/types
  /property.type.ts         # TypeScript types for property data
/styles
  /globals.css              # Global styles for the application
/public
  /images                   # Image assets for properties
```

### Pages

- **`index.tsx`**: The homepage that lists all properties with pagination.
- **`[id].tsx`**: A dynamic page that shows details of a single property.

### Components

- **`PropertyCard.tsx`**: This component is used to display individual property details like name, price, address, and an image.
- **`PaginationComponent.tsx`**: A reusable component for rendering pagination controls.

### Services

- **`getListing.ts`**: Contains the logic for fetching property data from an API endpoint.

## Styling

This project uses **Tailwind CSS** for styling. If you want to customize the design, you can modify the `tailwind.config.js` file, or you can add custom CSS to the `globals.css` file.

### Customizing Tailwind

- Tailwind classes are used throughout the app in JSX files.
- If you need to adjust the design system, you can edit `tailwind.config.js`.

## API

The application fetches data from an API. Here's the structure of the expected response:

### Example API Response

```json
{
  "message": "Properties retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Luxury Condo",
      "address": "123 Main St, Toronto",
      "price": "$500,000",
      "propertyType": "Condo",
      "imageUrl": "https://example.com/property-image.jpg"
    },
    {
      "id": 2,
      "name": "Modern House",
      "address": "456 Oak St, Vancouver",
      "price": "$1,200,000",
      "propertyType": "House",
      "imageUrl": "https://example.com/property-image.jpg"
    }
  ],
  "meta": {
    "currentPage": 1,
    "itemsPerPage": 3,
    "totalItems": 6,
    "totalPages": 2
  }
}
```

### Endpoints

- **GET** `/properties`: Fetches a list of properties. You can pass query parameters for pagination:

  - `limit`: Number of properties per page.
  - `page`: Page number to fetch.

## Running the Application Locally

### Development Mode

To run the app in development mode, use the following command:

```bash
pnpm dev
```

This will start the application and open it in your browser at `http://localhost:3000`.
